import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc grid">

<span class="icon-row flex">

<p class="icon-name">academic-cap</p>
<eui-icon name="academic-cap" type="solid"></eui-icon>
<eui-icon name="academic-cap" type="outline"></eui-icon>
<eui-icon name="academic-cap" type="mini"></eui-icon>
<eui-icon name="academic-cap" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">adjustments-horizontal</p>
<eui-icon name="adjustments-horizontal" type="solid"></eui-icon>
<eui-icon name="adjustments-horizontal" type="outline"></eui-icon>
<eui-icon name="adjustments-horizontal" type="mini"></eui-icon>
<eui-icon name="adjustments-horizontal" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">adjustments-vertical</p>
<eui-icon name="adjustments-vertical" type="solid"></eui-icon>
<eui-icon name="adjustments-vertical" type="outline"></eui-icon>
<eui-icon name="adjustments-vertical" type="mini"></eui-icon>
<eui-icon name="adjustments-vertical" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">archive-box</p>
<eui-icon name="archive-box" type="solid"></eui-icon>
<eui-icon name="archive-box" type="outline"></eui-icon>
<eui-icon name="archive-box" type="mini"></eui-icon>
<eui-icon name="archive-box" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">archive-box-arrow-down</p>
<eui-icon name="archive-box-arrow-down" type="solid"></eui-icon>
<eui-icon name="archive-box-arrow-down" type="outline"></eui-icon>
<eui-icon name="archive-box-arrow-down" type="mini"></eui-icon>
<eui-icon name="archive-box-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">archive-box-x-mark</p>
<eui-icon name="archive-box-x-mark" type="solid"></eui-icon>
<eui-icon name="archive-box-x-mark" type="outline"></eui-icon>
<eui-icon name="archive-box-x-mark" type="mini"></eui-icon>
<eui-icon name="archive-box-x-mark" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down</p>
<eui-icon name="arrow-down" type="solid"></eui-icon>
<eui-icon name="arrow-down" type="outline"></eui-icon>
<eui-icon name="arrow-down" type="mini"></eui-icon>
<eui-icon name="arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-circle</p>
<eui-icon name="arrow-down-circle" type="solid"></eui-icon>
<eui-icon name="arrow-down-circle" type="outline"></eui-icon>
<eui-icon name="arrow-down-circle" type="mini"></eui-icon>
<eui-icon name="arrow-down-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-heavy</p>
<eui-icon name="arrow-down-heavy" type="solid"></eui-icon>
<eui-icon name="arrow-down-heavy" type="outline"></eui-icon>
<eui-icon name="arrow-down-heavy" type="mini"></eui-icon>
<eui-icon name="arrow-down-heavy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-left</p>
<eui-icon name="arrow-down-left" type="solid"></eui-icon>
<eui-icon name="arrow-down-left" type="outline"></eui-icon>
<eui-icon name="arrow-down-left" type="mini"></eui-icon>
<eui-icon name="arrow-down-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-on-square</p>
<eui-icon name="arrow-down-on-square" type="solid"></eui-icon>
<eui-icon name="arrow-down-on-square" type="outline"></eui-icon>
<eui-icon name="arrow-down-on-square" type="mini"></eui-icon>
<eui-icon name="arrow-down-on-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-on-square-stack</p>
<eui-icon name="arrow-down-on-square-stack" type="solid"></eui-icon>
<eui-icon name="arrow-down-on-square-stack" type="outline"></eui-icon>
<eui-icon name="arrow-down-on-square-stack" type="mini"></eui-icon>
<eui-icon name="arrow-down-on-square-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-right</p>
<eui-icon name="arrow-down-right" type="solid"></eui-icon>
<eui-icon name="arrow-down-right" type="outline"></eui-icon>
<eui-icon name="arrow-down-right" type="mini"></eui-icon>
<eui-icon name="arrow-down-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-down-tray</p>
<eui-icon name="arrow-down-tray" type="solid"></eui-icon>
<eui-icon name="arrow-down-tray" type="outline"></eui-icon>
<eui-icon name="arrow-down-tray" type="mini"></eui-icon>
<eui-icon name="arrow-down-tray" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-left</p>
<eui-icon name="arrow-left" type="solid"></eui-icon>
<eui-icon name="arrow-left" type="outline"></eui-icon>
<eui-icon name="arrow-left" type="mini"></eui-icon>
<eui-icon name="arrow-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-left-circle</p>
<eui-icon name="arrow-left-circle" type="solid"></eui-icon>
<eui-icon name="arrow-left-circle" type="outline"></eui-icon>
<eui-icon name="arrow-left-circle" type="mini"></eui-icon>
<eui-icon name="arrow-left-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-left-end-on-rectangle</p>
<eui-icon name="arrow-left-end-on-rectangle" type="solid"></eui-icon>
<eui-icon name="arrow-left-end-on-rectangle" type="outline"></eui-icon>
<eui-icon name="arrow-left-end-on-rectangle" type="mini"></eui-icon>
<eui-icon name="arrow-left-end-on-rectangle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-left-heavy</p>
<eui-icon name="arrow-left-heavy" type="solid"></eui-icon>
<eui-icon name="arrow-left-heavy" type="outline"></eui-icon>
<eui-icon name="arrow-left-heavy" type="mini"></eui-icon>
<eui-icon name="arrow-left-heavy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-left-start-on-rectangle</p>
<eui-icon name="arrow-left-start-on-rectangle" type="solid"></eui-icon>
<eui-icon name="arrow-left-start-on-rectangle" type="outline"></eui-icon>
<eui-icon name="arrow-left-start-on-rectangle" type="mini"></eui-icon>
<eui-icon name="arrow-left-start-on-rectangle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-long-down</p>
<eui-icon name="arrow-long-down" type="solid"></eui-icon>
<eui-icon name="arrow-long-down" type="outline"></eui-icon>
<eui-icon name="arrow-long-down" type="mini"></eui-icon>
<eui-icon name="arrow-long-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-long-left</p>
<eui-icon name="arrow-long-left" type="solid"></eui-icon>
<eui-icon name="arrow-long-left" type="outline"></eui-icon>
<eui-icon name="arrow-long-left" type="mini"></eui-icon>
<eui-icon name="arrow-long-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-long-right</p>
<eui-icon name="arrow-long-right" type="solid"></eui-icon>
<eui-icon name="arrow-long-right" type="outline"></eui-icon>
<eui-icon name="arrow-long-right" type="mini"></eui-icon>
<eui-icon name="arrow-long-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-long-up</p>
<eui-icon name="arrow-long-up" type="solid"></eui-icon>
<eui-icon name="arrow-long-up" type="outline"></eui-icon>
<eui-icon name="arrow-long-up" type="mini"></eui-icon>
<eui-icon name="arrow-long-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-path</p>
<eui-icon name="arrow-path" type="solid"></eui-icon>
<eui-icon name="arrow-path" type="outline"></eui-icon>
<eui-icon name="arrow-path" type="mini"></eui-icon>
<eui-icon name="arrow-path" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-path-rounded-square</p>
<eui-icon name="arrow-path-rounded-square" type="solid"></eui-icon>
<eui-icon name="arrow-path-rounded-square" type="outline"></eui-icon>
<eui-icon name="arrow-path-rounded-square" type="mini"></eui-icon>
<eui-icon name="arrow-path-rounded-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-right</p>
<eui-icon name="arrow-right" type="solid"></eui-icon>
<eui-icon name="arrow-right" type="outline"></eui-icon>
<eui-icon name="arrow-right" type="mini"></eui-icon>
<eui-icon name="arrow-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-right-circle</p>
<eui-icon name="arrow-right-circle" type="solid"></eui-icon>
<eui-icon name="arrow-right-circle" type="outline"></eui-icon>
<eui-icon name="arrow-right-circle" type="mini"></eui-icon>
<eui-icon name="arrow-right-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-right-end-on-rectangle</p>
<eui-icon name="arrow-right-end-on-rectangle" type="solid"></eui-icon>
<eui-icon name="arrow-right-end-on-rectangle" type="outline"></eui-icon>
<eui-icon name="arrow-right-end-on-rectangle" type="mini"></eui-icon>
<eui-icon name="arrow-right-end-on-rectangle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-right-heavy</p>
<eui-icon name="arrow-right-heavy" type="solid"></eui-icon>
<eui-icon name="arrow-right-heavy" type="outline"></eui-icon>
<eui-icon name="arrow-right-heavy" type="mini"></eui-icon>
<eui-icon name="arrow-right-heavy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-right-start-on-rectangle</p>
<eui-icon name="arrow-right-start-on-rectangle" type="solid"></eui-icon>
<eui-icon name="arrow-right-start-on-rectangle" type="outline"></eui-icon>
<eui-icon name="arrow-right-start-on-rectangle" type="mini"></eui-icon>
<eui-icon name="arrow-right-start-on-rectangle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-top-right-on-square</p>
<eui-icon name="arrow-top-right-on-square" type="solid"></eui-icon>
<eui-icon name="arrow-top-right-on-square" type="outline"></eui-icon>
<eui-icon name="arrow-top-right-on-square" type="mini"></eui-icon>
<eui-icon name="arrow-top-right-on-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-trending-down</p>
<eui-icon name="arrow-trending-down" type="solid"></eui-icon>
<eui-icon name="arrow-trending-down" type="outline"></eui-icon>
<eui-icon name="arrow-trending-down" type="mini"></eui-icon>
<eui-icon name="arrow-trending-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-trending-up</p>
<eui-icon name="arrow-trending-up" type="solid"></eui-icon>
<eui-icon name="arrow-trending-up" type="outline"></eui-icon>
<eui-icon name="arrow-trending-up" type="mini"></eui-icon>
<eui-icon name="arrow-trending-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-down-left</p>
<eui-icon name="arrow-turn-down-left" type="solid"></eui-icon>
<eui-icon name="arrow-turn-down-left" type="outline"></eui-icon>
<eui-icon name="arrow-turn-down-left" type="mini"></eui-icon>
<eui-icon name="arrow-turn-down-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-down-right</p>
<eui-icon name="arrow-turn-down-right" type="solid"></eui-icon>
<eui-icon name="arrow-turn-down-right" type="outline"></eui-icon>
<eui-icon name="arrow-turn-down-right" type="mini"></eui-icon>
<eui-icon name="arrow-turn-down-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-left-down</p>
<eui-icon name="arrow-turn-left-down" type="solid"></eui-icon>
<eui-icon name="arrow-turn-left-down" type="outline"></eui-icon>
<eui-icon name="arrow-turn-left-down" type="mini"></eui-icon>
<eui-icon name="arrow-turn-left-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-left-up</p>
<eui-icon name="arrow-turn-left-up" type="solid"></eui-icon>
<eui-icon name="arrow-turn-left-up" type="outline"></eui-icon>
<eui-icon name="arrow-turn-left-up" type="mini"></eui-icon>
<eui-icon name="arrow-turn-left-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-right-down</p>
<eui-icon name="arrow-turn-right-down" type="solid"></eui-icon>
<eui-icon name="arrow-turn-right-down" type="outline"></eui-icon>
<eui-icon name="arrow-turn-right-down" type="mini"></eui-icon>
<eui-icon name="arrow-turn-right-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-right-up</p>
<eui-icon name="arrow-turn-right-up" type="solid"></eui-icon>
<eui-icon name="arrow-turn-right-up" type="outline"></eui-icon>
<eui-icon name="arrow-turn-right-up" type="mini"></eui-icon>
<eui-icon name="arrow-turn-right-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-up-left</p>
<eui-icon name="arrow-turn-up-left" type="solid"></eui-icon>
<eui-icon name="arrow-turn-up-left" type="outline"></eui-icon>
<eui-icon name="arrow-turn-up-left" type="mini"></eui-icon>
<eui-icon name="arrow-turn-up-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-turn-up-right</p>
<eui-icon name="arrow-turn-up-right" type="solid"></eui-icon>
<eui-icon name="arrow-turn-up-right" type="outline"></eui-icon>
<eui-icon name="arrow-turn-up-right" type="mini"></eui-icon>
<eui-icon name="arrow-turn-up-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up</p>
<eui-icon name="arrow-up" type="solid"></eui-icon>
<eui-icon name="arrow-up" type="outline"></eui-icon>
<eui-icon name="arrow-up" type="mini"></eui-icon>
<eui-icon name="arrow-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-circle</p>
<eui-icon name="arrow-up-circle" type="solid"></eui-icon>
<eui-icon name="arrow-up-circle" type="outline"></eui-icon>
<eui-icon name="arrow-up-circle" type="mini"></eui-icon>
<eui-icon name="arrow-up-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-heavy</p>
<eui-icon name="arrow-up-heavy" type="solid"></eui-icon>
<eui-icon name="arrow-up-heavy" type="outline"></eui-icon>
<eui-icon name="arrow-up-heavy" type="mini"></eui-icon>
<eui-icon name="arrow-up-heavy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-left</p>
<eui-icon name="arrow-up-left" type="solid"></eui-icon>
<eui-icon name="arrow-up-left" type="outline"></eui-icon>
<eui-icon name="arrow-up-left" type="mini"></eui-icon>
<eui-icon name="arrow-up-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-on-square</p>
<eui-icon name="arrow-up-on-square" type="solid"></eui-icon>
<eui-icon name="arrow-up-on-square" type="outline"></eui-icon>
<eui-icon name="arrow-up-on-square" type="mini"></eui-icon>
<eui-icon name="arrow-up-on-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-on-square-stack</p>
<eui-icon name="arrow-up-on-square-stack" type="solid"></eui-icon>
<eui-icon name="arrow-up-on-square-stack" type="outline"></eui-icon>
<eui-icon name="arrow-up-on-square-stack" type="mini"></eui-icon>
<eui-icon name="arrow-up-on-square-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-right</p>
<eui-icon name="arrow-up-right" type="solid"></eui-icon>
<eui-icon name="arrow-up-right" type="outline"></eui-icon>
<eui-icon name="arrow-up-right" type="mini"></eui-icon>
<eui-icon name="arrow-up-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-up-tray</p>
<eui-icon name="arrow-up-tray" type="solid"></eui-icon>
<eui-icon name="arrow-up-tray" type="outline"></eui-icon>
<eui-icon name="arrow-up-tray" type="mini"></eui-icon>
<eui-icon name="arrow-up-tray" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-uturn-down</p>
<eui-icon name="arrow-uturn-down" type="solid"></eui-icon>
<eui-icon name="arrow-uturn-down" type="outline"></eui-icon>
<eui-icon name="arrow-uturn-down" type="mini"></eui-icon>
<eui-icon name="arrow-uturn-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-uturn-left</p>
<eui-icon name="arrow-uturn-left" type="solid"></eui-icon>
<eui-icon name="arrow-uturn-left" type="outline"></eui-icon>
<eui-icon name="arrow-uturn-left" type="mini"></eui-icon>
<eui-icon name="arrow-uturn-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-uturn-right</p>
<eui-icon name="arrow-uturn-right" type="solid"></eui-icon>
<eui-icon name="arrow-uturn-right" type="outline"></eui-icon>
<eui-icon name="arrow-uturn-right" type="mini"></eui-icon>
<eui-icon name="arrow-uturn-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrow-uturn-up</p>
<eui-icon name="arrow-uturn-up" type="solid"></eui-icon>
<eui-icon name="arrow-uturn-up" type="outline"></eui-icon>
<eui-icon name="arrow-uturn-up" type="mini"></eui-icon>
<eui-icon name="arrow-uturn-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrows-pointing-in</p>
<eui-icon name="arrows-pointing-in" type="solid"></eui-icon>
<eui-icon name="arrows-pointing-in" type="outline"></eui-icon>
<eui-icon name="arrows-pointing-in" type="mini"></eui-icon>
<eui-icon name="arrows-pointing-in" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrows-pointing-out</p>
<eui-icon name="arrows-pointing-out" type="solid"></eui-icon>
<eui-icon name="arrows-pointing-out" type="outline"></eui-icon>
<eui-icon name="arrows-pointing-out" type="mini"></eui-icon>
<eui-icon name="arrows-pointing-out" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrows-right-left</p>
<eui-icon name="arrows-right-left" type="solid"></eui-icon>
<eui-icon name="arrows-right-left" type="outline"></eui-icon>
<eui-icon name="arrows-right-left" type="mini"></eui-icon>
<eui-icon name="arrows-right-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">arrows-up-down</p>
<eui-icon name="arrows-up-down" type="solid"></eui-icon>
<eui-icon name="arrows-up-down" type="outline"></eui-icon>
<eui-icon name="arrows-up-down" type="mini"></eui-icon>
<eui-icon name="arrows-up-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">at-symbol</p>
<eui-icon name="at-symbol" type="solid"></eui-icon>
<eui-icon name="at-symbol" type="outline"></eui-icon>
<eui-icon name="at-symbol" type="mini"></eui-icon>
<eui-icon name="at-symbol" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">backspace</p>
<eui-icon name="backspace" type="solid"></eui-icon>
<eui-icon name="backspace" type="outline"></eui-icon>
<eui-icon name="backspace" type="mini"></eui-icon>
<eui-icon name="backspace" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">backward</p>
<eui-icon name="backward" type="solid"></eui-icon>
<eui-icon name="backward" type="outline"></eui-icon>
<eui-icon name="backward" type="mini"></eui-icon>
<eui-icon name="backward" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">banknotes</p>
<eui-icon name="banknotes" type="solid"></eui-icon>
<eui-icon name="banknotes" type="outline"></eui-icon>
<eui-icon name="banknotes" type="mini"></eui-icon>
<eui-icon name="banknotes" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-2</p>
<eui-icon name="bars-2" type="solid"></eui-icon>
<eui-icon name="bars-2" type="outline"></eui-icon>
<eui-icon name="bars-2" type="mini"></eui-icon>
<eui-icon name="bars-2" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-3</p>
<eui-icon name="bars-3" type="solid"></eui-icon>
<eui-icon name="bars-3" type="outline"></eui-icon>
<eui-icon name="bars-3" type="mini"></eui-icon>
<eui-icon name="bars-3" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-3-bottom-left</p>
<eui-icon name="bars-3-bottom-left" type="solid"></eui-icon>
<eui-icon name="bars-3-bottom-left" type="outline"></eui-icon>
<eui-icon name="bars-3-bottom-left" type="mini"></eui-icon>
<eui-icon name="bars-3-bottom-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-3-bottom-right</p>
<eui-icon name="bars-3-bottom-right" type="solid"></eui-icon>
<eui-icon name="bars-3-bottom-right" type="outline"></eui-icon>
<eui-icon name="bars-3-bottom-right" type="mini"></eui-icon>
<eui-icon name="bars-3-bottom-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-3-center-left</p>
<eui-icon name="bars-3-center-left" type="solid"></eui-icon>
<eui-icon name="bars-3-center-left" type="outline"></eui-icon>
<eui-icon name="bars-3-center-left" type="mini"></eui-icon>
<eui-icon name="bars-3-center-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-4</p>
<eui-icon name="bars-4" type="solid"></eui-icon>
<eui-icon name="bars-4" type="outline"></eui-icon>
<eui-icon name="bars-4" type="mini"></eui-icon>
<eui-icon name="bars-4" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-arrow-down</p>
<eui-icon name="bars-arrow-down" type="solid"></eui-icon>
<eui-icon name="bars-arrow-down" type="outline"></eui-icon>
<eui-icon name="bars-arrow-down" type="mini"></eui-icon>
<eui-icon name="bars-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bars-arrow-up</p>
<eui-icon name="bars-arrow-up" type="solid"></eui-icon>
<eui-icon name="bars-arrow-up" type="outline"></eui-icon>
<eui-icon name="bars-arrow-up" type="mini"></eui-icon>
<eui-icon name="bars-arrow-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">battery-0</p>
<eui-icon name="battery-0" type="solid"></eui-icon>
<eui-icon name="battery-0" type="outline"></eui-icon>
<eui-icon name="battery-0" type="mini"></eui-icon>
<eui-icon name="battery-0" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">battery-100</p>
<eui-icon name="battery-100" type="solid"></eui-icon>
<eui-icon name="battery-100" type="outline"></eui-icon>
<eui-icon name="battery-100" type="mini"></eui-icon>
<eui-icon name="battery-100" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">battery-50</p>
<eui-icon name="battery-50" type="solid"></eui-icon>
<eui-icon name="battery-50" type="outline"></eui-icon>
<eui-icon name="battery-50" type="mini"></eui-icon>
<eui-icon name="battery-50" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">beaker</p>
<eui-icon name="beaker" type="solid"></eui-icon>
<eui-icon name="beaker" type="outline"></eui-icon>
<eui-icon name="beaker" type="mini"></eui-icon>
<eui-icon name="beaker" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bell</p>
<eui-icon name="bell" type="solid"></eui-icon>
<eui-icon name="bell" type="outline"></eui-icon>
<eui-icon name="bell" type="mini"></eui-icon>
<eui-icon name="bell" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bell-alert</p>
<eui-icon name="bell-alert" type="solid"></eui-icon>
<eui-icon name="bell-alert" type="outline"></eui-icon>
<eui-icon name="bell-alert" type="mini"></eui-icon>
<eui-icon name="bell-alert" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bell-slash</p>
<eui-icon name="bell-slash" type="solid"></eui-icon>
<eui-icon name="bell-slash" type="outline"></eui-icon>
<eui-icon name="bell-slash" type="mini"></eui-icon>
<eui-icon name="bell-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bell-snooze</p>
<eui-icon name="bell-snooze" type="solid"></eui-icon>
<eui-icon name="bell-snooze" type="outline"></eui-icon>
<eui-icon name="bell-snooze" type="mini"></eui-icon>
<eui-icon name="bell-snooze" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bold</p>
<eui-icon name="bold" type="solid"></eui-icon>
<eui-icon name="bold" type="outline"></eui-icon>
<eui-icon name="bold" type="mini"></eui-icon>
<eui-icon name="bold" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bolt</p>
<eui-icon name="bolt" type="solid"></eui-icon>
<eui-icon name="bolt" type="outline"></eui-icon>
<eui-icon name="bolt" type="mini"></eui-icon>
<eui-icon name="bolt" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bolt-slash</p>
<eui-icon name="bolt-slash" type="solid"></eui-icon>
<eui-icon name="bolt-slash" type="outline"></eui-icon>
<eui-icon name="bolt-slash" type="mini"></eui-icon>
<eui-icon name="bolt-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">book-open</p>
<eui-icon name="book-open" type="solid"></eui-icon>
<eui-icon name="book-open" type="outline"></eui-icon>
<eui-icon name="book-open" type="mini"></eui-icon>
<eui-icon name="book-open" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bookmark</p>
<eui-icon name="bookmark" type="solid"></eui-icon>
<eui-icon name="bookmark" type="outline"></eui-icon>
<eui-icon name="bookmark" type="mini"></eui-icon>
<eui-icon name="bookmark" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bookmark-slash</p>
<eui-icon name="bookmark-slash" type="solid"></eui-icon>
<eui-icon name="bookmark-slash" type="outline"></eui-icon>
<eui-icon name="bookmark-slash" type="mini"></eui-icon>
<eui-icon name="bookmark-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bookmark-square</p>
<eui-icon name="bookmark-square" type="solid"></eui-icon>
<eui-icon name="bookmark-square" type="outline"></eui-icon>
<eui-icon name="bookmark-square" type="mini"></eui-icon>
<eui-icon name="bookmark-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">briefcase</p>
<eui-icon name="briefcase" type="solid"></eui-icon>
<eui-icon name="briefcase" type="outline"></eui-icon>
<eui-icon name="briefcase" type="mini"></eui-icon>
<eui-icon name="briefcase" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">bug-ant</p>
<eui-icon name="bug-ant" type="solid"></eui-icon>
<eui-icon name="bug-ant" type="outline"></eui-icon>
<eui-icon name="bug-ant" type="mini"></eui-icon>
<eui-icon name="bug-ant" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">building-library</p>
<eui-icon name="building-library" type="solid"></eui-icon>
<eui-icon name="building-library" type="outline"></eui-icon>
<eui-icon name="building-library" type="mini"></eui-icon>
<eui-icon name="building-library" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">building-office</p>
<eui-icon name="building-office" type="solid"></eui-icon>
<eui-icon name="building-office" type="outline"></eui-icon>
<eui-icon name="building-office" type="mini"></eui-icon>
<eui-icon name="building-office" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">building-office-2</p>
<eui-icon name="building-office-2" type="solid"></eui-icon>
<eui-icon name="building-office-2" type="outline"></eui-icon>
<eui-icon name="building-office-2" type="mini"></eui-icon>
<eui-icon name="building-office-2" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">building-storefront</p>
<eui-icon name="building-storefront" type="solid"></eui-icon>
<eui-icon name="building-storefront" type="outline"></eui-icon>
<eui-icon name="building-storefront" type="mini"></eui-icon>
<eui-icon name="building-storefront" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cake</p>
<eui-icon name="cake" type="solid"></eui-icon>
<eui-icon name="cake" type="outline"></eui-icon>
<eui-icon name="cake" type="mini"></eui-icon>
<eui-icon name="cake" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">calculator</p>
<eui-icon name="calculator" type="solid"></eui-icon>
<eui-icon name="calculator" type="outline"></eui-icon>
<eui-icon name="calculator" type="mini"></eui-icon>
<eui-icon name="calculator" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">calendar</p>
<eui-icon name="calendar" type="solid"></eui-icon>
<eui-icon name="calendar" type="outline"></eui-icon>
<eui-icon name="calendar" type="mini"></eui-icon>
<eui-icon name="calendar" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">calendar-date-range</p>
<eui-icon name="calendar-date-range" type="solid"></eui-icon>
<eui-icon name="calendar-date-range" type="outline"></eui-icon>
<eui-icon name="calendar-date-range" type="mini"></eui-icon>
<eui-icon name="calendar-date-range" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">calendar-days</p>
<eui-icon name="calendar-days" type="solid"></eui-icon>
<eui-icon name="calendar-days" type="outline"></eui-icon>
<eui-icon name="calendar-days" type="mini"></eui-icon>
<eui-icon name="calendar-days" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">camera</p>
<eui-icon name="camera" type="solid"></eui-icon>
<eui-icon name="camera" type="outline"></eui-icon>
<eui-icon name="camera" type="mini"></eui-icon>
<eui-icon name="camera" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chart-bar</p>
<eui-icon name="chart-bar" type="solid"></eui-icon>
<eui-icon name="chart-bar" type="outline"></eui-icon>
<eui-icon name="chart-bar" type="mini"></eui-icon>
<eui-icon name="chart-bar" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chart-bar-square</p>
<eui-icon name="chart-bar-square" type="solid"></eui-icon>
<eui-icon name="chart-bar-square" type="outline"></eui-icon>
<eui-icon name="chart-bar-square" type="mini"></eui-icon>
<eui-icon name="chart-bar-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chart-pie</p>
<eui-icon name="chart-pie" type="solid"></eui-icon>
<eui-icon name="chart-pie" type="outline"></eui-icon>
<eui-icon name="chart-pie" type="mini"></eui-icon>
<eui-icon name="chart-pie" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-bottom-center</p>
<eui-icon name="chat-bubble-bottom-center" type="solid"></eui-icon>
<eui-icon name="chat-bubble-bottom-center" type="outline"></eui-icon>
<eui-icon name="chat-bubble-bottom-center" type="mini"></eui-icon>
<eui-icon name="chat-bubble-bottom-center" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-bottom-center-text</p>
<eui-icon name="chat-bubble-bottom-center-text" type="solid"></eui-icon>
<eui-icon name="chat-bubble-bottom-center-text" type="outline"></eui-icon>
<eui-icon name="chat-bubble-bottom-center-text" type="mini"></eui-icon>
<eui-icon name="chat-bubble-bottom-center-text" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-left</p>
<eui-icon name="chat-bubble-left" type="solid"></eui-icon>
<eui-icon name="chat-bubble-left" type="outline"></eui-icon>
<eui-icon name="chat-bubble-left" type="mini"></eui-icon>
<eui-icon name="chat-bubble-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-left-ellipsis</p>
<eui-icon name="chat-bubble-left-ellipsis" type="solid"></eui-icon>
<eui-icon name="chat-bubble-left-ellipsis" type="outline"></eui-icon>
<eui-icon name="chat-bubble-left-ellipsis" type="mini"></eui-icon>
<eui-icon name="chat-bubble-left-ellipsis" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-left-right</p>
<eui-icon name="chat-bubble-left-right" type="solid"></eui-icon>
<eui-icon name="chat-bubble-left-right" type="outline"></eui-icon>
<eui-icon name="chat-bubble-left-right" type="mini"></eui-icon>
<eui-icon name="chat-bubble-left-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-oval-left</p>
<eui-icon name="chat-bubble-oval-left" type="solid"></eui-icon>
<eui-icon name="chat-bubble-oval-left" type="outline"></eui-icon>
<eui-icon name="chat-bubble-oval-left" type="mini"></eui-icon>
<eui-icon name="chat-bubble-oval-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chat-bubble-oval-left-ellipsis</p>
<eui-icon name="chat-bubble-oval-left-ellipsis" type="solid"></eui-icon>
<eui-icon name="chat-bubble-oval-left-ellipsis" type="outline"></eui-icon>
<eui-icon name="chat-bubble-oval-left-ellipsis" type="mini"></eui-icon>
<eui-icon name="chat-bubble-oval-left-ellipsis" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">check</p>
<eui-icon name="check" type="solid"></eui-icon>
<eui-icon name="check" type="outline"></eui-icon>
<eui-icon name="check" type="mini"></eui-icon>
<eui-icon name="check" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">check-badge</p>
<eui-icon name="check-badge" type="solid"></eui-icon>
<eui-icon name="check-badge" type="outline"></eui-icon>
<eui-icon name="check-badge" type="mini"></eui-icon>
<eui-icon name="check-badge" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">check-circle</p>
<eui-icon name="check-circle" type="solid"></eui-icon>
<eui-icon name="check-circle" type="outline"></eui-icon>
<eui-icon name="check-circle" type="mini"></eui-icon>
<eui-icon name="check-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-double-down</p>
<eui-icon name="chevron-double-down" type="solid"></eui-icon>
<eui-icon name="chevron-double-down" type="outline"></eui-icon>
<eui-icon name="chevron-double-down" type="mini"></eui-icon>
<eui-icon name="chevron-double-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-double-left</p>
<eui-icon name="chevron-double-left" type="solid"></eui-icon>
<eui-icon name="chevron-double-left" type="outline"></eui-icon>
<eui-icon name="chevron-double-left" type="mini"></eui-icon>
<eui-icon name="chevron-double-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-double-right</p>
<eui-icon name="chevron-double-right" type="solid"></eui-icon>
<eui-icon name="chevron-double-right" type="outline"></eui-icon>
<eui-icon name="chevron-double-right" type="mini"></eui-icon>
<eui-icon name="chevron-double-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-double-up</p>
<eui-icon name="chevron-double-up" type="solid"></eui-icon>
<eui-icon name="chevron-double-up" type="outline"></eui-icon>
<eui-icon name="chevron-double-up" type="mini"></eui-icon>
<eui-icon name="chevron-double-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-down</p>
<eui-icon name="chevron-down" type="solid"></eui-icon>
<eui-icon name="chevron-down" type="outline"></eui-icon>
<eui-icon name="chevron-down" type="mini"></eui-icon>
<eui-icon name="chevron-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-left</p>
<eui-icon name="chevron-left" type="solid"></eui-icon>
<eui-icon name="chevron-left" type="outline"></eui-icon>
<eui-icon name="chevron-left" type="mini"></eui-icon>
<eui-icon name="chevron-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-right</p>
<eui-icon name="chevron-right" type="solid"></eui-icon>
<eui-icon name="chevron-right" type="outline"></eui-icon>
<eui-icon name="chevron-right" type="mini"></eui-icon>
<eui-icon name="chevron-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-up</p>
<eui-icon name="chevron-up" type="solid"></eui-icon>
<eui-icon name="chevron-up" type="outline"></eui-icon>
<eui-icon name="chevron-up" type="mini"></eui-icon>
<eui-icon name="chevron-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">chevron-up-down</p>
<eui-icon name="chevron-up-down" type="solid"></eui-icon>
<eui-icon name="chevron-up-down" type="outline"></eui-icon>
<eui-icon name="chevron-up-down" type="mini"></eui-icon>
<eui-icon name="chevron-up-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">circle-stack</p>
<eui-icon name="circle-stack" type="solid"></eui-icon>
<eui-icon name="circle-stack" type="outline"></eui-icon>
<eui-icon name="circle-stack" type="mini"></eui-icon>
<eui-icon name="circle-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">clipboard</p>
<eui-icon name="clipboard" type="solid"></eui-icon>
<eui-icon name="clipboard" type="outline"></eui-icon>
<eui-icon name="clipboard" type="mini"></eui-icon>
<eui-icon name="clipboard" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">clipboard-document</p>
<eui-icon name="clipboard-document" type="solid"></eui-icon>
<eui-icon name="clipboard-document" type="outline"></eui-icon>
<eui-icon name="clipboard-document" type="mini"></eui-icon>
<eui-icon name="clipboard-document" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">clipboard-document-check</p>
<eui-icon name="clipboard-document-check" type="solid"></eui-icon>
<eui-icon name="clipboard-document-check" type="outline"></eui-icon>
<eui-icon name="clipboard-document-check" type="mini"></eui-icon>
<eui-icon name="clipboard-document-check" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">clipboard-document-list</p>
<eui-icon name="clipboard-document-list" type="solid"></eui-icon>
<eui-icon name="clipboard-document-list" type="outline"></eui-icon>
<eui-icon name="clipboard-document-list" type="mini"></eui-icon>
<eui-icon name="clipboard-document-list" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">clock</p>
<eui-icon name="clock" type="solid"></eui-icon>
<eui-icon name="clock" type="outline"></eui-icon>
<eui-icon name="clock" type="mini"></eui-icon>
<eui-icon name="clock" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cloud</p>
<eui-icon name="cloud" type="solid"></eui-icon>
<eui-icon name="cloud" type="outline"></eui-icon>
<eui-icon name="cloud" type="mini"></eui-icon>
<eui-icon name="cloud" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cloud-arrow-down</p>
<eui-icon name="cloud-arrow-down" type="solid"></eui-icon>
<eui-icon name="cloud-arrow-down" type="outline"></eui-icon>
<eui-icon name="cloud-arrow-down" type="mini"></eui-icon>
<eui-icon name="cloud-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cloud-arrow-up</p>
<eui-icon name="cloud-arrow-up" type="solid"></eui-icon>
<eui-icon name="cloud-arrow-up" type="outline"></eui-icon>
<eui-icon name="cloud-arrow-up" type="mini"></eui-icon>
<eui-icon name="cloud-arrow-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">code-bracket</p>
<eui-icon name="code-bracket" type="solid"></eui-icon>
<eui-icon name="code-bracket" type="outline"></eui-icon>
<eui-icon name="code-bracket" type="mini"></eui-icon>
<eui-icon name="code-bracket" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">code-bracket-square</p>
<eui-icon name="code-bracket-square" type="solid"></eui-icon>
<eui-icon name="code-bracket-square" type="outline"></eui-icon>
<eui-icon name="code-bracket-square" type="mini"></eui-icon>
<eui-icon name="code-bracket-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cog</p>
<eui-icon name="cog" type="solid"></eui-icon>
<eui-icon name="cog" type="outline"></eui-icon>
<eui-icon name="cog" type="mini"></eui-icon>
<eui-icon name="cog" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cog-6-tooth</p>
<eui-icon name="cog-6-tooth" type="solid"></eui-icon>
<eui-icon name="cog-6-tooth" type="outline"></eui-icon>
<eui-icon name="cog-6-tooth" type="mini"></eui-icon>
<eui-icon name="cog-6-tooth" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cog-8-tooth</p>
<eui-icon name="cog-8-tooth" type="solid"></eui-icon>
<eui-icon name="cog-8-tooth" type="outline"></eui-icon>
<eui-icon name="cog-8-tooth" type="mini"></eui-icon>
<eui-icon name="cog-8-tooth" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">command-line</p>
<eui-icon name="command-line" type="solid"></eui-icon>
<eui-icon name="command-line" type="outline"></eui-icon>
<eui-icon name="command-line" type="mini"></eui-icon>
<eui-icon name="command-line" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">computer-desktop</p>
<eui-icon name="computer-desktop" type="solid"></eui-icon>
<eui-icon name="computer-desktop" type="outline"></eui-icon>
<eui-icon name="computer-desktop" type="mini"></eui-icon>
<eui-icon name="computer-desktop" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cpu-chip</p>
<eui-icon name="cpu-chip" type="solid"></eui-icon>
<eui-icon name="cpu-chip" type="outline"></eui-icon>
<eui-icon name="cpu-chip" type="mini"></eui-icon>
<eui-icon name="cpu-chip" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">credit-card</p>
<eui-icon name="credit-card" type="solid"></eui-icon>
<eui-icon name="credit-card" type="outline"></eui-icon>
<eui-icon name="credit-card" type="mini"></eui-icon>
<eui-icon name="credit-card" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cube</p>
<eui-icon name="cube" type="solid"></eui-icon>
<eui-icon name="cube" type="outline"></eui-icon>
<eui-icon name="cube" type="mini"></eui-icon>
<eui-icon name="cube" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cube-transparent</p>
<eui-icon name="cube-transparent" type="solid"></eui-icon>
<eui-icon name="cube-transparent" type="outline"></eui-icon>
<eui-icon name="cube-transparent" type="mini"></eui-icon>
<eui-icon name="cube-transparent" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-bangladeshi</p>
<eui-icon name="currency-bangladeshi" type="solid"></eui-icon>
<eui-icon name="currency-bangladeshi" type="outline"></eui-icon>
<eui-icon name="currency-bangladeshi" type="mini"></eui-icon>
<eui-icon name="currency-bangladeshi" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-dollar</p>
<eui-icon name="currency-dollar" type="solid"></eui-icon>
<eui-icon name="currency-dollar" type="outline"></eui-icon>
<eui-icon name="currency-dollar" type="mini"></eui-icon>
<eui-icon name="currency-dollar" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-euro</p>
<eui-icon name="currency-euro" type="solid"></eui-icon>
<eui-icon name="currency-euro" type="outline"></eui-icon>
<eui-icon name="currency-euro" type="mini"></eui-icon>
<eui-icon name="currency-euro" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-pound</p>
<eui-icon name="currency-pound" type="solid"></eui-icon>
<eui-icon name="currency-pound" type="outline"></eui-icon>
<eui-icon name="currency-pound" type="mini"></eui-icon>
<eui-icon name="currency-pound" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-rupee</p>
<eui-icon name="currency-rupee" type="solid"></eui-icon>
<eui-icon name="currency-rupee" type="outline"></eui-icon>
<eui-icon name="currency-rupee" type="mini"></eui-icon>
<eui-icon name="currency-rupee" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">currency-yen</p>
<eui-icon name="currency-yen" type="solid"></eui-icon>
<eui-icon name="currency-yen" type="outline"></eui-icon>
<eui-icon name="currency-yen" type="mini"></eui-icon>
<eui-icon name="currency-yen" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cursor-arrow-rays</p>
<eui-icon name="cursor-arrow-rays" type="solid"></eui-icon>
<eui-icon name="cursor-arrow-rays" type="outline"></eui-icon>
<eui-icon name="cursor-arrow-rays" type="mini"></eui-icon>
<eui-icon name="cursor-arrow-rays" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">cursor-arrow-ripple</p>
<eui-icon name="cursor-arrow-ripple" type="solid"></eui-icon>
<eui-icon name="cursor-arrow-ripple" type="outline"></eui-icon>
<eui-icon name="cursor-arrow-ripple" type="mini"></eui-icon>
<eui-icon name="cursor-arrow-ripple" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">device-phone-mobile</p>
<eui-icon name="device-phone-mobile" type="solid"></eui-icon>
<eui-icon name="device-phone-mobile" type="outline"></eui-icon>
<eui-icon name="device-phone-mobile" type="mini"></eui-icon>
<eui-icon name="device-phone-mobile" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">device-tablet</p>
<eui-icon name="device-tablet" type="solid"></eui-icon>
<eui-icon name="device-tablet" type="outline"></eui-icon>
<eui-icon name="device-tablet" type="mini"></eui-icon>
<eui-icon name="device-tablet" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document</p>
<eui-icon name="document" type="solid"></eui-icon>
<eui-icon name="document" type="outline"></eui-icon>
<eui-icon name="document" type="mini"></eui-icon>
<eui-icon name="document" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-arrow-down</p>
<eui-icon name="document-arrow-down" type="solid"></eui-icon>
<eui-icon name="document-arrow-down" type="outline"></eui-icon>
<eui-icon name="document-arrow-down" type="mini"></eui-icon>
<eui-icon name="document-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-arrow-up</p>
<eui-icon name="document-arrow-up" type="solid"></eui-icon>
<eui-icon name="document-arrow-up" type="outline"></eui-icon>
<eui-icon name="document-arrow-up" type="mini"></eui-icon>
<eui-icon name="document-arrow-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-chart-bar</p>
<eui-icon name="document-chart-bar" type="solid"></eui-icon>
<eui-icon name="document-chart-bar" type="outline"></eui-icon>
<eui-icon name="document-chart-bar" type="mini"></eui-icon>
<eui-icon name="document-chart-bar" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-check</p>
<eui-icon name="document-check" type="solid"></eui-icon>
<eui-icon name="document-check" type="outline"></eui-icon>
<eui-icon name="document-check" type="mini"></eui-icon>
<eui-icon name="document-check" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-duplicate</p>
<eui-icon name="document-duplicate" type="solid"></eui-icon>
<eui-icon name="document-duplicate" type="outline"></eui-icon>
<eui-icon name="document-duplicate" type="mini"></eui-icon>
<eui-icon name="document-duplicate" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-magnifying-glass</p>
<eui-icon name="document-magnifying-glass" type="solid"></eui-icon>
<eui-icon name="document-magnifying-glass" type="outline"></eui-icon>
<eui-icon name="document-magnifying-glass" type="mini"></eui-icon>
<eui-icon name="document-magnifying-glass" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-minus</p>
<eui-icon name="document-minus" type="solid"></eui-icon>
<eui-icon name="document-minus" type="outline"></eui-icon>
<eui-icon name="document-minus" type="mini"></eui-icon>
<eui-icon name="document-minus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-plus</p>
<eui-icon name="document-plus" type="solid"></eui-icon>
<eui-icon name="document-plus" type="outline"></eui-icon>
<eui-icon name="document-plus" type="mini"></eui-icon>
<eui-icon name="document-plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">document-text</p>
<eui-icon name="document-text" type="solid"></eui-icon>
<eui-icon name="document-text" type="outline"></eui-icon>
<eui-icon name="document-text" type="mini"></eui-icon>
<eui-icon name="document-text" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">ellipsis-horizontal</p>
<eui-icon name="ellipsis-horizontal" type="solid"></eui-icon>
<eui-icon name="ellipsis-horizontal" type="outline"></eui-icon>
<eui-icon name="ellipsis-horizontal" type="mini"></eui-icon>
<eui-icon name="ellipsis-horizontal" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">ellipsis-horizontal-circle</p>
<eui-icon name="ellipsis-horizontal-circle" type="solid"></eui-icon>
<eui-icon name="ellipsis-horizontal-circle" type="outline"></eui-icon>
<eui-icon name="ellipsis-horizontal-circle" type="mini"></eui-icon>
<eui-icon name="ellipsis-horizontal-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">ellipsis-vertical</p>
<eui-icon name="ellipsis-vertical" type="solid"></eui-icon>
<eui-icon name="ellipsis-vertical" type="outline"></eui-icon>
<eui-icon name="ellipsis-vertical" type="mini"></eui-icon>
<eui-icon name="ellipsis-vertical" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">envelope</p>
<eui-icon name="envelope" type="solid"></eui-icon>
<eui-icon name="envelope" type="outline"></eui-icon>
<eui-icon name="envelope" type="mini"></eui-icon>
<eui-icon name="envelope" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">envelope-open</p>
<eui-icon name="envelope-open" type="solid"></eui-icon>
<eui-icon name="envelope-open" type="outline"></eui-icon>
<eui-icon name="envelope-open" type="mini"></eui-icon>
<eui-icon name="envelope-open" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">exclamation-circle</p>
<eui-icon name="exclamation-circle" type="solid"></eui-icon>
<eui-icon name="exclamation-circle" type="outline"></eui-icon>
<eui-icon name="exclamation-circle" type="mini"></eui-icon>
<eui-icon name="exclamation-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">exclamation-triangle</p>
<eui-icon name="exclamation-triangle" type="solid"></eui-icon>
<eui-icon name="exclamation-triangle" type="outline"></eui-icon>
<eui-icon name="exclamation-triangle" type="mini"></eui-icon>
<eui-icon name="exclamation-triangle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">eye</p>
<eui-icon name="eye" type="solid"></eui-icon>
<eui-icon name="eye" type="outline"></eui-icon>
<eui-icon name="eye" type="mini"></eui-icon>
<eui-icon name="eye" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">eye-dropper</p>
<eui-icon name="eye-dropper" type="solid"></eui-icon>
<eui-icon name="eye-dropper" type="outline"></eui-icon>
<eui-icon name="eye-dropper" type="mini"></eui-icon>
<eui-icon name="eye-dropper" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">eye-slash</p>
<eui-icon name="eye-slash" type="solid"></eui-icon>
<eui-icon name="eye-slash" type="outline"></eui-icon>
<eui-icon name="eye-slash" type="mini"></eui-icon>
<eui-icon name="eye-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">face-frown</p>
<eui-icon name="face-frown" type="solid"></eui-icon>
<eui-icon name="face-frown" type="outline"></eui-icon>
<eui-icon name="face-frown" type="mini"></eui-icon>
<eui-icon name="face-frown" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">face-smile</p>
<eui-icon name="face-smile" type="solid"></eui-icon>
<eui-icon name="face-smile" type="outline"></eui-icon>
<eui-icon name="face-smile" type="mini"></eui-icon>
<eui-icon name="face-smile" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">film</p>
<eui-icon name="film" type="solid"></eui-icon>
<eui-icon name="film" type="outline"></eui-icon>
<eui-icon name="film" type="mini"></eui-icon>
<eui-icon name="film" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">finger-print</p>
<eui-icon name="finger-print" type="solid"></eui-icon>
<eui-icon name="finger-print" type="outline"></eui-icon>
<eui-icon name="finger-print" type="mini"></eui-icon>
<eui-icon name="finger-print" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">fire</p>
<eui-icon name="fire" type="solid"></eui-icon>
<eui-icon name="fire" type="outline"></eui-icon>
<eui-icon name="fire" type="mini"></eui-icon>
<eui-icon name="fire" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">flag</p>
<eui-icon name="flag" type="solid"></eui-icon>
<eui-icon name="flag" type="outline"></eui-icon>
<eui-icon name="flag" type="mini"></eui-icon>
<eui-icon name="flag" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">folder</p>
<eui-icon name="folder" type="solid"></eui-icon>
<eui-icon name="folder" type="outline"></eui-icon>
<eui-icon name="folder" type="mini"></eui-icon>
<eui-icon name="folder" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">folder-arrow-down</p>
<eui-icon name="folder-arrow-down" type="solid"></eui-icon>
<eui-icon name="folder-arrow-down" type="outline"></eui-icon>
<eui-icon name="folder-arrow-down" type="mini"></eui-icon>
<eui-icon name="folder-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">folder-minus</p>
<eui-icon name="folder-minus" type="solid"></eui-icon>
<eui-icon name="folder-minus" type="outline"></eui-icon>
<eui-icon name="folder-minus" type="mini"></eui-icon>
<eui-icon name="folder-minus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">folder-open</p>
<eui-icon name="folder-open" type="solid"></eui-icon>
<eui-icon name="folder-open" type="outline"></eui-icon>
<eui-icon name="folder-open" type="mini"></eui-icon>
<eui-icon name="folder-open" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">folder-plus</p>
<eui-icon name="folder-plus" type="solid"></eui-icon>
<eui-icon name="folder-plus" type="outline"></eui-icon>
<eui-icon name="folder-plus" type="mini"></eui-icon>
<eui-icon name="folder-plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">forward</p>
<eui-icon name="forward" type="solid"></eui-icon>
<eui-icon name="forward" type="outline"></eui-icon>
<eui-icon name="forward" type="mini"></eui-icon>
<eui-icon name="forward" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">funnel</p>
<eui-icon name="funnel" type="solid"></eui-icon>
<eui-icon name="funnel" type="outline"></eui-icon>
<eui-icon name="funnel" type="mini"></eui-icon>
<eui-icon name="funnel" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">gif</p>
<eui-icon name="gif" type="solid"></eui-icon>
<eui-icon name="gif" type="outline"></eui-icon>
<eui-icon name="gif" type="mini"></eui-icon>
<eui-icon name="gif" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">gift</p>
<eui-icon name="gift" type="solid"></eui-icon>
<eui-icon name="gift" type="outline"></eui-icon>
<eui-icon name="gift" type="mini"></eui-icon>
<eui-icon name="gift" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">gift-top</p>
<eui-icon name="gift-top" type="solid"></eui-icon>
<eui-icon name="gift-top" type="outline"></eui-icon>
<eui-icon name="gift-top" type="mini"></eui-icon>
<eui-icon name="gift-top" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">globe-alt</p>
<eui-icon name="globe-alt" type="solid"></eui-icon>
<eui-icon name="globe-alt" type="outline"></eui-icon>
<eui-icon name="globe-alt" type="mini"></eui-icon>
<eui-icon name="globe-alt" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">globe-americas</p>
<eui-icon name="globe-americas" type="solid"></eui-icon>
<eui-icon name="globe-americas" type="outline"></eui-icon>
<eui-icon name="globe-americas" type="mini"></eui-icon>
<eui-icon name="globe-americas" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">globe-asia-australia</p>
<eui-icon name="globe-asia-australia" type="solid"></eui-icon>
<eui-icon name="globe-asia-australia" type="outline"></eui-icon>
<eui-icon name="globe-asia-australia" type="mini"></eui-icon>
<eui-icon name="globe-asia-australia" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">globe-europe-africa</p>
<eui-icon name="globe-europe-africa" type="solid"></eui-icon>
<eui-icon name="globe-europe-africa" type="outline"></eui-icon>
<eui-icon name="globe-europe-africa" type="mini"></eui-icon>
<eui-icon name="globe-europe-africa" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">h1</p>
<eui-icon name="h1" type="solid"></eui-icon>
<eui-icon name="h1" type="outline"></eui-icon>
<eui-icon name="h1" type="mini"></eui-icon>
<eui-icon name="h1" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">h2</p>
<eui-icon name="h2" type="solid"></eui-icon>
<eui-icon name="h2" type="outline"></eui-icon>
<eui-icon name="h2" type="mini"></eui-icon>
<eui-icon name="h2" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">h3</p>
<eui-icon name="h3" type="solid"></eui-icon>
<eui-icon name="h3" type="outline"></eui-icon>
<eui-icon name="h3" type="mini"></eui-icon>
<eui-icon name="h3" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">hand-raised</p>
<eui-icon name="hand-raised" type="solid"></eui-icon>
<eui-icon name="hand-raised" type="outline"></eui-icon>
<eui-icon name="hand-raised" type="mini"></eui-icon>
<eui-icon name="hand-raised" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">hand-thumb-down</p>
<eui-icon name="hand-thumb-down" type="solid"></eui-icon>
<eui-icon name="hand-thumb-down" type="outline"></eui-icon>
<eui-icon name="hand-thumb-down" type="mini"></eui-icon>
<eui-icon name="hand-thumb-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">hand-thumb-up</p>
<eui-icon name="hand-thumb-up" type="solid"></eui-icon>
<eui-icon name="hand-thumb-up" type="outline"></eui-icon>
<eui-icon name="hand-thumb-up" type="mini"></eui-icon>
<eui-icon name="hand-thumb-up" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">hashtag</p>
<eui-icon name="hashtag" type="solid"></eui-icon>
<eui-icon name="hashtag" type="outline"></eui-icon>
<eui-icon name="hashtag" type="mini"></eui-icon>
<eui-icon name="hashtag" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">heart</p>
<eui-icon name="heart" type="solid"></eui-icon>
<eui-icon name="heart" type="outline"></eui-icon>
<eui-icon name="heart" type="mini"></eui-icon>
<eui-icon name="heart" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">home</p>
<eui-icon name="home" type="solid"></eui-icon>
<eui-icon name="home" type="outline"></eui-icon>
<eui-icon name="home" type="mini"></eui-icon>
<eui-icon name="home" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">home-modern</p>
<eui-icon name="home-modern" type="solid"></eui-icon>
<eui-icon name="home-modern" type="outline"></eui-icon>
<eui-icon name="home-modern" type="mini"></eui-icon>
<eui-icon name="home-modern" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">identification</p>
<eui-icon name="identification" type="solid"></eui-icon>
<eui-icon name="identification" type="outline"></eui-icon>
<eui-icon name="identification" type="mini"></eui-icon>
<eui-icon name="identification" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">inbox</p>
<eui-icon name="inbox" type="solid"></eui-icon>
<eui-icon name="inbox" type="outline"></eui-icon>
<eui-icon name="inbox" type="mini"></eui-icon>
<eui-icon name="inbox" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">inbox-arrow-down</p>
<eui-icon name="inbox-arrow-down" type="solid"></eui-icon>
<eui-icon name="inbox-arrow-down" type="outline"></eui-icon>
<eui-icon name="inbox-arrow-down" type="mini"></eui-icon>
<eui-icon name="inbox-arrow-down" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">inbox-stack</p>
<eui-icon name="inbox-stack" type="solid"></eui-icon>
<eui-icon name="inbox-stack" type="outline"></eui-icon>
<eui-icon name="inbox-stack" type="mini"></eui-icon>
<eui-icon name="inbox-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">information-circle</p>
<eui-icon name="information-circle" type="solid"></eui-icon>
<eui-icon name="information-circle" type="outline"></eui-icon>
<eui-icon name="information-circle" type="mini"></eui-icon>
<eui-icon name="information-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">italic</p>
<eui-icon name="italic" type="solid"></eui-icon>
<eui-icon name="italic" type="outline"></eui-icon>
<eui-icon name="italic" type="mini"></eui-icon>
<eui-icon name="italic" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">key</p>
<eui-icon name="key" type="solid"></eui-icon>
<eui-icon name="key" type="outline"></eui-icon>
<eui-icon name="key" type="mini"></eui-icon>
<eui-icon name="key" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">language</p>
<eui-icon name="language" type="solid"></eui-icon>
<eui-icon name="language" type="outline"></eui-icon>
<eui-icon name="language" type="mini"></eui-icon>
<eui-icon name="language" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">lifebuoy</p>
<eui-icon name="lifebuoy" type="solid"></eui-icon>
<eui-icon name="lifebuoy" type="outline"></eui-icon>
<eui-icon name="lifebuoy" type="mini"></eui-icon>
<eui-icon name="lifebuoy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">light-bulb</p>
<eui-icon name="light-bulb" type="solid"></eui-icon>
<eui-icon name="light-bulb" type="outline"></eui-icon>
<eui-icon name="light-bulb" type="mini"></eui-icon>
<eui-icon name="light-bulb" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">link</p>
<eui-icon name="link" type="solid"></eui-icon>
<eui-icon name="link" type="outline"></eui-icon>
<eui-icon name="link" type="mini"></eui-icon>
<eui-icon name="link" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">link-slash</p>
<eui-icon name="link-slash" type="solid"></eui-icon>
<eui-icon name="link-slash" type="outline"></eui-icon>
<eui-icon name="link-slash" type="mini"></eui-icon>
<eui-icon name="link-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">list-bullet</p>
<eui-icon name="list-bullet" type="solid"></eui-icon>
<eui-icon name="list-bullet" type="outline"></eui-icon>
<eui-icon name="list-bullet" type="mini"></eui-icon>
<eui-icon name="list-bullet" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">lock-closed</p>
<eui-icon name="lock-closed" type="solid"></eui-icon>
<eui-icon name="lock-closed" type="outline"></eui-icon>
<eui-icon name="lock-closed" type="mini"></eui-icon>
<eui-icon name="lock-closed" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">lock-open</p>
<eui-icon name="lock-open" type="solid"></eui-icon>
<eui-icon name="lock-open" type="outline"></eui-icon>
<eui-icon name="lock-open" type="mini"></eui-icon>
<eui-icon name="lock-open" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">magnifying-glass</p>
<eui-icon name="magnifying-glass" type="solid"></eui-icon>
<eui-icon name="magnifying-glass" type="outline"></eui-icon>
<eui-icon name="magnifying-glass" type="mini"></eui-icon>
<eui-icon name="magnifying-glass" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">magnifying-glass-circle</p>
<eui-icon name="magnifying-glass-circle" type="solid"></eui-icon>
<eui-icon name="magnifying-glass-circle" type="outline"></eui-icon>
<eui-icon name="magnifying-glass-circle" type="mini"></eui-icon>
<eui-icon name="magnifying-glass-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">magnifying-glass-minus</p>
<eui-icon name="magnifying-glass-minus" type="solid"></eui-icon>
<eui-icon name="magnifying-glass-minus" type="outline"></eui-icon>
<eui-icon name="magnifying-glass-minus" type="mini"></eui-icon>
<eui-icon name="magnifying-glass-minus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">magnifying-glass-plus</p>
<eui-icon name="magnifying-glass-plus" type="solid"></eui-icon>
<eui-icon name="magnifying-glass-plus" type="outline"></eui-icon>
<eui-icon name="magnifying-glass-plus" type="mini"></eui-icon>
<eui-icon name="magnifying-glass-plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">map</p>
<eui-icon name="map" type="solid"></eui-icon>
<eui-icon name="map" type="outline"></eui-icon>
<eui-icon name="map" type="mini"></eui-icon>
<eui-icon name="map" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">map-pin</p>
<eui-icon name="map-pin" type="solid"></eui-icon>
<eui-icon name="map-pin" type="outline"></eui-icon>
<eui-icon name="map-pin" type="mini"></eui-icon>
<eui-icon name="map-pin" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">megaphone</p>
<eui-icon name="megaphone" type="solid"></eui-icon>
<eui-icon name="megaphone" type="outline"></eui-icon>
<eui-icon name="megaphone" type="mini"></eui-icon>
<eui-icon name="megaphone" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">merge</p>
<eui-icon name="merge" type="solid"></eui-icon>
<eui-icon name="merge" type="outline"></eui-icon>
<eui-icon name="merge" type="mini"></eui-icon>
<eui-icon name="merge" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">microphone</p>
<eui-icon name="microphone" type="solid"></eui-icon>
<eui-icon name="microphone" type="outline"></eui-icon>
<eui-icon name="microphone" type="mini"></eui-icon>
<eui-icon name="microphone" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">minus</p>
<eui-icon name="minus" type="solid"></eui-icon>
<eui-icon name="minus" type="outline"></eui-icon>
<eui-icon name="minus" type="mini"></eui-icon>
<eui-icon name="minus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">minus-circle</p>
<eui-icon name="minus-circle" type="solid"></eui-icon>
<eui-icon name="minus-circle" type="outline"></eui-icon>
<eui-icon name="minus-circle" type="mini"></eui-icon>
<eui-icon name="minus-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">moon</p>
<eui-icon name="moon" type="solid"></eui-icon>
<eui-icon name="moon" type="outline"></eui-icon>
<eui-icon name="moon" type="mini"></eui-icon>
<eui-icon name="moon" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">musical-note</p>
<eui-icon name="musical-note" type="solid"></eui-icon>
<eui-icon name="musical-note" type="outline"></eui-icon>
<eui-icon name="musical-note" type="mini"></eui-icon>
<eui-icon name="musical-note" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">newspaper</p>
<eui-icon name="newspaper" type="solid"></eui-icon>
<eui-icon name="newspaper" type="outline"></eui-icon>
<eui-icon name="newspaper" type="mini"></eui-icon>
<eui-icon name="newspaper" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">no-symbol</p>
<eui-icon name="no-symbol" type="solid"></eui-icon>
<eui-icon name="no-symbol" type="outline"></eui-icon>
<eui-icon name="no-symbol" type="mini"></eui-icon>
<eui-icon name="no-symbol" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">numbered-list</p>
<eui-icon name="numbered-list" type="solid"></eui-icon>
<eui-icon name="numbered-list" type="outline"></eui-icon>
<eui-icon name="numbered-list" type="mini"></eui-icon>
<eui-icon name="numbered-list" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">paint-brush</p>
<eui-icon name="paint-brush" type="solid"></eui-icon>
<eui-icon name="paint-brush" type="outline"></eui-icon>
<eui-icon name="paint-brush" type="mini"></eui-icon>
<eui-icon name="paint-brush" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">paper-airplane</p>
<eui-icon name="paper-airplane" type="solid"></eui-icon>
<eui-icon name="paper-airplane" type="outline"></eui-icon>
<eui-icon name="paper-airplane" type="mini"></eui-icon>
<eui-icon name="paper-airplane" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">paper-clip</p>
<eui-icon name="paper-clip" type="solid"></eui-icon>
<eui-icon name="paper-clip" type="outline"></eui-icon>
<eui-icon name="paper-clip" type="mini"></eui-icon>
<eui-icon name="paper-clip" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">pause</p>
<eui-icon name="pause" type="solid"></eui-icon>
<eui-icon name="pause" type="outline"></eui-icon>
<eui-icon name="pause" type="mini"></eui-icon>
<eui-icon name="pause" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">pause-circle</p>
<eui-icon name="pause-circle" type="solid"></eui-icon>
<eui-icon name="pause-circle" type="outline"></eui-icon>
<eui-icon name="pause-circle" type="mini"></eui-icon>
<eui-icon name="pause-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">pencil</p>
<eui-icon name="pencil" type="solid"></eui-icon>
<eui-icon name="pencil" type="outline"></eui-icon>
<eui-icon name="pencil" type="mini"></eui-icon>
<eui-icon name="pencil" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">pencil-square</p>
<eui-icon name="pencil-square" type="solid"></eui-icon>
<eui-icon name="pencil-square" type="outline"></eui-icon>
<eui-icon name="pencil-square" type="mini"></eui-icon>
<eui-icon name="pencil-square" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">percent-badge</p>
<eui-icon name="percent-badge" type="solid"></eui-icon>
<eui-icon name="percent-badge" type="outline"></eui-icon>
<eui-icon name="percent-badge" type="mini"></eui-icon>
<eui-icon name="percent-badge" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">phone</p>
<eui-icon name="phone" type="solid"></eui-icon>
<eui-icon name="phone" type="outline"></eui-icon>
<eui-icon name="phone" type="mini"></eui-icon>
<eui-icon name="phone" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">phone-arrow-down-left</p>
<eui-icon name="phone-arrow-down-left" type="solid"></eui-icon>
<eui-icon name="phone-arrow-down-left" type="outline"></eui-icon>
<eui-icon name="phone-arrow-down-left" type="mini"></eui-icon>
<eui-icon name="phone-arrow-down-left" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">phone-arrow-up-right</p>
<eui-icon name="phone-arrow-up-right" type="solid"></eui-icon>
<eui-icon name="phone-arrow-up-right" type="outline"></eui-icon>
<eui-icon name="phone-arrow-up-right" type="mini"></eui-icon>
<eui-icon name="phone-arrow-up-right" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">phone-x-mark</p>
<eui-icon name="phone-x-mark" type="solid"></eui-icon>
<eui-icon name="phone-x-mark" type="outline"></eui-icon>
<eui-icon name="phone-x-mark" type="mini"></eui-icon>
<eui-icon name="phone-x-mark" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">photo</p>
<eui-icon name="photo" type="solid"></eui-icon>
<eui-icon name="photo" type="outline"></eui-icon>
<eui-icon name="photo" type="mini"></eui-icon>
<eui-icon name="photo" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">play</p>
<eui-icon name="play" type="solid"></eui-icon>
<eui-icon name="play" type="outline"></eui-icon>
<eui-icon name="play" type="mini"></eui-icon>
<eui-icon name="play" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">play-circle</p>
<eui-icon name="play-circle" type="solid"></eui-icon>
<eui-icon name="play-circle" type="outline"></eui-icon>
<eui-icon name="play-circle" type="mini"></eui-icon>
<eui-icon name="play-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">play-pause</p>
<eui-icon name="play-pause" type="solid"></eui-icon>
<eui-icon name="play-pause" type="outline"></eui-icon>
<eui-icon name="play-pause" type="mini"></eui-icon>
<eui-icon name="play-pause" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">plus</p>
<eui-icon name="plus" type="solid"></eui-icon>
<eui-icon name="plus" type="outline"></eui-icon>
<eui-icon name="plus" type="mini"></eui-icon>
<eui-icon name="plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">plus-circle</p>
<eui-icon name="plus-circle" type="solid"></eui-icon>
<eui-icon name="plus-circle" type="outline"></eui-icon>
<eui-icon name="plus-circle" type="mini"></eui-icon>
<eui-icon name="plus-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">power</p>
<eui-icon name="power" type="solid"></eui-icon>
<eui-icon name="power" type="outline"></eui-icon>
<eui-icon name="power" type="mini"></eui-icon>
<eui-icon name="power" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">presentation-chart-bar</p>
<eui-icon name="presentation-chart-bar" type="solid"></eui-icon>
<eui-icon name="presentation-chart-bar" type="outline"></eui-icon>
<eui-icon name="presentation-chart-bar" type="mini"></eui-icon>
<eui-icon name="presentation-chart-bar" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">presentation-chart-line</p>
<eui-icon name="presentation-chart-line" type="solid"></eui-icon>
<eui-icon name="presentation-chart-line" type="outline"></eui-icon>
<eui-icon name="presentation-chart-line" type="mini"></eui-icon>
<eui-icon name="presentation-chart-line" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">printer</p>
<eui-icon name="printer" type="solid"></eui-icon>
<eui-icon name="printer" type="outline"></eui-icon>
<eui-icon name="printer" type="mini"></eui-icon>
<eui-icon name="printer" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">puzzle-piece</p>
<eui-icon name="puzzle-piece" type="solid"></eui-icon>
<eui-icon name="puzzle-piece" type="outline"></eui-icon>
<eui-icon name="puzzle-piece" type="mini"></eui-icon>
<eui-icon name="puzzle-piece" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">qr-code</p>
<eui-icon name="qr-code" type="solid"></eui-icon>
<eui-icon name="qr-code" type="outline"></eui-icon>
<eui-icon name="qr-code" type="mini"></eui-icon>
<eui-icon name="qr-code" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">question-mark-circle</p>
<eui-icon name="question-mark-circle" type="solid"></eui-icon>
<eui-icon name="question-mark-circle" type="outline"></eui-icon>
<eui-icon name="question-mark-circle" type="mini"></eui-icon>
<eui-icon name="question-mark-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">queue-list</p>
<eui-icon name="queue-list" type="solid"></eui-icon>
<eui-icon name="queue-list" type="outline"></eui-icon>
<eui-icon name="queue-list" type="mini"></eui-icon>
<eui-icon name="queue-list" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">radio</p>
<eui-icon name="radio" type="solid"></eui-icon>
<eui-icon name="radio" type="outline"></eui-icon>
<eui-icon name="radio" type="mini"></eui-icon>
<eui-icon name="radio" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">receipt-percent</p>
<eui-icon name="receipt-percent" type="solid"></eui-icon>
<eui-icon name="receipt-percent" type="outline"></eui-icon>
<eui-icon name="receipt-percent" type="mini"></eui-icon>
<eui-icon name="receipt-percent" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">receipt-refund</p>
<eui-icon name="receipt-refund" type="solid"></eui-icon>
<eui-icon name="receipt-refund" type="outline"></eui-icon>
<eui-icon name="receipt-refund" type="mini"></eui-icon>
<eui-icon name="receipt-refund" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">rectangle-group</p>
<eui-icon name="rectangle-group" type="solid"></eui-icon>
<eui-icon name="rectangle-group" type="outline"></eui-icon>
<eui-icon name="rectangle-group" type="mini"></eui-icon>
<eui-icon name="rectangle-group" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">rectangle-stack</p>
<eui-icon name="rectangle-stack" type="solid"></eui-icon>
<eui-icon name="rectangle-stack" type="outline"></eui-icon>
<eui-icon name="rectangle-stack" type="mini"></eui-icon>
<eui-icon name="rectangle-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">rocket-launch</p>
<eui-icon name="rocket-launch" type="solid"></eui-icon>
<eui-icon name="rocket-launch" type="outline"></eui-icon>
<eui-icon name="rocket-launch" type="mini"></eui-icon>
<eui-icon name="rocket-launch" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">rss</p>
<eui-icon name="rss" type="solid"></eui-icon>
<eui-icon name="rss" type="outline"></eui-icon>
<eui-icon name="rss" type="mini"></eui-icon>
<eui-icon name="rss" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">scale</p>
<eui-icon name="scale" type="solid"></eui-icon>
<eui-icon name="scale" type="outline"></eui-icon>
<eui-icon name="scale" type="mini"></eui-icon>
<eui-icon name="scale" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">scissors</p>
<eui-icon name="scissors" type="solid"></eui-icon>
<eui-icon name="scissors" type="outline"></eui-icon>
<eui-icon name="scissors" type="mini"></eui-icon>
<eui-icon name="scissors" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">server</p>
<eui-icon name="server" type="solid"></eui-icon>
<eui-icon name="server" type="outline"></eui-icon>
<eui-icon name="server" type="mini"></eui-icon>
<eui-icon name="server" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">server-stack</p>
<eui-icon name="server-stack" type="solid"></eui-icon>
<eui-icon name="server-stack" type="outline"></eui-icon>
<eui-icon name="server-stack" type="mini"></eui-icon>
<eui-icon name="server-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">share</p>
<eui-icon name="share" type="solid"></eui-icon>
<eui-icon name="share" type="outline"></eui-icon>
<eui-icon name="share" type="mini"></eui-icon>
<eui-icon name="share" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">shield-check</p>
<eui-icon name="shield-check" type="solid"></eui-icon>
<eui-icon name="shield-check" type="outline"></eui-icon>
<eui-icon name="shield-check" type="mini"></eui-icon>
<eui-icon name="shield-check" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">shield-exclamation</p>
<eui-icon name="shield-exclamation" type="solid"></eui-icon>
<eui-icon name="shield-exclamation" type="outline"></eui-icon>
<eui-icon name="shield-exclamation" type="mini"></eui-icon>
<eui-icon name="shield-exclamation" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">shopping-bag</p>
<eui-icon name="shopping-bag" type="solid"></eui-icon>
<eui-icon name="shopping-bag" type="outline"></eui-icon>
<eui-icon name="shopping-bag" type="mini"></eui-icon>
<eui-icon name="shopping-bag" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">shopping-cart</p>
<eui-icon name="shopping-cart" type="solid"></eui-icon>
<eui-icon name="shopping-cart" type="outline"></eui-icon>
<eui-icon name="shopping-cart" type="mini"></eui-icon>
<eui-icon name="shopping-cart" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">signal</p>
<eui-icon name="signal" type="solid"></eui-icon>
<eui-icon name="signal" type="outline"></eui-icon>
<eui-icon name="signal" type="mini"></eui-icon>
<eui-icon name="signal" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">signal-slash</p>
<eui-icon name="signal-slash" type="solid"></eui-icon>
<eui-icon name="signal-slash" type="outline"></eui-icon>
<eui-icon name="signal-slash" type="mini"></eui-icon>
<eui-icon name="signal-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">slash</p>
<eui-icon name="slash" type="solid"></eui-icon>
<eui-icon name="slash" type="outline"></eui-icon>
<eui-icon name="slash" type="mini"></eui-icon>
<eui-icon name="slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">sparkles</p>
<eui-icon name="sparkles" type="solid"></eui-icon>
<eui-icon name="sparkles" type="outline"></eui-icon>
<eui-icon name="sparkles" type="mini"></eui-icon>
<eui-icon name="sparkles" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">speaker-wave</p>
<eui-icon name="speaker-wave" type="solid"></eui-icon>
<eui-icon name="speaker-wave" type="outline"></eui-icon>
<eui-icon name="speaker-wave" type="mini"></eui-icon>
<eui-icon name="speaker-wave" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">speaker-x-mark</p>
<eui-icon name="speaker-x-mark" type="solid"></eui-icon>
<eui-icon name="speaker-x-mark" type="outline"></eui-icon>
<eui-icon name="speaker-x-mark" type="mini"></eui-icon>
<eui-icon name="speaker-x-mark" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">square-2-stack</p>
<eui-icon name="square-2-stack" type="solid"></eui-icon>
<eui-icon name="square-2-stack" type="outline"></eui-icon>
<eui-icon name="square-2-stack" type="mini"></eui-icon>
<eui-icon name="square-2-stack" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">square-2-stack-outline</p>
<eui-icon name="square-2-stack-outline" type="solid"></eui-icon>
<eui-icon name="square-2-stack-outline" type="outline"></eui-icon>
<eui-icon name="square-2-stack-outline" type="mini"></eui-icon>
<eui-icon name="square-2-stack-outline" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">square-3-stack-3d</p>
<eui-icon name="square-3-stack-3d" type="solid"></eui-icon>
<eui-icon name="square-3-stack-3d" type="outline"></eui-icon>
<eui-icon name="square-3-stack-3d" type="mini"></eui-icon>
<eui-icon name="square-3-stack-3d" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">squares-2x2</p>
<eui-icon name="squares-2x2" type="solid"></eui-icon>
<eui-icon name="squares-2x2" type="outline"></eui-icon>
<eui-icon name="squares-2x2" type="mini"></eui-icon>
<eui-icon name="squares-2x2" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">squares-plus</p>
<eui-icon name="squares-plus" type="solid"></eui-icon>
<eui-icon name="squares-plus" type="outline"></eui-icon>
<eui-icon name="squares-plus" type="mini"></eui-icon>
<eui-icon name="squares-plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">star</p>
<eui-icon name="star" type="solid"></eui-icon>
<eui-icon name="star" type="outline"></eui-icon>
<eui-icon name="star" type="mini"></eui-icon>
<eui-icon name="star" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">stop</p>
<eui-icon name="stop" type="solid"></eui-icon>
<eui-icon name="stop" type="outline"></eui-icon>
<eui-icon name="stop" type="mini"></eui-icon>
<eui-icon name="stop" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">stop-circle</p>
<eui-icon name="stop-circle" type="solid"></eui-icon>
<eui-icon name="stop-circle" type="outline"></eui-icon>
<eui-icon name="stop-circle" type="mini"></eui-icon>
<eui-icon name="stop-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">sun</p>
<eui-icon name="sun" type="solid"></eui-icon>
<eui-icon name="sun" type="outline"></eui-icon>
<eui-icon name="sun" type="mini"></eui-icon>
<eui-icon name="sun" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">swatch</p>
<eui-icon name="swatch" type="solid"></eui-icon>
<eui-icon name="swatch" type="outline"></eui-icon>
<eui-icon name="swatch" type="mini"></eui-icon>
<eui-icon name="swatch" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">table-cells</p>
<eui-icon name="table-cells" type="solid"></eui-icon>
<eui-icon name="table-cells" type="outline"></eui-icon>
<eui-icon name="table-cells" type="mini"></eui-icon>
<eui-icon name="table-cells" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">tag</p>
<eui-icon name="tag" type="solid"></eui-icon>
<eui-icon name="tag" type="outline"></eui-icon>
<eui-icon name="tag" type="mini"></eui-icon>
<eui-icon name="tag" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">third-spinner</p>
<eui-icon name="third-spinner" type="solid"></eui-icon>
<eui-icon name="third-spinner" type="outline"></eui-icon>
<eui-icon name="third-spinner" type="mini"></eui-icon>
<eui-icon name="third-spinner" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">ticket</p>
<eui-icon name="ticket" type="solid"></eui-icon>
<eui-icon name="ticket" type="outline"></eui-icon>
<eui-icon name="ticket" type="mini"></eui-icon>
<eui-icon name="ticket" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">trash</p>
<eui-icon name="trash" type="solid"></eui-icon>
<eui-icon name="trash" type="outline"></eui-icon>
<eui-icon name="trash" type="mini"></eui-icon>
<eui-icon name="trash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">trophy</p>
<eui-icon name="trophy" type="solid"></eui-icon>
<eui-icon name="trophy" type="outline"></eui-icon>
<eui-icon name="trophy" type="mini"></eui-icon>
<eui-icon name="trophy" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">truck</p>
<eui-icon name="truck" type="solid"></eui-icon>
<eui-icon name="truck" type="outline"></eui-icon>
<eui-icon name="truck" type="mini"></eui-icon>
<eui-icon name="truck" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">tv</p>
<eui-icon name="tv" type="solid"></eui-icon>
<eui-icon name="tv" type="outline"></eui-icon>
<eui-icon name="tv" type="mini"></eui-icon>
<eui-icon name="tv" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">underline</p>
<eui-icon name="underline" type="solid"></eui-icon>
<eui-icon name="underline" type="outline"></eui-icon>
<eui-icon name="underline" type="mini"></eui-icon>
<eui-icon name="underline" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">user</p>
<eui-icon name="user" type="solid"></eui-icon>
<eui-icon name="user" type="outline"></eui-icon>
<eui-icon name="user" type="mini"></eui-icon>
<eui-icon name="user" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">user-circle</p>
<eui-icon name="user-circle" type="solid"></eui-icon>
<eui-icon name="user-circle" type="outline"></eui-icon>
<eui-icon name="user-circle" type="mini"></eui-icon>
<eui-icon name="user-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">user-group</p>
<eui-icon name="user-group" type="solid"></eui-icon>
<eui-icon name="user-group" type="outline"></eui-icon>
<eui-icon name="user-group" type="mini"></eui-icon>
<eui-icon name="user-group" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">user-minus</p>
<eui-icon name="user-minus" type="solid"></eui-icon>
<eui-icon name="user-minus" type="outline"></eui-icon>
<eui-icon name="user-minus" type="mini"></eui-icon>
<eui-icon name="user-minus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">user-plus</p>
<eui-icon name="user-plus" type="solid"></eui-icon>
<eui-icon name="user-plus" type="outline"></eui-icon>
<eui-icon name="user-plus" type="mini"></eui-icon>
<eui-icon name="user-plus" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">users</p>
<eui-icon name="users" type="solid"></eui-icon>
<eui-icon name="users" type="outline"></eui-icon>
<eui-icon name="users" type="mini"></eui-icon>
<eui-icon name="users" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">variable</p>
<eui-icon name="variable" type="solid"></eui-icon>
<eui-icon name="variable" type="outline"></eui-icon>
<eui-icon name="variable" type="mini"></eui-icon>
<eui-icon name="variable" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">video-camera</p>
<eui-icon name="video-camera" type="solid"></eui-icon>
<eui-icon name="video-camera" type="outline"></eui-icon>
<eui-icon name="video-camera" type="mini"></eui-icon>
<eui-icon name="video-camera" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">video-camera-slash</p>
<eui-icon name="video-camera-slash" type="solid"></eui-icon>
<eui-icon name="video-camera-slash" type="outline"></eui-icon>
<eui-icon name="video-camera-slash" type="mini"></eui-icon>
<eui-icon name="video-camera-slash" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">view-columns</p>
<eui-icon name="view-columns" type="solid"></eui-icon>
<eui-icon name="view-columns" type="outline"></eui-icon>
<eui-icon name="view-columns" type="mini"></eui-icon>
<eui-icon name="view-columns" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">viewfinder-circle</p>
<eui-icon name="viewfinder-circle" type="solid"></eui-icon>
<eui-icon name="viewfinder-circle" type="outline"></eui-icon>
<eui-icon name="viewfinder-circle" type="mini"></eui-icon>
<eui-icon name="viewfinder-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">wallet</p>
<eui-icon name="wallet" type="solid"></eui-icon>
<eui-icon name="wallet" type="outline"></eui-icon>
<eui-icon name="wallet" type="mini"></eui-icon>
<eui-icon name="wallet" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">wifi</p>
<eui-icon name="wifi" type="solid"></eui-icon>
<eui-icon name="wifi" type="outline"></eui-icon>
<eui-icon name="wifi" type="mini"></eui-icon>
<eui-icon name="wifi" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">window</p>
<eui-icon name="window" type="solid"></eui-icon>
<eui-icon name="window" type="outline"></eui-icon>
<eui-icon name="window" type="mini"></eui-icon>
<eui-icon name="window" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">wrench</p>
<eui-icon name="wrench" type="solid"></eui-icon>
<eui-icon name="wrench" type="outline"></eui-icon>
<eui-icon name="wrench" type="mini"></eui-icon>
<eui-icon name="wrench" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">wrench-screwdriver</p>
<eui-icon name="wrench-screwdriver" type="solid"></eui-icon>
<eui-icon name="wrench-screwdriver" type="outline"></eui-icon>
<eui-icon name="wrench-screwdriver" type="mini"></eui-icon>
<eui-icon name="wrench-screwdriver" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">x-circle</p>
<eui-icon name="x-circle" type="solid"></eui-icon>
<eui-icon name="x-circle" type="outline"></eui-icon>
<eui-icon name="x-circle" type="mini"></eui-icon>
<eui-icon name="x-circle" type="micro"></eui-icon>
</span>
<span class="icon-row flex">
<p class="icon-name">x-mark</p>
<eui-icon name="x-mark" type="solid"></eui-icon>
<eui-icon name="x-mark" type="outline"></eui-icon>
<eui-icon name="x-mark" type="mini"></eui-icon>
<eui-icon name="x-mark" type="micro"></eui-icon>
</span>



    </div>
    `
})
export class IconComponent { }