import { Component, h, Element, Event, EventEmitter, State, Prop } from "@stencil/core";
import { computePosition, autoUpdate, offset, flip, shift } from "@floating-ui/dom";

@Component({
    tag: "eui-color-picker",
    styleUrl: "./color-picker.scss",
    shadow: false,
})
export class EUIColorPicker {

    @Element() hostEl!: HTMLElement;

    @Event() changed!: EventEmitter<string>;

    @Prop() mode: "compact" | "standard" | "full" = "compact"

    @State() private previousHex = "#000000";
    @State() private copyClicked: boolean = false;

    private confirmBtnEl?: HTMLButtonElement;
    private cancelBtnEl?: HTMLButtonElement;
    private colorAreaEl?: HTMLElement;
    private selectorEl?: HTMLElement;
    private hueEl?: HTMLElement;
    private hueSelectorEl?: HTMLElement;
    private hexInputEl?: HTMLInputElement;
    private hue = 0;
    private saturation = 50;
    private value = 50;
    private hex = "#000000";
    private popupEl: HTMLDivElement | null = null;
    private triggerEl?: HTMLElement;

    private cleanupAutoUpdate?: () => void;

    private confirmColor = () => {
        this.changed.emit(this.hex);
        this.previousHex = this.hex;
        this.hidePopup();
    };

    private cancelColor = () => {

        this.hex = this.previousHex.toUpperCase();

        const hsv = this.hexToHsv(this.hex);

        if (hsv) {
            this.hue = hsv.h;
            this.saturation = hsv.s;
            this.value = hsv.v;
        }

        this.syncUI();
        this.hidePopup();
    };

    private async copyToClipboard() {
        this.copyClicked = true;

        try { await navigator.clipboard.writeText(this.previousHex); }
        catch (err) { console.error("Failed to copy:", err); }

        setTimeout(() => { this.copyClicked = false; }, 700);
    }

    private showPopup() {
        this.previousHex = this.hex;

        if (!this.popupEl) {
            this.popupEl = document.createElement("div");
            this.popupEl.className = "color-picker-popup";

            this.popupEl.innerHTML = `
                <div class="color-area">
                    <div class="color-area-white"></div>
                    <div class="color-area-black"></div>
                    <div class="color-selector"></div>
                </div>
                <div class="hue-slider">
                    <div class="hue-selector"></div>
                </div>
                <eui-input class="hex-input" value="${this.hex}" placeHolder="hex code"></eui-input>
                <div class="color-actions">
                    <eui-button class="confirm" size='sm' variant='primary'>save</eui-button>
                    <eui-button class="cancel" size='sm' mode='text-button' variant='danger'>cancel</eui-button>
                </div>
                `;

            document.body.appendChild(this.popupEl);

            this.colorAreaEl = this.popupEl.querySelector(".color-area") as HTMLElement;
            this.selectorEl = this.popupEl.querySelector(".color-selector") as HTMLElement;
            this.hueEl = this.popupEl.querySelector(".hue-slider") as HTMLElement;
            this.hueSelectorEl = this.popupEl.querySelector(".hue-selector") as HTMLElement;
            this.hexInputEl = this.popupEl.querySelector(".hex-input") as HTMLInputElement;
            this.confirmBtnEl = this.popupEl.querySelector(".confirm") as HTMLButtonElement;
            this.cancelBtnEl = this.popupEl.querySelector(".cancel") as HTMLButtonElement;

            this.confirmBtnEl.addEventListener("click", this.confirmColor);
            this.cancelBtnEl.addEventListener("click", this.cancelColor);

            this.colorAreaEl.addEventListener("mousedown", this.handleColorPick);
            this.hueEl.addEventListener("mousedown", this.handleHuePick);
            this.hexInputEl.addEventListener("input", this.handleHexInput);

        }

        this.triggerEl = this.hostEl.querySelector(".clp") as HTMLElement;
        this.popupEl.style.display = "block";
        this.popupEl.style.visibility = "hidden";

        this.cleanupAutoUpdate?.();

        this.cleanupAutoUpdate =
            autoUpdate(
                this.triggerEl,
                this.popupEl,
                async () => {

                    const { x, y } =
                        await computePosition(
                            this.triggerEl!,
                            this.popupEl!,
                            { placement: "top", middleware: [offset(8), flip(), shift({ padding: 8 })] }
                        );

                    Object.assign(
                        this.popupEl!.style, { position: "absolute", left: `${x}px`, top: `${y}px`, zIndex: "9999" }
                    );

                    requestAnimationFrame(() => { this.popupEl!.style.visibility = "visible"; });
                }
            );
    }

    private handleColorPick = (ev: MouseEvent) => {
        if (!this.colorAreaEl) return;

        const rect = this.colorAreaEl.getBoundingClientRect();

        const move = (e: MouseEvent) => {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            x = Math.max(0, Math.min(x, rect.width));
            y = Math.max(0, Math.min(y, rect.height));

            this.saturation = (x / rect.width) * 100;
            this.value = 100 - ((y / rect.height) * 100);

            this.moveSelector(this.saturation, 100 - this.value);
            this.updateHex();
        };

        move(ev);

        const stop = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    };

    private handleHuePick = (ev: MouseEvent) => {
        if (!this.hueEl) return;

        const rect = this.hueEl.getBoundingClientRect();

        const move = (e: MouseEvent) => {
            let x = e.clientX - rect.left;

            x = Math.max(0, Math.min(x, rect.width));

            const percent = x / rect.width;
            this.hue = percent * 360;

            this.moveHueSelector(percent * 100);
            this.updateHue();
            this.updateHex();
        };

        move(ev);

        const stop = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    };

    private handleHexInput = (e: Event) => {
        const value = (e.target as HTMLInputElement).value;

        if (!this.isValidHex(value)) return;

        this.hex = value.toUpperCase();
        const hsv = this.hexToHsv(value);

        if (!hsv) return;

        this.hue = hsv.h;
        this.saturation = hsv.s;
        this.value = hsv.v;

        this.syncUI();
    };

    private updateHue() {
        if (this.colorAreaEl)
            this.colorAreaEl.style.background = `hsl(${this.hue},100%,50%)`;
    }

    private updateHex() {
        this.hex = this.hsvToHex(this.hue, this.saturation, this.value).toUpperCase();

        if (this.hexInputEl)
            this.hexInputEl.value = this.hex;
    }

    private syncUI() {
        this.moveHueSelector((this.hue / 360) * 100);

        this.moveSelector(this.saturation, 100 - this.value);

        this.updateHue();
        this.updateHex();
    }

    private moveSelector(x: number, y: number) {
        if (!this.selectorEl) return;

        this.selectorEl.style.left = `${x}%`;

        this.selectorEl.style.top = `${y}%`;
    }

    private moveHueSelector(x: number) {
        if (this.hueSelectorEl)
            this.hueSelectorEl.style.left = `${x}%`;
    }

    private isValidHex(value: string) { return /^#([0-9A-F]{3}){1,2}$/i.test(value); }

    private hsvToHex(h: number, s: number, v: number) {

        s /= 100;
        v /= 100;

        const c = v * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = v - c;

        let r = 0, g = 0, b = 0;

        if (h < 60) [r, g, b] = [c, x, 0];
        else if (h < 120) [r, g, b] = [x, c, 0];
        else if (h < 180) [r, g, b] = [0, c, x];
        else if (h < 240) [r, g, b] = [0, x, c];
        else if (h < 300) [r, g, b] = [x, 0, c];
        else[r, g, b] = [c, 0, x];

        return "#" + [r, g, b].map(i => Math.round((i + m) * 255).toString(16).padStart(2, "0")).join("");
    }

    private hexToHsv(hex: string): { h: number; s: number; v: number } | null {
        hex = hex.replace("#", "");

        if (hex.length !== 6)
            return null;

        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;

        let h = 0;

        if (delta !== 0) {
            if (max === r) h = 60 * (((g - b) / delta) % 6);

            else if (max === g) h = 60 * (((b - r) / delta) + 2);

            else h = 60 * (((r - g) / delta) + 4);
        }

        if (h < 0) h += 360;

        const s = max === 0 ? 0 : delta / max;
        const v = max;

        return { h, s: s * 100, v: v * 100 };
    }

    private hidePopup() {
        this.cleanupAutoUpdate?.();

        if (this.popupEl) {
            this.popupEl.style.display = "none";
            this.popupEl.style.visibility = "hidden";
        }
    }

    componentDidLoad() {
        document.addEventListener("click", this.handleDocumentClick);
    }

    private handleDocumentClick = (ev: MouseEvent) => {
        const target = ev.target as Node;

        if (this.hostEl.contains(target) || this.popupEl?.contains(target)) return;

        this.hex = this.previousHex.toUpperCase();
        this.hidePopup();
    }

    disconnectedCallback() {
        document.removeEventListener("click", this.handleDocumentClick);

        this.cleanupAutoUpdate?.();
        this.popupEl?.remove();
    }

    render() {
        return (
            <span
                class={{
                    clp: true,
                    [`clp--${this.mode}`]: true
                }}>
                <span style={{ "backgroundColor": this.previousHex }} class="preview" onClick={() => this.showPopup()}></span>
                {this.mode != "compact" && <span class="value" onClick={() => this.copyToClipboard()}>{this.previousHex}</span>}
                {this.mode == "full" && <span class="copy" onClick={() => this.copyToClipboard()}>
                    {this.copyClicked ?
                        <eui-icon class="clicked" name='check' type="outline" />
                        :
                        <eui-icon name='square-2-stack-outline' type="outline" />}
                </span>}
            </span>
        );
    }
}