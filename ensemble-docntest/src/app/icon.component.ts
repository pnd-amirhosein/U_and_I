import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc grid">

<span class="icon-row flex">
<p class="icon-name">eui-icon-academic-cap</p>
<eui-icon-academic-cap type="solid"></eui-icon-academic-cap>
<eui-icon-academic-cap type="outline"></eui-icon-academic-cap>
<eui-icon-academic-cap type="mini"></eui-icon-academic-cap>
<eui-icon-academic-cap type="micro"></eui-icon-academic-cap>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-adjustments-horizontal</p>
<eui-icon-adjustments-horizontal type="solid"></eui-icon-adjustments-horizontal>
<eui-icon-adjustments-horizontal type="outline"></eui-icon-adjustments-horizontal>
<eui-icon-adjustments-horizontal type="mini"></eui-icon-adjustments-horizontal>
<eui-icon-adjustments-horizontal type="micro"></eui-icon-adjustments-horizontal>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-adjustments-vertical</p>
<eui-icon-adjustments-vertical type="solid"></eui-icon-adjustments-vertical>
<eui-icon-adjustments-vertical type="outline"></eui-icon-adjustments-vertical>
<eui-icon-adjustments-vertical type="mini"></eui-icon-adjustments-vertical>
<eui-icon-adjustments-vertical type="micro"></eui-icon-adjustments-vertical>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-archive-box</p>
<eui-icon-archive-box type="solid"></eui-icon-archive-box>
<eui-icon-archive-box type="outline"></eui-icon-archive-box>
<eui-icon-archive-box type="mini"></eui-icon-archive-box>
<eui-icon-archive-box type="micro"></eui-icon-archive-box>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-archive-box-arrow-down</p>
<eui-icon-archive-box-arrow-down type="solid"></eui-icon-archive-box-arrow-down>
<eui-icon-archive-box-arrow-down type="outline"></eui-icon-archive-box-arrow-down>
<eui-icon-archive-box-arrow-down type="mini"></eui-icon-archive-box-arrow-down>
<eui-icon-archive-box-arrow-down type="micro"></eui-icon-archive-box-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-archive-box-x-mark</p>
<eui-icon-archive-box-x-mark type="solid"></eui-icon-archive-box-x-mark>
<eui-icon-archive-box-x-mark type="outline"></eui-icon-archive-box-x-mark>
<eui-icon-archive-box-x-mark type="mini"></eui-icon-archive-box-x-mark>
<eui-icon-archive-box-x-mark type="micro"></eui-icon-archive-box-x-mark>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down</p>
<eui-icon-arrow-down type="solid"></eui-icon-arrow-down>
<eui-icon-arrow-down type="outline"></eui-icon-arrow-down>
<eui-icon-arrow-down type="mini"></eui-icon-arrow-down>
<eui-icon-arrow-down type="micro"></eui-icon-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-circle</p>
<eui-icon-arrow-down-circle type="solid"></eui-icon-arrow-down-circle>
<eui-icon-arrow-down-circle type="outline"></eui-icon-arrow-down-circle>
<eui-icon-arrow-down-circle type="mini"></eui-icon-arrow-down-circle>
<eui-icon-arrow-down-circle type="micro"></eui-icon-arrow-down-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-heavy</p>
<eui-icon-arrow-down-heavy type="solid"></eui-icon-arrow-down-heavy>
<eui-icon-arrow-down-heavy type="outline"></eui-icon-arrow-down-heavy>
<eui-icon-arrow-down-heavy type="mini"></eui-icon-arrow-down-heavy>
<eui-icon-arrow-down-heavy type="micro"></eui-icon-arrow-down-heavy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-left</p>
<eui-icon-arrow-down-left type="solid"></eui-icon-arrow-down-left>
<eui-icon-arrow-down-left type="outline"></eui-icon-arrow-down-left>
<eui-icon-arrow-down-left type="mini"></eui-icon-arrow-down-left>
<eui-icon-arrow-down-left type="micro"></eui-icon-arrow-down-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-on-square</p>
<eui-icon-arrow-down-on-square type="solid"></eui-icon-arrow-down-on-square>
<eui-icon-arrow-down-on-square type="outline"></eui-icon-arrow-down-on-square>
<eui-icon-arrow-down-on-square type="mini"></eui-icon-arrow-down-on-square>
<eui-icon-arrow-down-on-square type="micro"></eui-icon-arrow-down-on-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-on-square-stack</p>
<eui-icon-arrow-down-on-square-stack type="solid"></eui-icon-arrow-down-on-square-stack>
<eui-icon-arrow-down-on-square-stack type="outline"></eui-icon-arrow-down-on-square-stack>
<eui-icon-arrow-down-on-square-stack type="mini"></eui-icon-arrow-down-on-square-stack>
<eui-icon-arrow-down-on-square-stack type="micro"></eui-icon-arrow-down-on-square-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-right</p>
<eui-icon-arrow-down-right type="solid"></eui-icon-arrow-down-right>
<eui-icon-arrow-down-right type="outline"></eui-icon-arrow-down-right>
<eui-icon-arrow-down-right type="mini"></eui-icon-arrow-down-right>
<eui-icon-arrow-down-right type="micro"></eui-icon-arrow-down-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-down-tray</p>
<eui-icon-arrow-down-tray type="solid"></eui-icon-arrow-down-tray>
<eui-icon-arrow-down-tray type="outline"></eui-icon-arrow-down-tray>
<eui-icon-arrow-down-tray type="mini"></eui-icon-arrow-down-tray>
<eui-icon-arrow-down-tray type="micro"></eui-icon-arrow-down-tray>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-left</p>
<eui-icon-arrow-left type="solid"></eui-icon-arrow-left>
<eui-icon-arrow-left type="outline"></eui-icon-arrow-left>
<eui-icon-arrow-left type="mini"></eui-icon-arrow-left>
<eui-icon-arrow-left type="micro"></eui-icon-arrow-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-left-circle</p>
<eui-icon-arrow-left-circle type="solid"></eui-icon-arrow-left-circle>
<eui-icon-arrow-left-circle type="outline"></eui-icon-arrow-left-circle>
<eui-icon-arrow-left-circle type="mini"></eui-icon-arrow-left-circle>
<eui-icon-arrow-left-circle type="micro"></eui-icon-arrow-left-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-left-end-on-rectangle</p>
<eui-icon-arrow-left-end-on-rectangle type="solid"></eui-icon-arrow-left-end-on-rectangle>
<eui-icon-arrow-left-end-on-rectangle type="outline"></eui-icon-arrow-left-end-on-rectangle>
<eui-icon-arrow-left-end-on-rectangle type="mini"></eui-icon-arrow-left-end-on-rectangle>
<eui-icon-arrow-left-end-on-rectangle type="micro"></eui-icon-arrow-left-end-on-rectangle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-left-heavy</p>
<eui-icon-arrow-left-heavy type="solid"></eui-icon-arrow-left-heavy>
<eui-icon-arrow-left-heavy type="outline"></eui-icon-arrow-left-heavy>
<eui-icon-arrow-left-heavy type="mini"></eui-icon-arrow-left-heavy>
<eui-icon-arrow-left-heavy type="micro"></eui-icon-arrow-left-heavy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-left-start-on-rectangle</p>
<eui-icon-arrow-left-start-on-rectangle type="solid"></eui-icon-arrow-left-start-on-rectangle>
<eui-icon-arrow-left-start-on-rectangle type="outline"></eui-icon-arrow-left-start-on-rectangle>
<eui-icon-arrow-left-start-on-rectangle type="mini"></eui-icon-arrow-left-start-on-rectangle>
<eui-icon-arrow-left-start-on-rectangle type="micro"></eui-icon-arrow-left-start-on-rectangle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-long-down</p>
<eui-icon-arrow-long-down type="solid"></eui-icon-arrow-long-down>
<eui-icon-arrow-long-down type="outline"></eui-icon-arrow-long-down>
<eui-icon-arrow-long-down type="mini"></eui-icon-arrow-long-down>
<eui-icon-arrow-long-down type="micro"></eui-icon-arrow-long-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-long-left</p>
<eui-icon-arrow-long-left type="solid"></eui-icon-arrow-long-left>
<eui-icon-arrow-long-left type="outline"></eui-icon-arrow-long-left>
<eui-icon-arrow-long-left type="mini"></eui-icon-arrow-long-left>
<eui-icon-arrow-long-left type="micro"></eui-icon-arrow-long-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-long-right</p>
<eui-icon-arrow-long-right type="solid"></eui-icon-arrow-long-right>
<eui-icon-arrow-long-right type="outline"></eui-icon-arrow-long-right>
<eui-icon-arrow-long-right type="mini"></eui-icon-arrow-long-right>
<eui-icon-arrow-long-right type="micro"></eui-icon-arrow-long-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-long-up</p>
<eui-icon-arrow-long-up type="solid"></eui-icon-arrow-long-up>
<eui-icon-arrow-long-up type="outline"></eui-icon-arrow-long-up>
<eui-icon-arrow-long-up type="mini"></eui-icon-arrow-long-up>
<eui-icon-arrow-long-up type="micro"></eui-icon-arrow-long-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-path</p>
<eui-icon-arrow-path type="solid"></eui-icon-arrow-path>
<eui-icon-arrow-path type="outline"></eui-icon-arrow-path>
<eui-icon-arrow-path type="mini"></eui-icon-arrow-path>
<eui-icon-arrow-path type="micro"></eui-icon-arrow-path>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-path-rounded-square</p>
<eui-icon-arrow-path-rounded-square type="solid"></eui-icon-arrow-path-rounded-square>
<eui-icon-arrow-path-rounded-square type="outline"></eui-icon-arrow-path-rounded-square>
<eui-icon-arrow-path-rounded-square type="mini"></eui-icon-arrow-path-rounded-square>
<eui-icon-arrow-path-rounded-square type="micro"></eui-icon-arrow-path-rounded-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-right</p>
<eui-icon-arrow-right type="solid"></eui-icon-arrow-right>
<eui-icon-arrow-right type="outline"></eui-icon-arrow-right>
<eui-icon-arrow-right type="mini"></eui-icon-arrow-right>
<eui-icon-arrow-right type="micro"></eui-icon-arrow-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-right-circle</p>
<eui-icon-arrow-right-circle type="solid"></eui-icon-arrow-right-circle>
<eui-icon-arrow-right-circle type="outline"></eui-icon-arrow-right-circle>
<eui-icon-arrow-right-circle type="mini"></eui-icon-arrow-right-circle>
<eui-icon-arrow-right-circle type="micro"></eui-icon-arrow-right-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-right-end-on-rectangle</p>
<eui-icon-arrow-right-end-on-rectangle type="solid"></eui-icon-arrow-right-end-on-rectangle>
<eui-icon-arrow-right-end-on-rectangle type="outline"></eui-icon-arrow-right-end-on-rectangle>
<eui-icon-arrow-right-end-on-rectangle type="mini"></eui-icon-arrow-right-end-on-rectangle>
<eui-icon-arrow-right-end-on-rectangle type="micro"></eui-icon-arrow-right-end-on-rectangle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-right-heavy</p>
<eui-icon-arrow-right-heavy type="solid"></eui-icon-arrow-right-heavy>
<eui-icon-arrow-right-heavy type="outline"></eui-icon-arrow-right-heavy>
<eui-icon-arrow-right-heavy type="mini"></eui-icon-arrow-right-heavy>
<eui-icon-arrow-right-heavy type="micro"></eui-icon-arrow-right-heavy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-right-start-on-rectangle</p>
<eui-icon-arrow-right-start-on-rectangle type="solid"></eui-icon-arrow-right-start-on-rectangle>
<eui-icon-arrow-right-start-on-rectangle type="outline"></eui-icon-arrow-right-start-on-rectangle>
<eui-icon-arrow-right-start-on-rectangle type="mini"></eui-icon-arrow-right-start-on-rectangle>
<eui-icon-arrow-right-start-on-rectangle type="micro"></eui-icon-arrow-right-start-on-rectangle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-top-right-on-square</p>
<eui-icon-arrow-top-right-on-square type="solid"></eui-icon-arrow-top-right-on-square>
<eui-icon-arrow-top-right-on-square type="outline"></eui-icon-arrow-top-right-on-square>
<eui-icon-arrow-top-right-on-square type="mini"></eui-icon-arrow-top-right-on-square>
<eui-icon-arrow-top-right-on-square type="micro"></eui-icon-arrow-top-right-on-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-trending-down</p>
<eui-icon-arrow-trending-down type="solid"></eui-icon-arrow-trending-down>
<eui-icon-arrow-trending-down type="outline"></eui-icon-arrow-trending-down>
<eui-icon-arrow-trending-down type="mini"></eui-icon-arrow-trending-down>
<eui-icon-arrow-trending-down type="micro"></eui-icon-arrow-trending-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-trending-up</p>
<eui-icon-arrow-trending-up type="solid"></eui-icon-arrow-trending-up>
<eui-icon-arrow-trending-up type="outline"></eui-icon-arrow-trending-up>
<eui-icon-arrow-trending-up type="mini"></eui-icon-arrow-trending-up>
<eui-icon-arrow-trending-up type="micro"></eui-icon-arrow-trending-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-down-left</p>
<eui-icon-arrow-turn-down-left type="solid"></eui-icon-arrow-turn-down-left>
<eui-icon-arrow-turn-down-left type="outline"></eui-icon-arrow-turn-down-left>
<eui-icon-arrow-turn-down-left type="mini"></eui-icon-arrow-turn-down-left>
<eui-icon-arrow-turn-down-left type="micro"></eui-icon-arrow-turn-down-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-down-right</p>
<eui-icon-arrow-turn-down-right type="solid"></eui-icon-arrow-turn-down-right>
<eui-icon-arrow-turn-down-right type="outline"></eui-icon-arrow-turn-down-right>
<eui-icon-arrow-turn-down-right type="mini"></eui-icon-arrow-turn-down-right>
<eui-icon-arrow-turn-down-right type="micro"></eui-icon-arrow-turn-down-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-left-down</p>
<eui-icon-arrow-turn-left-down type="solid"></eui-icon-arrow-turn-left-down>
<eui-icon-arrow-turn-left-down type="outline"></eui-icon-arrow-turn-left-down>
<eui-icon-arrow-turn-left-down type="mini"></eui-icon-arrow-turn-left-down>
<eui-icon-arrow-turn-left-down type="micro"></eui-icon-arrow-turn-left-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-left-up</p>
<eui-icon-arrow-turn-left-up type="solid"></eui-icon-arrow-turn-left-up>
<eui-icon-arrow-turn-left-up type="outline"></eui-icon-arrow-turn-left-up>
<eui-icon-arrow-turn-left-up type="mini"></eui-icon-arrow-turn-left-up>
<eui-icon-arrow-turn-left-up type="micro"></eui-icon-arrow-turn-left-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-right-down</p>
<eui-icon-arrow-turn-right-down type="solid"></eui-icon-arrow-turn-right-down>
<eui-icon-arrow-turn-right-down type="outline"></eui-icon-arrow-turn-right-down>
<eui-icon-arrow-turn-right-down type="mini"></eui-icon-arrow-turn-right-down>
<eui-icon-arrow-turn-right-down type="micro"></eui-icon-arrow-turn-right-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-right-up</p>
<eui-icon-arrow-turn-right-up type="solid"></eui-icon-arrow-turn-right-up>
<eui-icon-arrow-turn-right-up type="outline"></eui-icon-arrow-turn-right-up>
<eui-icon-arrow-turn-right-up type="mini"></eui-icon-arrow-turn-right-up>
<eui-icon-arrow-turn-right-up type="micro"></eui-icon-arrow-turn-right-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-up-left</p>
<eui-icon-arrow-turn-up-left type="solid"></eui-icon-arrow-turn-up-left>
<eui-icon-arrow-turn-up-left type="outline"></eui-icon-arrow-turn-up-left>
<eui-icon-arrow-turn-up-left type="mini"></eui-icon-arrow-turn-up-left>
<eui-icon-arrow-turn-up-left type="micro"></eui-icon-arrow-turn-up-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-turn-up-right</p>
<eui-icon-arrow-turn-up-right type="solid"></eui-icon-arrow-turn-up-right>
<eui-icon-arrow-turn-up-right type="outline"></eui-icon-arrow-turn-up-right>
<eui-icon-arrow-turn-up-right type="mini"></eui-icon-arrow-turn-up-right>
<eui-icon-arrow-turn-up-right type="micro"></eui-icon-arrow-turn-up-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up</p>
<eui-icon-arrow-up type="solid"></eui-icon-arrow-up>
<eui-icon-arrow-up type="outline"></eui-icon-arrow-up>
<eui-icon-arrow-up type="mini"></eui-icon-arrow-up>
<eui-icon-arrow-up type="micro"></eui-icon-arrow-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-circle</p>
<eui-icon-arrow-up-circle type="solid"></eui-icon-arrow-up-circle>
<eui-icon-arrow-up-circle type="outline"></eui-icon-arrow-up-circle>
<eui-icon-arrow-up-circle type="mini"></eui-icon-arrow-up-circle>
<eui-icon-arrow-up-circle type="micro"></eui-icon-arrow-up-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-heavy</p>
<eui-icon-arrow-up-heavy type="solid"></eui-icon-arrow-up-heavy>
<eui-icon-arrow-up-heavy type="outline"></eui-icon-arrow-up-heavy>
<eui-icon-arrow-up-heavy type="mini"></eui-icon-arrow-up-heavy>
<eui-icon-arrow-up-heavy type="micro"></eui-icon-arrow-up-heavy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-left</p>
<eui-icon-arrow-up-left type="solid"></eui-icon-arrow-up-left>
<eui-icon-arrow-up-left type="outline"></eui-icon-arrow-up-left>
<eui-icon-arrow-up-left type="mini"></eui-icon-arrow-up-left>
<eui-icon-arrow-up-left type="micro"></eui-icon-arrow-up-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-on-square</p>
<eui-icon-arrow-up-on-square type="solid"></eui-icon-arrow-up-on-square>
<eui-icon-arrow-up-on-square type="outline"></eui-icon-arrow-up-on-square>
<eui-icon-arrow-up-on-square type="mini"></eui-icon-arrow-up-on-square>
<eui-icon-arrow-up-on-square type="micro"></eui-icon-arrow-up-on-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-on-square-stack</p>
<eui-icon-arrow-up-on-square-stack type="solid"></eui-icon-arrow-up-on-square-stack>
<eui-icon-arrow-up-on-square-stack type="outline"></eui-icon-arrow-up-on-square-stack>
<eui-icon-arrow-up-on-square-stack type="mini"></eui-icon-arrow-up-on-square-stack>
<eui-icon-arrow-up-on-square-stack type="micro"></eui-icon-arrow-up-on-square-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-right</p>
<eui-icon-arrow-up-right type="solid"></eui-icon-arrow-up-right>
<eui-icon-arrow-up-right type="outline"></eui-icon-arrow-up-right>
<eui-icon-arrow-up-right type="mini"></eui-icon-arrow-up-right>
<eui-icon-arrow-up-right type="micro"></eui-icon-arrow-up-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-up-tray</p>
<eui-icon-arrow-up-tray type="solid"></eui-icon-arrow-up-tray>
<eui-icon-arrow-up-tray type="outline"></eui-icon-arrow-up-tray>
<eui-icon-arrow-up-tray type="mini"></eui-icon-arrow-up-tray>
<eui-icon-arrow-up-tray type="micro"></eui-icon-arrow-up-tray>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-uturn-down</p>
<eui-icon-arrow-uturn-down type="solid"></eui-icon-arrow-uturn-down>
<eui-icon-arrow-uturn-down type="outline"></eui-icon-arrow-uturn-down>
<eui-icon-arrow-uturn-down type="mini"></eui-icon-arrow-uturn-down>
<eui-icon-arrow-uturn-down type="micro"></eui-icon-arrow-uturn-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-uturn-left</p>
<eui-icon-arrow-uturn-left type="solid"></eui-icon-arrow-uturn-left>
<eui-icon-arrow-uturn-left type="outline"></eui-icon-arrow-uturn-left>
<eui-icon-arrow-uturn-left type="mini"></eui-icon-arrow-uturn-left>
<eui-icon-arrow-uturn-left type="micro"></eui-icon-arrow-uturn-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-uturn-right</p>
<eui-icon-arrow-uturn-right type="solid"></eui-icon-arrow-uturn-right>
<eui-icon-arrow-uturn-right type="outline"></eui-icon-arrow-uturn-right>
<eui-icon-arrow-uturn-right type="mini"></eui-icon-arrow-uturn-right>
<eui-icon-arrow-uturn-right type="micro"></eui-icon-arrow-uturn-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrow-uturn-up</p>
<eui-icon-arrow-uturn-up type="solid"></eui-icon-arrow-uturn-up>
<eui-icon-arrow-uturn-up type="outline"></eui-icon-arrow-uturn-up>
<eui-icon-arrow-uturn-up type="mini"></eui-icon-arrow-uturn-up>
<eui-icon-arrow-uturn-up type="micro"></eui-icon-arrow-uturn-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrows-pointing-in</p>
<eui-icon-arrows-pointing-in type="solid"></eui-icon-arrows-pointing-in>
<eui-icon-arrows-pointing-in type="outline"></eui-icon-arrows-pointing-in>
<eui-icon-arrows-pointing-in type="mini"></eui-icon-arrows-pointing-in>
<eui-icon-arrows-pointing-in type="micro"></eui-icon-arrows-pointing-in>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrows-pointing-out</p>
<eui-icon-arrows-pointing-out type="solid"></eui-icon-arrows-pointing-out>
<eui-icon-arrows-pointing-out type="outline"></eui-icon-arrows-pointing-out>
<eui-icon-arrows-pointing-out type="mini"></eui-icon-arrows-pointing-out>
<eui-icon-arrows-pointing-out type="micro"></eui-icon-arrows-pointing-out>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrows-right-left</p>
<eui-icon-arrows-right-left type="solid"></eui-icon-arrows-right-left>
<eui-icon-arrows-right-left type="outline"></eui-icon-arrows-right-left>
<eui-icon-arrows-right-left type="mini"></eui-icon-arrows-right-left>
<eui-icon-arrows-right-left type="micro"></eui-icon-arrows-right-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-arrows-up-down</p>
<eui-icon-arrows-up-down type="solid"></eui-icon-arrows-up-down>
<eui-icon-arrows-up-down type="outline"></eui-icon-arrows-up-down>
<eui-icon-arrows-up-down type="mini"></eui-icon-arrows-up-down>
<eui-icon-arrows-up-down type="micro"></eui-icon-arrows-up-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-at-symbol</p>
<eui-icon-at-symbol type="solid"></eui-icon-at-symbol>
<eui-icon-at-symbol type="outline"></eui-icon-at-symbol>
<eui-icon-at-symbol type="mini"></eui-icon-at-symbol>
<eui-icon-at-symbol type="micro"></eui-icon-at-symbol>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-backspace</p>
<eui-icon-backspace type="solid"></eui-icon-backspace>
<eui-icon-backspace type="outline"></eui-icon-backspace>
<eui-icon-backspace type="mini"></eui-icon-backspace>
<eui-icon-backspace type="micro"></eui-icon-backspace>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-backward</p>
<eui-icon-backward type="solid"></eui-icon-backward>
<eui-icon-backward type="outline"></eui-icon-backward>
<eui-icon-backward type="mini"></eui-icon-backward>
<eui-icon-backward type="micro"></eui-icon-backward>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-banknotes</p>
<eui-icon-banknotes type="solid"></eui-icon-banknotes>
<eui-icon-banknotes type="outline"></eui-icon-banknotes>
<eui-icon-banknotes type="mini"></eui-icon-banknotes>
<eui-icon-banknotes type="micro"></eui-icon-banknotes>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-2</p>
<eui-icon-bars-2 type="solid"></eui-icon-bars-2>
<eui-icon-bars-2 type="outline"></eui-icon-bars-2>
<eui-icon-bars-2 type="mini"></eui-icon-bars-2>
<eui-icon-bars-2 type="micro"></eui-icon-bars-2>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-3</p>
<eui-icon-bars-3 type="solid"></eui-icon-bars-3>
<eui-icon-bars-3 type="outline"></eui-icon-bars-3>
<eui-icon-bars-3 type="mini"></eui-icon-bars-3>
<eui-icon-bars-3 type="micro"></eui-icon-bars-3>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-3-bottom-left</p>
<eui-icon-bars-3-bottom-left type="solid"></eui-icon-bars-3-bottom-left>
<eui-icon-bars-3-bottom-left type="outline"></eui-icon-bars-3-bottom-left>
<eui-icon-bars-3-bottom-left type="mini"></eui-icon-bars-3-bottom-left>
<eui-icon-bars-3-bottom-left type="micro"></eui-icon-bars-3-bottom-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-3-bottom-right</p>
<eui-icon-bars-3-bottom-right type="solid"></eui-icon-bars-3-bottom-right>
<eui-icon-bars-3-bottom-right type="outline"></eui-icon-bars-3-bottom-right>
<eui-icon-bars-3-bottom-right type="mini"></eui-icon-bars-3-bottom-right>
<eui-icon-bars-3-bottom-right type="micro"></eui-icon-bars-3-bottom-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-3-center-left</p>
<eui-icon-bars-3-center-left type="solid"></eui-icon-bars-3-center-left>
<eui-icon-bars-3-center-left type="outline"></eui-icon-bars-3-center-left>
<eui-icon-bars-3-center-left type="mini"></eui-icon-bars-3-center-left>
<eui-icon-bars-3-center-left type="micro"></eui-icon-bars-3-center-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-4</p>
<eui-icon-bars-4 type="solid"></eui-icon-bars-4>
<eui-icon-bars-4 type="outline"></eui-icon-bars-4>
<eui-icon-bars-4 type="mini"></eui-icon-bars-4>
<eui-icon-bars-4 type="micro"></eui-icon-bars-4>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-arrow-down</p>
<eui-icon-bars-arrow-down type="solid"></eui-icon-bars-arrow-down>
<eui-icon-bars-arrow-down type="outline"></eui-icon-bars-arrow-down>
<eui-icon-bars-arrow-down type="mini"></eui-icon-bars-arrow-down>
<eui-icon-bars-arrow-down type="micro"></eui-icon-bars-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bars-arrow-up</p>
<eui-icon-bars-arrow-up type="solid"></eui-icon-bars-arrow-up>
<eui-icon-bars-arrow-up type="outline"></eui-icon-bars-arrow-up>
<eui-icon-bars-arrow-up type="mini"></eui-icon-bars-arrow-up>
<eui-icon-bars-arrow-up type="micro"></eui-icon-bars-arrow-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-battery-0</p>
<eui-icon-battery-0 type="solid"></eui-icon-battery-0>
<eui-icon-battery-0 type="outline"></eui-icon-battery-0>
<eui-icon-battery-0 type="mini"></eui-icon-battery-0>
<eui-icon-battery-0 type="micro"></eui-icon-battery-0>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-battery-100</p>
<eui-icon-battery-100 type="solid"></eui-icon-battery-100>
<eui-icon-battery-100 type="outline"></eui-icon-battery-100>
<eui-icon-battery-100 type="mini"></eui-icon-battery-100>
<eui-icon-battery-100 type="micro"></eui-icon-battery-100>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-battery-50</p>
<eui-icon-battery-50 type="solid"></eui-icon-battery-50>
<eui-icon-battery-50 type="outline"></eui-icon-battery-50>
<eui-icon-battery-50 type="mini"></eui-icon-battery-50>
<eui-icon-battery-50 type="micro"></eui-icon-battery-50>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-beaker</p>
<eui-icon-beaker type="solid"></eui-icon-beaker>
<eui-icon-beaker type="outline"></eui-icon-beaker>
<eui-icon-beaker type="mini"></eui-icon-beaker>
<eui-icon-beaker type="micro"></eui-icon-beaker>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bell</p>
<eui-icon-bell type="solid"></eui-icon-bell>
<eui-icon-bell type="outline"></eui-icon-bell>
<eui-icon-bell type="mini"></eui-icon-bell>
<eui-icon-bell type="micro"></eui-icon-bell>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bell-alert</p>
<eui-icon-bell-alert type="solid"></eui-icon-bell-alert>
<eui-icon-bell-alert type="outline"></eui-icon-bell-alert>
<eui-icon-bell-alert type="mini"></eui-icon-bell-alert>
<eui-icon-bell-alert type="micro"></eui-icon-bell-alert>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bell-slash</p>
<eui-icon-bell-slash type="solid"></eui-icon-bell-slash>
<eui-icon-bell-slash type="outline"></eui-icon-bell-slash>
<eui-icon-bell-slash type="mini"></eui-icon-bell-slash>
<eui-icon-bell-slash type="micro"></eui-icon-bell-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bell-snooze</p>
<eui-icon-bell-snooze type="solid"></eui-icon-bell-snooze>
<eui-icon-bell-snooze type="outline"></eui-icon-bell-snooze>
<eui-icon-bell-snooze type="mini"></eui-icon-bell-snooze>
<eui-icon-bell-snooze type="micro"></eui-icon-bell-snooze>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bold</p>
<eui-icon-bold type="solid"></eui-icon-bold>
<eui-icon-bold type="outline"></eui-icon-bold>
<eui-icon-bold type="mini"></eui-icon-bold>
<eui-icon-bold type="micro"></eui-icon-bold>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bolt</p>
<eui-icon-bolt type="solid"></eui-icon-bolt>
<eui-icon-bolt type="outline"></eui-icon-bolt>
<eui-icon-bolt type="mini"></eui-icon-bolt>
<eui-icon-bolt type="micro"></eui-icon-bolt>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bolt-slash</p>
<eui-icon-bolt-slash type="solid"></eui-icon-bolt-slash>
<eui-icon-bolt-slash type="outline"></eui-icon-bolt-slash>
<eui-icon-bolt-slash type="mini"></eui-icon-bolt-slash>
<eui-icon-bolt-slash type="micro"></eui-icon-bolt-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-book-open</p>
<eui-icon-book-open type="solid"></eui-icon-book-open>
<eui-icon-book-open type="outline"></eui-icon-book-open>
<eui-icon-book-open type="mini"></eui-icon-book-open>
<eui-icon-book-open type="micro"></eui-icon-book-open>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bookmark</p>
<eui-icon-bookmark type="solid"></eui-icon-bookmark>
<eui-icon-bookmark type="outline"></eui-icon-bookmark>
<eui-icon-bookmark type="mini"></eui-icon-bookmark>
<eui-icon-bookmark type="micro"></eui-icon-bookmark>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bookmark-slash</p>
<eui-icon-bookmark-slash type="solid"></eui-icon-bookmark-slash>
<eui-icon-bookmark-slash type="outline"></eui-icon-bookmark-slash>
<eui-icon-bookmark-slash type="mini"></eui-icon-bookmark-slash>
<eui-icon-bookmark-slash type="micro"></eui-icon-bookmark-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bookmark-square</p>
<eui-icon-bookmark-square type="solid"></eui-icon-bookmark-square>
<eui-icon-bookmark-square type="outline"></eui-icon-bookmark-square>
<eui-icon-bookmark-square type="mini"></eui-icon-bookmark-square>
<eui-icon-bookmark-square type="micro"></eui-icon-bookmark-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-briefcase</p>
<eui-icon-briefcase type="solid"></eui-icon-briefcase>
<eui-icon-briefcase type="outline"></eui-icon-briefcase>
<eui-icon-briefcase type="mini"></eui-icon-briefcase>
<eui-icon-briefcase type="micro"></eui-icon-briefcase>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-bug-ant</p>
<eui-icon-bug-ant type="solid"></eui-icon-bug-ant>
<eui-icon-bug-ant type="outline"></eui-icon-bug-ant>
<eui-icon-bug-ant type="mini"></eui-icon-bug-ant>
<eui-icon-bug-ant type="micro"></eui-icon-bug-ant>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-building-library</p>
<eui-icon-building-library type="solid"></eui-icon-building-library>
<eui-icon-building-library type="outline"></eui-icon-building-library>
<eui-icon-building-library type="mini"></eui-icon-building-library>
<eui-icon-building-library type="micro"></eui-icon-building-library>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-building-office</p>
<eui-icon-building-office type="solid"></eui-icon-building-office>
<eui-icon-building-office type="outline"></eui-icon-building-office>
<eui-icon-building-office type="mini"></eui-icon-building-office>
<eui-icon-building-office type="micro"></eui-icon-building-office>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-building-office-2</p>
<eui-icon-building-office-2 type="solid"></eui-icon-building-office-2>
<eui-icon-building-office-2 type="outline"></eui-icon-building-office-2>
<eui-icon-building-office-2 type="mini"></eui-icon-building-office-2>
<eui-icon-building-office-2 type="micro"></eui-icon-building-office-2>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-building-storefront</p>
<eui-icon-building-storefront type="solid"></eui-icon-building-storefront>
<eui-icon-building-storefront type="outline"></eui-icon-building-storefront>
<eui-icon-building-storefront type="mini"></eui-icon-building-storefront>
<eui-icon-building-storefront type="micro"></eui-icon-building-storefront>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cake</p>
<eui-icon-cake type="solid"></eui-icon-cake>
<eui-icon-cake type="outline"></eui-icon-cake>
<eui-icon-cake type="mini"></eui-icon-cake>
<eui-icon-cake type="micro"></eui-icon-cake>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-calculator</p>
<eui-icon-calculator type="solid"></eui-icon-calculator>
<eui-icon-calculator type="outline"></eui-icon-calculator>
<eui-icon-calculator type="mini"></eui-icon-calculator>
<eui-icon-calculator type="micro"></eui-icon-calculator>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-calendar</p>
<eui-icon-calendar type="solid"></eui-icon-calendar>
<eui-icon-calendar type="outline"></eui-icon-calendar>
<eui-icon-calendar type="mini"></eui-icon-calendar>
<eui-icon-calendar type="micro"></eui-icon-calendar>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-calendar-date-range</p>
<eui-icon-calendar-date-range type="solid"></eui-icon-calendar-date-range>
<eui-icon-calendar-date-range type="outline"></eui-icon-calendar-date-range>
<eui-icon-calendar-date-range type="mini"></eui-icon-calendar-date-range>
<eui-icon-calendar-date-range type="micro"></eui-icon-calendar-date-range>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-calendar-days</p>
<eui-icon-calendar-days type="solid"></eui-icon-calendar-days>
<eui-icon-calendar-days type="outline"></eui-icon-calendar-days>
<eui-icon-calendar-days type="mini"></eui-icon-calendar-days>
<eui-icon-calendar-days type="micro"></eui-icon-calendar-days>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-camera</p>
<eui-icon-camera type="solid"></eui-icon-camera>
<eui-icon-camera type="outline"></eui-icon-camera>
<eui-icon-camera type="mini"></eui-icon-camera>
<eui-icon-camera type="micro"></eui-icon-camera>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chart-bar</p>
<eui-icon-chart-bar type="solid"></eui-icon-chart-bar>
<eui-icon-chart-bar type="outline"></eui-icon-chart-bar>
<eui-icon-chart-bar type="mini"></eui-icon-chart-bar>
<eui-icon-chart-bar type="micro"></eui-icon-chart-bar>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chart-bar-square</p>
<eui-icon-chart-bar-square type="solid"></eui-icon-chart-bar-square>
<eui-icon-chart-bar-square type="outline"></eui-icon-chart-bar-square>
<eui-icon-chart-bar-square type="mini"></eui-icon-chart-bar-square>
<eui-icon-chart-bar-square type="micro"></eui-icon-chart-bar-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chart-pie</p>
<eui-icon-chart-pie type="solid"></eui-icon-chart-pie>
<eui-icon-chart-pie type="outline"></eui-icon-chart-pie>
<eui-icon-chart-pie type="mini"></eui-icon-chart-pie>
<eui-icon-chart-pie type="micro"></eui-icon-chart-pie>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-bottom-center</p>
<eui-icon-chat-bubble-bottom-center type="solid"></eui-icon-chat-bubble-bottom-center>
<eui-icon-chat-bubble-bottom-center type="outline"></eui-icon-chat-bubble-bottom-center>
<eui-icon-chat-bubble-bottom-center type="mini"></eui-icon-chat-bubble-bottom-center>
<eui-icon-chat-bubble-bottom-center type="micro"></eui-icon-chat-bubble-bottom-center>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-bottom-center-text</p>
<eui-icon-chat-bubble-bottom-center-text type="solid"></eui-icon-chat-bubble-bottom-center-text>
<eui-icon-chat-bubble-bottom-center-text type="outline"></eui-icon-chat-bubble-bottom-center-text>
<eui-icon-chat-bubble-bottom-center-text type="mini"></eui-icon-chat-bubble-bottom-center-text>
<eui-icon-chat-bubble-bottom-center-text type="micro"></eui-icon-chat-bubble-bottom-center-text>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-left</p>
<eui-icon-chat-bubble-left type="solid"></eui-icon-chat-bubble-left>
<eui-icon-chat-bubble-left type="outline"></eui-icon-chat-bubble-left>
<eui-icon-chat-bubble-left type="mini"></eui-icon-chat-bubble-left>
<eui-icon-chat-bubble-left type="micro"></eui-icon-chat-bubble-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-left-ellipsis</p>
<eui-icon-chat-bubble-left-ellipsis type="solid"></eui-icon-chat-bubble-left-ellipsis>
<eui-icon-chat-bubble-left-ellipsis type="outline"></eui-icon-chat-bubble-left-ellipsis>
<eui-icon-chat-bubble-left-ellipsis type="mini"></eui-icon-chat-bubble-left-ellipsis>
<eui-icon-chat-bubble-left-ellipsis type="micro"></eui-icon-chat-bubble-left-ellipsis>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-left-right</p>
<eui-icon-chat-bubble-left-right type="solid"></eui-icon-chat-bubble-left-right>
<eui-icon-chat-bubble-left-right type="outline"></eui-icon-chat-bubble-left-right>
<eui-icon-chat-bubble-left-right type="mini"></eui-icon-chat-bubble-left-right>
<eui-icon-chat-bubble-left-right type="micro"></eui-icon-chat-bubble-left-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-oval-left</p>
<eui-icon-chat-bubble-oval-left type="solid"></eui-icon-chat-bubble-oval-left>
<eui-icon-chat-bubble-oval-left type="outline"></eui-icon-chat-bubble-oval-left>
<eui-icon-chat-bubble-oval-left type="mini"></eui-icon-chat-bubble-oval-left>
<eui-icon-chat-bubble-oval-left type="micro"></eui-icon-chat-bubble-oval-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chat-bubble-oval-left-ellipsis</p>
<eui-icon-chat-bubble-oval-left-ellipsis type="solid"></eui-icon-chat-bubble-oval-left-ellipsis>
<eui-icon-chat-bubble-oval-left-ellipsis type="outline"></eui-icon-chat-bubble-oval-left-ellipsis>
<eui-icon-chat-bubble-oval-left-ellipsis type="mini"></eui-icon-chat-bubble-oval-left-ellipsis>
<eui-icon-chat-bubble-oval-left-ellipsis type="micro"></eui-icon-chat-bubble-oval-left-ellipsis>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-check</p>
<eui-icon-check type="solid"></eui-icon-check>
<eui-icon-check type="outline"></eui-icon-check>
<eui-icon-check type="mini"></eui-icon-check>
<eui-icon-check type="micro"></eui-icon-check>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-check-badge</p>
<eui-icon-check-badge type="solid"></eui-icon-check-badge>
<eui-icon-check-badge type="outline"></eui-icon-check-badge>
<eui-icon-check-badge type="mini"></eui-icon-check-badge>
<eui-icon-check-badge type="micro"></eui-icon-check-badge>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-check-circle</p>
<eui-icon-check-circle type="solid"></eui-icon-check-circle>
<eui-icon-check-circle type="outline"></eui-icon-check-circle>
<eui-icon-check-circle type="mini"></eui-icon-check-circle>
<eui-icon-check-circle type="micro"></eui-icon-check-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-double-down</p>
<eui-icon-chevron-double-down type="solid"></eui-icon-chevron-double-down>
<eui-icon-chevron-double-down type="outline"></eui-icon-chevron-double-down>
<eui-icon-chevron-double-down type="mini"></eui-icon-chevron-double-down>
<eui-icon-chevron-double-down type="micro"></eui-icon-chevron-double-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-double-left</p>
<eui-icon-chevron-double-left type="solid"></eui-icon-chevron-double-left>
<eui-icon-chevron-double-left type="outline"></eui-icon-chevron-double-left>
<eui-icon-chevron-double-left type="mini"></eui-icon-chevron-double-left>
<eui-icon-chevron-double-left type="micro"></eui-icon-chevron-double-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-double-right</p>
<eui-icon-chevron-double-right type="solid"></eui-icon-chevron-double-right>
<eui-icon-chevron-double-right type="outline"></eui-icon-chevron-double-right>
<eui-icon-chevron-double-right type="mini"></eui-icon-chevron-double-right>
<eui-icon-chevron-double-right type="micro"></eui-icon-chevron-double-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-double-up</p>
<eui-icon-chevron-double-up type="solid"></eui-icon-chevron-double-up>
<eui-icon-chevron-double-up type="outline"></eui-icon-chevron-double-up>
<eui-icon-chevron-double-up type="mini"></eui-icon-chevron-double-up>
<eui-icon-chevron-double-up type="micro"></eui-icon-chevron-double-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-down</p>
<eui-icon-chevron-down type="solid"></eui-icon-chevron-down>
<eui-icon-chevron-down type="outline"></eui-icon-chevron-down>
<eui-icon-chevron-down type="mini"></eui-icon-chevron-down>
<eui-icon-chevron-down type="micro"></eui-icon-chevron-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-left</p>
<eui-icon-chevron-left type="solid"></eui-icon-chevron-left>
<eui-icon-chevron-left type="outline"></eui-icon-chevron-left>
<eui-icon-chevron-left type="mini"></eui-icon-chevron-left>
<eui-icon-chevron-left type="micro"></eui-icon-chevron-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-right</p>
<eui-icon-chevron-right type="solid"></eui-icon-chevron-right>
<eui-icon-chevron-right type="outline"></eui-icon-chevron-right>
<eui-icon-chevron-right type="mini"></eui-icon-chevron-right>
<eui-icon-chevron-right type="micro"></eui-icon-chevron-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-up</p>
<eui-icon-chevron-up type="solid"></eui-icon-chevron-up>
<eui-icon-chevron-up type="outline"></eui-icon-chevron-up>
<eui-icon-chevron-up type="mini"></eui-icon-chevron-up>
<eui-icon-chevron-up type="micro"></eui-icon-chevron-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-chevron-up-down</p>
<eui-icon-chevron-up-down type="solid"></eui-icon-chevron-up-down>
<eui-icon-chevron-up-down type="outline"></eui-icon-chevron-up-down>
<eui-icon-chevron-up-down type="mini"></eui-icon-chevron-up-down>
<eui-icon-chevron-up-down type="micro"></eui-icon-chevron-up-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-circle-stack</p>
<eui-icon-circle-stack type="solid"></eui-icon-circle-stack>
<eui-icon-circle-stack type="outline"></eui-icon-circle-stack>
<eui-icon-circle-stack type="mini"></eui-icon-circle-stack>
<eui-icon-circle-stack type="micro"></eui-icon-circle-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-clipboard</p>
<eui-icon-clipboard type="solid"></eui-icon-clipboard>
<eui-icon-clipboard type="outline"></eui-icon-clipboard>
<eui-icon-clipboard type="mini"></eui-icon-clipboard>
<eui-icon-clipboard type="micro"></eui-icon-clipboard>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-clipboard-document</p>
<eui-icon-clipboard-document type="solid"></eui-icon-clipboard-document>
<eui-icon-clipboard-document type="outline"></eui-icon-clipboard-document>
<eui-icon-clipboard-document type="mini"></eui-icon-clipboard-document>
<eui-icon-clipboard-document type="micro"></eui-icon-clipboard-document>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-clipboard-document-check</p>
<eui-icon-clipboard-document-check type="solid"></eui-icon-clipboard-document-check>
<eui-icon-clipboard-document-check type="outline"></eui-icon-clipboard-document-check>
<eui-icon-clipboard-document-check type="mini"></eui-icon-clipboard-document-check>
<eui-icon-clipboard-document-check type="micro"></eui-icon-clipboard-document-check>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-clipboard-document-list</p>
<eui-icon-clipboard-document-list type="solid"></eui-icon-clipboard-document-list>
<eui-icon-clipboard-document-list type="outline"></eui-icon-clipboard-document-list>
<eui-icon-clipboard-document-list type="mini"></eui-icon-clipboard-document-list>
<eui-icon-clipboard-document-list type="micro"></eui-icon-clipboard-document-list>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-clock</p>
<eui-icon-clock type="solid"></eui-icon-clock>
<eui-icon-clock type="outline"></eui-icon-clock>
<eui-icon-clock type="mini"></eui-icon-clock>
<eui-icon-clock type="micro"></eui-icon-clock>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cloud</p>
<eui-icon-cloud type="solid"></eui-icon-cloud>
<eui-icon-cloud type="outline"></eui-icon-cloud>
<eui-icon-cloud type="mini"></eui-icon-cloud>
<eui-icon-cloud type="micro"></eui-icon-cloud>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cloud-arrow-down</p>
<eui-icon-cloud-arrow-down type="solid"></eui-icon-cloud-arrow-down>
<eui-icon-cloud-arrow-down type="outline"></eui-icon-cloud-arrow-down>
<eui-icon-cloud-arrow-down type="mini"></eui-icon-cloud-arrow-down>
<eui-icon-cloud-arrow-down type="micro"></eui-icon-cloud-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cloud-arrow-up</p>
<eui-icon-cloud-arrow-up type="solid"></eui-icon-cloud-arrow-up>
<eui-icon-cloud-arrow-up type="outline"></eui-icon-cloud-arrow-up>
<eui-icon-cloud-arrow-up type="mini"></eui-icon-cloud-arrow-up>
<eui-icon-cloud-arrow-up type="micro"></eui-icon-cloud-arrow-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-code-bracket</p>
<eui-icon-code-bracket type="solid"></eui-icon-code-bracket>
<eui-icon-code-bracket type="outline"></eui-icon-code-bracket>
<eui-icon-code-bracket type="mini"></eui-icon-code-bracket>
<eui-icon-code-bracket type="micro"></eui-icon-code-bracket>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-code-bracket-square</p>
<eui-icon-code-bracket-square type="solid"></eui-icon-code-bracket-square>
<eui-icon-code-bracket-square type="outline"></eui-icon-code-bracket-square>
<eui-icon-code-bracket-square type="mini"></eui-icon-code-bracket-square>
<eui-icon-code-bracket-square type="micro"></eui-icon-code-bracket-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cog</p>
<eui-icon-cog type="solid"></eui-icon-cog>
<eui-icon-cog type="outline"></eui-icon-cog>
<eui-icon-cog type="mini"></eui-icon-cog>
<eui-icon-cog type="micro"></eui-icon-cog>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cog-6-tooth</p>
<eui-icon-cog-6-tooth type="solid"></eui-icon-cog-6-tooth>
<eui-icon-cog-6-tooth type="outline"></eui-icon-cog-6-tooth>
<eui-icon-cog-6-tooth type="mini"></eui-icon-cog-6-tooth>
<eui-icon-cog-6-tooth type="micro"></eui-icon-cog-6-tooth>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cog-8-tooth</p>
<eui-icon-cog-8-tooth type="solid"></eui-icon-cog-8-tooth>
<eui-icon-cog-8-tooth type="outline"></eui-icon-cog-8-tooth>
<eui-icon-cog-8-tooth type="mini"></eui-icon-cog-8-tooth>
<eui-icon-cog-8-tooth type="micro"></eui-icon-cog-8-tooth>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-command-line</p>
<eui-icon-command-line type="solid"></eui-icon-command-line>
<eui-icon-command-line type="outline"></eui-icon-command-line>
<eui-icon-command-line type="mini"></eui-icon-command-line>
<eui-icon-command-line type="micro"></eui-icon-command-line>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-computer-desktop</p>
<eui-icon-computer-desktop type="solid"></eui-icon-computer-desktop>
<eui-icon-computer-desktop type="outline"></eui-icon-computer-desktop>
<eui-icon-computer-desktop type="mini"></eui-icon-computer-desktop>
<eui-icon-computer-desktop type="micro"></eui-icon-computer-desktop>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cpu-chip</p>
<eui-icon-cpu-chip type="solid"></eui-icon-cpu-chip>
<eui-icon-cpu-chip type="outline"></eui-icon-cpu-chip>
<eui-icon-cpu-chip type="mini"></eui-icon-cpu-chip>
<eui-icon-cpu-chip type="micro"></eui-icon-cpu-chip>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-credit-card</p>
<eui-icon-credit-card type="solid"></eui-icon-credit-card>
<eui-icon-credit-card type="outline"></eui-icon-credit-card>
<eui-icon-credit-card type="mini"></eui-icon-credit-card>
<eui-icon-credit-card type="micro"></eui-icon-credit-card>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cube</p>
<eui-icon-cube type="solid"></eui-icon-cube>
<eui-icon-cube type="outline"></eui-icon-cube>
<eui-icon-cube type="mini"></eui-icon-cube>
<eui-icon-cube type="micro"></eui-icon-cube>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cube-transparent</p>
<eui-icon-cube-transparent type="solid"></eui-icon-cube-transparent>
<eui-icon-cube-transparent type="outline"></eui-icon-cube-transparent>
<eui-icon-cube-transparent type="mini"></eui-icon-cube-transparent>
<eui-icon-cube-transparent type="micro"></eui-icon-cube-transparent>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-bangladeshi</p>
<eui-icon-currency-bangladeshi type="solid"></eui-icon-currency-bangladeshi>
<eui-icon-currency-bangladeshi type="outline"></eui-icon-currency-bangladeshi>
<eui-icon-currency-bangladeshi type="mini"></eui-icon-currency-bangladeshi>
<eui-icon-currency-bangladeshi type="micro"></eui-icon-currency-bangladeshi>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-dollar</p>
<eui-icon-currency-dollar type="solid"></eui-icon-currency-dollar>
<eui-icon-currency-dollar type="outline"></eui-icon-currency-dollar>
<eui-icon-currency-dollar type="mini"></eui-icon-currency-dollar>
<eui-icon-currency-dollar type="micro"></eui-icon-currency-dollar>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-euro</p>
<eui-icon-currency-euro type="solid"></eui-icon-currency-euro>
<eui-icon-currency-euro type="outline"></eui-icon-currency-euro>
<eui-icon-currency-euro type="mini"></eui-icon-currency-euro>
<eui-icon-currency-euro type="micro"></eui-icon-currency-euro>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-pound</p>
<eui-icon-currency-pound type="solid"></eui-icon-currency-pound>
<eui-icon-currency-pound type="outline"></eui-icon-currency-pound>
<eui-icon-currency-pound type="mini"></eui-icon-currency-pound>
<eui-icon-currency-pound type="micro"></eui-icon-currency-pound>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-rupee</p>
<eui-icon-currency-rupee type="solid"></eui-icon-currency-rupee>
<eui-icon-currency-rupee type="outline"></eui-icon-currency-rupee>
<eui-icon-currency-rupee type="mini"></eui-icon-currency-rupee>
<eui-icon-currency-rupee type="micro"></eui-icon-currency-rupee>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-currency-yen</p>
<eui-icon-currency-yen type="solid"></eui-icon-currency-yen>
<eui-icon-currency-yen type="outline"></eui-icon-currency-yen>
<eui-icon-currency-yen type="mini"></eui-icon-currency-yen>
<eui-icon-currency-yen type="micro"></eui-icon-currency-yen>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cursor-arrow-rays</p>
<eui-icon-cursor-arrow-rays type="solid"></eui-icon-cursor-arrow-rays>
<eui-icon-cursor-arrow-rays type="outline"></eui-icon-cursor-arrow-rays>
<eui-icon-cursor-arrow-rays type="mini"></eui-icon-cursor-arrow-rays>
<eui-icon-cursor-arrow-rays type="micro"></eui-icon-cursor-arrow-rays>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-cursor-arrow-ripple</p>
<eui-icon-cursor-arrow-ripple type="solid"></eui-icon-cursor-arrow-ripple>
<eui-icon-cursor-arrow-ripple type="outline"></eui-icon-cursor-arrow-ripple>
<eui-icon-cursor-arrow-ripple type="mini"></eui-icon-cursor-arrow-ripple>
<eui-icon-cursor-arrow-ripple type="micro"></eui-icon-cursor-arrow-ripple>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-device-phone-mobile</p>
<eui-icon-device-phone-mobile type="solid"></eui-icon-device-phone-mobile>
<eui-icon-device-phone-mobile type="outline"></eui-icon-device-phone-mobile>
<eui-icon-device-phone-mobile type="mini"></eui-icon-device-phone-mobile>
<eui-icon-device-phone-mobile type="micro"></eui-icon-device-phone-mobile>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-device-tablet</p>
<eui-icon-device-tablet type="solid"></eui-icon-device-tablet>
<eui-icon-device-tablet type="outline"></eui-icon-device-tablet>
<eui-icon-device-tablet type="mini"></eui-icon-device-tablet>
<eui-icon-device-tablet type="micro"></eui-icon-device-tablet>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document</p>
<eui-icon-document type="solid"></eui-icon-document>
<eui-icon-document type="outline"></eui-icon-document>
<eui-icon-document type="mini"></eui-icon-document>
<eui-icon-document type="micro"></eui-icon-document>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-arrow-down</p>
<eui-icon-document-arrow-down type="solid"></eui-icon-document-arrow-down>
<eui-icon-document-arrow-down type="outline"></eui-icon-document-arrow-down>
<eui-icon-document-arrow-down type="mini"></eui-icon-document-arrow-down>
<eui-icon-document-arrow-down type="micro"></eui-icon-document-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-arrow-up</p>
<eui-icon-document-arrow-up type="solid"></eui-icon-document-arrow-up>
<eui-icon-document-arrow-up type="outline"></eui-icon-document-arrow-up>
<eui-icon-document-arrow-up type="mini"></eui-icon-document-arrow-up>
<eui-icon-document-arrow-up type="micro"></eui-icon-document-arrow-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-chart-bar</p>
<eui-icon-document-chart-bar type="solid"></eui-icon-document-chart-bar>
<eui-icon-document-chart-bar type="outline"></eui-icon-document-chart-bar>
<eui-icon-document-chart-bar type="mini"></eui-icon-document-chart-bar>
<eui-icon-document-chart-bar type="micro"></eui-icon-document-chart-bar>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-check</p>
<eui-icon-document-check type="solid"></eui-icon-document-check>
<eui-icon-document-check type="outline"></eui-icon-document-check>
<eui-icon-document-check type="mini"></eui-icon-document-check>
<eui-icon-document-check type="micro"></eui-icon-document-check>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-duplicate</p>
<eui-icon-document-duplicate type="solid"></eui-icon-document-duplicate>
<eui-icon-document-duplicate type="outline"></eui-icon-document-duplicate>
<eui-icon-document-duplicate type="mini"></eui-icon-document-duplicate>
<eui-icon-document-duplicate type="micro"></eui-icon-document-duplicate>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-magnifying-glass</p>
<eui-icon-document-magnifying-glass type="solid"></eui-icon-document-magnifying-glass>
<eui-icon-document-magnifying-glass type="outline"></eui-icon-document-magnifying-glass>
<eui-icon-document-magnifying-glass type="mini"></eui-icon-document-magnifying-glass>
<eui-icon-document-magnifying-glass type="micro"></eui-icon-document-magnifying-glass>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-minus</p>
<eui-icon-document-minus type="solid"></eui-icon-document-minus>
<eui-icon-document-minus type="outline"></eui-icon-document-minus>
<eui-icon-document-minus type="mini"></eui-icon-document-minus>
<eui-icon-document-minus type="micro"></eui-icon-document-minus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-plus</p>
<eui-icon-document-plus type="solid"></eui-icon-document-plus>
<eui-icon-document-plus type="outline"></eui-icon-document-plus>
<eui-icon-document-plus type="mini"></eui-icon-document-plus>
<eui-icon-document-plus type="micro"></eui-icon-document-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-document-text</p>
<eui-icon-document-text type="solid"></eui-icon-document-text>
<eui-icon-document-text type="outline"></eui-icon-document-text>
<eui-icon-document-text type="mini"></eui-icon-document-text>
<eui-icon-document-text type="micro"></eui-icon-document-text>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-ellipsis-horizontal</p>
<eui-icon-ellipsis-horizontal type="solid"></eui-icon-ellipsis-horizontal>
<eui-icon-ellipsis-horizontal type="outline"></eui-icon-ellipsis-horizontal>
<eui-icon-ellipsis-horizontal type="mini"></eui-icon-ellipsis-horizontal>
<eui-icon-ellipsis-horizontal type="micro"></eui-icon-ellipsis-horizontal>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-ellipsis-horizontal-circle</p>
<eui-icon-ellipsis-horizontal-circle type="solid"></eui-icon-ellipsis-horizontal-circle>
<eui-icon-ellipsis-horizontal-circle type="outline"></eui-icon-ellipsis-horizontal-circle>
<eui-icon-ellipsis-horizontal-circle type="mini"></eui-icon-ellipsis-horizontal-circle>
<eui-icon-ellipsis-horizontal-circle type="micro"></eui-icon-ellipsis-horizontal-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-ellipsis-vertical</p>
<eui-icon-ellipsis-vertical type="solid"></eui-icon-ellipsis-vertical>
<eui-icon-ellipsis-vertical type="outline"></eui-icon-ellipsis-vertical>
<eui-icon-ellipsis-vertical type="mini"></eui-icon-ellipsis-vertical>
<eui-icon-ellipsis-vertical type="micro"></eui-icon-ellipsis-vertical>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-envelope</p>
<eui-icon-envelope type="solid"></eui-icon-envelope>
<eui-icon-envelope type="outline"></eui-icon-envelope>
<eui-icon-envelope type="mini"></eui-icon-envelope>
<eui-icon-envelope type="micro"></eui-icon-envelope>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-envelope-open</p>
<eui-icon-envelope-open type="solid"></eui-icon-envelope-open>
<eui-icon-envelope-open type="outline"></eui-icon-envelope-open>
<eui-icon-envelope-open type="mini"></eui-icon-envelope-open>
<eui-icon-envelope-open type="micro"></eui-icon-envelope-open>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-exclamation-circle</p>
<eui-icon-exclamation-circle type="solid"></eui-icon-exclamation-circle>
<eui-icon-exclamation-circle type="outline"></eui-icon-exclamation-circle>
<eui-icon-exclamation-circle type="mini"></eui-icon-exclamation-circle>
<eui-icon-exclamation-circle type="micro"></eui-icon-exclamation-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-exclamation-triangle</p>
<eui-icon-exclamation-triangle type="solid"></eui-icon-exclamation-triangle>
<eui-icon-exclamation-triangle type="outline"></eui-icon-exclamation-triangle>
<eui-icon-exclamation-triangle type="mini"></eui-icon-exclamation-triangle>
<eui-icon-exclamation-triangle type="micro"></eui-icon-exclamation-triangle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-eye</p>
<eui-icon-eye type="solid"></eui-icon-eye>
<eui-icon-eye type="outline"></eui-icon-eye>
<eui-icon-eye type="mini"></eui-icon-eye>
<eui-icon-eye type="micro"></eui-icon-eye>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-eye-dropper</p>
<eui-icon-eye-dropper type="solid"></eui-icon-eye-dropper>
<eui-icon-eye-dropper type="outline"></eui-icon-eye-dropper>
<eui-icon-eye-dropper type="mini"></eui-icon-eye-dropper>
<eui-icon-eye-dropper type="micro"></eui-icon-eye-dropper>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-eye-slash</p>
<eui-icon-eye-slash type="solid"></eui-icon-eye-slash>
<eui-icon-eye-slash type="outline"></eui-icon-eye-slash>
<eui-icon-eye-slash type="mini"></eui-icon-eye-slash>
<eui-icon-eye-slash type="micro"></eui-icon-eye-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-face-frown</p>
<eui-icon-face-frown type="solid"></eui-icon-face-frown>
<eui-icon-face-frown type="outline"></eui-icon-face-frown>
<eui-icon-face-frown type="mini"></eui-icon-face-frown>
<eui-icon-face-frown type="micro"></eui-icon-face-frown>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-face-smile</p>
<eui-icon-face-smile type="solid"></eui-icon-face-smile>
<eui-icon-face-smile type="outline"></eui-icon-face-smile>
<eui-icon-face-smile type="mini"></eui-icon-face-smile>
<eui-icon-face-smile type="micro"></eui-icon-face-smile>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-film</p>
<eui-icon-film type="solid"></eui-icon-film>
<eui-icon-film type="outline"></eui-icon-film>
<eui-icon-film type="mini"></eui-icon-film>
<eui-icon-film type="micro"></eui-icon-film>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-finger-print</p>
<eui-icon-finger-print type="solid"></eui-icon-finger-print>
<eui-icon-finger-print type="outline"></eui-icon-finger-print>
<eui-icon-finger-print type="mini"></eui-icon-finger-print>
<eui-icon-finger-print type="micro"></eui-icon-finger-print>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-fire</p>
<eui-icon-fire type="solid"></eui-icon-fire>
<eui-icon-fire type="outline"></eui-icon-fire>
<eui-icon-fire type="mini"></eui-icon-fire>
<eui-icon-fire type="micro"></eui-icon-fire>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-flag</p>
<eui-icon-flag type="solid"></eui-icon-flag>
<eui-icon-flag type="outline"></eui-icon-flag>
<eui-icon-flag type="mini"></eui-icon-flag>
<eui-icon-flag type="micro"></eui-icon-flag>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-folder</p>
<eui-icon-folder type="solid"></eui-icon-folder>
<eui-icon-folder type="outline"></eui-icon-folder>
<eui-icon-folder type="mini"></eui-icon-folder>
<eui-icon-folder type="micro"></eui-icon-folder>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-folder-arrow-down</p>
<eui-icon-folder-arrow-down type="solid"></eui-icon-folder-arrow-down>
<eui-icon-folder-arrow-down type="outline"></eui-icon-folder-arrow-down>
<eui-icon-folder-arrow-down type="mini"></eui-icon-folder-arrow-down>
<eui-icon-folder-arrow-down type="micro"></eui-icon-folder-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-folder-minus</p>
<eui-icon-folder-minus type="solid"></eui-icon-folder-minus>
<eui-icon-folder-minus type="outline"></eui-icon-folder-minus>
<eui-icon-folder-minus type="mini"></eui-icon-folder-minus>
<eui-icon-folder-minus type="micro"></eui-icon-folder-minus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-folder-open</p>
<eui-icon-folder-open type="solid"></eui-icon-folder-open>
<eui-icon-folder-open type="outline"></eui-icon-folder-open>
<eui-icon-folder-open type="mini"></eui-icon-folder-open>
<eui-icon-folder-open type="micro"></eui-icon-folder-open>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-folder-plus</p>
<eui-icon-folder-plus type="solid"></eui-icon-folder-plus>
<eui-icon-folder-plus type="outline"></eui-icon-folder-plus>
<eui-icon-folder-plus type="mini"></eui-icon-folder-plus>
<eui-icon-folder-plus type="micro"></eui-icon-folder-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-forward</p>
<eui-icon-forward type="solid"></eui-icon-forward>
<eui-icon-forward type="outline"></eui-icon-forward>
<eui-icon-forward type="mini"></eui-icon-forward>
<eui-icon-forward type="micro"></eui-icon-forward>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-funnel</p>
<eui-icon-funnel type="solid"></eui-icon-funnel>
<eui-icon-funnel type="outline"></eui-icon-funnel>
<eui-icon-funnel type="mini"></eui-icon-funnel>
<eui-icon-funnel type="micro"></eui-icon-funnel>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-gif</p>
<eui-icon-gif type="solid"></eui-icon-gif>
<eui-icon-gif type="outline"></eui-icon-gif>
<eui-icon-gif type="mini"></eui-icon-gif>
<eui-icon-gif type="micro"></eui-icon-gif>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-gift</p>
<eui-icon-gift type="solid"></eui-icon-gift>
<eui-icon-gift type="outline"></eui-icon-gift>
<eui-icon-gift type="mini"></eui-icon-gift>
<eui-icon-gift type="micro"></eui-icon-gift>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-gift-top</p>
<eui-icon-gift-top type="solid"></eui-icon-gift-top>
<eui-icon-gift-top type="outline"></eui-icon-gift-top>
<eui-icon-gift-top type="mini"></eui-icon-gift-top>
<eui-icon-gift-top type="micro"></eui-icon-gift-top>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-globe-alt</p>
<eui-icon-globe-alt type="solid"></eui-icon-globe-alt>
<eui-icon-globe-alt type="outline"></eui-icon-globe-alt>
<eui-icon-globe-alt type="mini"></eui-icon-globe-alt>
<eui-icon-globe-alt type="micro"></eui-icon-globe-alt>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-globe-americas</p>
<eui-icon-globe-americas type="solid"></eui-icon-globe-americas>
<eui-icon-globe-americas type="outline"></eui-icon-globe-americas>
<eui-icon-globe-americas type="mini"></eui-icon-globe-americas>
<eui-icon-globe-americas type="micro"></eui-icon-globe-americas>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-globe-asia-australia</p>
<eui-icon-globe-asia-australia type="solid"></eui-icon-globe-asia-australia>
<eui-icon-globe-asia-australia type="outline"></eui-icon-globe-asia-australia>
<eui-icon-globe-asia-australia type="mini"></eui-icon-globe-asia-australia>
<eui-icon-globe-asia-australia type="micro"></eui-icon-globe-asia-australia>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-globe-europe-africa</p>
<eui-icon-globe-europe-africa type="solid"></eui-icon-globe-europe-africa>
<eui-icon-globe-europe-africa type="outline"></eui-icon-globe-europe-africa>
<eui-icon-globe-europe-africa type="mini"></eui-icon-globe-europe-africa>
<eui-icon-globe-europe-africa type="micro"></eui-icon-globe-europe-africa>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-h1</p>
<eui-icon-h1 type="solid"></eui-icon-h1>
<eui-icon-h1 type="outline"></eui-icon-h1>
<eui-icon-h1 type="mini"></eui-icon-h1>
<eui-icon-h1 type="micro"></eui-icon-h1>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-h2</p>
<eui-icon-h2 type="solid"></eui-icon-h2>
<eui-icon-h2 type="outline"></eui-icon-h2>
<eui-icon-h2 type="mini"></eui-icon-h2>
<eui-icon-h2 type="micro"></eui-icon-h2>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-h3</p>
<eui-icon-h3 type="solid"></eui-icon-h3>
<eui-icon-h3 type="outline"></eui-icon-h3>
<eui-icon-h3 type="mini"></eui-icon-h3>
<eui-icon-h3 type="micro"></eui-icon-h3>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-hand-raised</p>
<eui-icon-hand-raised type="solid"></eui-icon-hand-raised>
<eui-icon-hand-raised type="outline"></eui-icon-hand-raised>
<eui-icon-hand-raised type="mini"></eui-icon-hand-raised>
<eui-icon-hand-raised type="micro"></eui-icon-hand-raised>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-hand-thumb-down</p>
<eui-icon-hand-thumb-down type="solid"></eui-icon-hand-thumb-down>
<eui-icon-hand-thumb-down type="outline"></eui-icon-hand-thumb-down>
<eui-icon-hand-thumb-down type="mini"></eui-icon-hand-thumb-down>
<eui-icon-hand-thumb-down type="micro"></eui-icon-hand-thumb-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-hand-thumb-up</p>
<eui-icon-hand-thumb-up type="solid"></eui-icon-hand-thumb-up>
<eui-icon-hand-thumb-up type="outline"></eui-icon-hand-thumb-up>
<eui-icon-hand-thumb-up type="mini"></eui-icon-hand-thumb-up>
<eui-icon-hand-thumb-up type="micro"></eui-icon-hand-thumb-up>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-hashtag</p>
<eui-icon-hashtag type="solid"></eui-icon-hashtag>
<eui-icon-hashtag type="outline"></eui-icon-hashtag>
<eui-icon-hashtag type="mini"></eui-icon-hashtag>
<eui-icon-hashtag type="micro"></eui-icon-hashtag>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-heart</p>
<eui-icon-heart type="solid"></eui-icon-heart>
<eui-icon-heart type="outline"></eui-icon-heart>
<eui-icon-heart type="mini"></eui-icon-heart>
<eui-icon-heart type="micro"></eui-icon-heart>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-home</p>
<eui-icon-home type="solid"></eui-icon-home>
<eui-icon-home type="outline"></eui-icon-home>
<eui-icon-home type="mini"></eui-icon-home>
<eui-icon-home type="micro"></eui-icon-home>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-home-modern</p>
<eui-icon-home-modern type="solid"></eui-icon-home-modern>
<eui-icon-home-modern type="outline"></eui-icon-home-modern>
<eui-icon-home-modern type="mini"></eui-icon-home-modern>
<eui-icon-home-modern type="micro"></eui-icon-home-modern>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-identification</p>
<eui-icon-identification type="solid"></eui-icon-identification>
<eui-icon-identification type="outline"></eui-icon-identification>
<eui-icon-identification type="mini"></eui-icon-identification>
<eui-icon-identification type="micro"></eui-icon-identification>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-inbox</p>
<eui-icon-inbox type="solid"></eui-icon-inbox>
<eui-icon-inbox type="outline"></eui-icon-inbox>
<eui-icon-inbox type="mini"></eui-icon-inbox>
<eui-icon-inbox type="micro"></eui-icon-inbox>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-inbox-arrow-down</p>
<eui-icon-inbox-arrow-down type="solid"></eui-icon-inbox-arrow-down>
<eui-icon-inbox-arrow-down type="outline"></eui-icon-inbox-arrow-down>
<eui-icon-inbox-arrow-down type="mini"></eui-icon-inbox-arrow-down>
<eui-icon-inbox-arrow-down type="micro"></eui-icon-inbox-arrow-down>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-inbox-stack</p>
<eui-icon-inbox-stack type="solid"></eui-icon-inbox-stack>
<eui-icon-inbox-stack type="outline"></eui-icon-inbox-stack>
<eui-icon-inbox-stack type="mini"></eui-icon-inbox-stack>
<eui-icon-inbox-stack type="micro"></eui-icon-inbox-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-information-circle</p>
<eui-icon-information-circle type="solid"></eui-icon-information-circle>
<eui-icon-information-circle type="outline"></eui-icon-information-circle>
<eui-icon-information-circle type="mini"></eui-icon-information-circle>
<eui-icon-information-circle type="micro"></eui-icon-information-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-italic</p>
<eui-icon-italic type="solid"></eui-icon-italic>
<eui-icon-italic type="outline"></eui-icon-italic>
<eui-icon-italic type="mini"></eui-icon-italic>
<eui-icon-italic type="micro"></eui-icon-italic>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-key</p>
<eui-icon-key type="solid"></eui-icon-key>
<eui-icon-key type="outline"></eui-icon-key>
<eui-icon-key type="mini"></eui-icon-key>
<eui-icon-key type="micro"></eui-icon-key>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-language</p>
<eui-icon-language type="solid"></eui-icon-language>
<eui-icon-language type="outline"></eui-icon-language>
<eui-icon-language type="mini"></eui-icon-language>
<eui-icon-language type="micro"></eui-icon-language>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-lifebuoy</p>
<eui-icon-lifebuoy type="solid"></eui-icon-lifebuoy>
<eui-icon-lifebuoy type="outline"></eui-icon-lifebuoy>
<eui-icon-lifebuoy type="mini"></eui-icon-lifebuoy>
<eui-icon-lifebuoy type="micro"></eui-icon-lifebuoy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-light-bulb</p>
<eui-icon-light-bulb type="solid"></eui-icon-light-bulb>
<eui-icon-light-bulb type="outline"></eui-icon-light-bulb>
<eui-icon-light-bulb type="mini"></eui-icon-light-bulb>
<eui-icon-light-bulb type="micro"></eui-icon-light-bulb>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-link</p>
<eui-icon-link type="solid"></eui-icon-link>
<eui-icon-link type="outline"></eui-icon-link>
<eui-icon-link type="mini"></eui-icon-link>
<eui-icon-link type="micro"></eui-icon-link>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-link-slash</p>
<eui-icon-link-slash type="solid"></eui-icon-link-slash>
<eui-icon-link-slash type="outline"></eui-icon-link-slash>
<eui-icon-link-slash type="mini"></eui-icon-link-slash>
<eui-icon-link-slash type="micro"></eui-icon-link-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-list-bullet</p>
<eui-icon-list-bullet type="solid"></eui-icon-list-bullet>
<eui-icon-list-bullet type="outline"></eui-icon-list-bullet>
<eui-icon-list-bullet type="mini"></eui-icon-list-bullet>
<eui-icon-list-bullet type="micro"></eui-icon-list-bullet>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-lock-closed</p>
<eui-icon-lock-closed type="solid"></eui-icon-lock-closed>
<eui-icon-lock-closed type="outline"></eui-icon-lock-closed>
<eui-icon-lock-closed type="mini"></eui-icon-lock-closed>
<eui-icon-lock-closed type="micro"></eui-icon-lock-closed>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-lock-open</p>
<eui-icon-lock-open type="solid"></eui-icon-lock-open>
<eui-icon-lock-open type="outline"></eui-icon-lock-open>
<eui-icon-lock-open type="mini"></eui-icon-lock-open>
<eui-icon-lock-open type="micro"></eui-icon-lock-open>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-magnifying-glass</p>
<eui-icon-magnifying-glass type="solid"></eui-icon-magnifying-glass>
<eui-icon-magnifying-glass type="outline"></eui-icon-magnifying-glass>
<eui-icon-magnifying-glass type="mini"></eui-icon-magnifying-glass>
<eui-icon-magnifying-glass type="micro"></eui-icon-magnifying-glass>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-magnifying-glass-circle</p>
<eui-icon-magnifying-glass-circle type="solid"></eui-icon-magnifying-glass-circle>
<eui-icon-magnifying-glass-circle type="outline"></eui-icon-magnifying-glass-circle>
<eui-icon-magnifying-glass-circle type="mini"></eui-icon-magnifying-glass-circle>
<eui-icon-magnifying-glass-circle type="micro"></eui-icon-magnifying-glass-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-magnifying-glass-minus</p>
<eui-icon-magnifying-glass-minus type="solid"></eui-icon-magnifying-glass-minus>
<eui-icon-magnifying-glass-minus type="outline"></eui-icon-magnifying-glass-minus>
<eui-icon-magnifying-glass-minus type="mini"></eui-icon-magnifying-glass-minus>
<eui-icon-magnifying-glass-minus type="micro"></eui-icon-magnifying-glass-minus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-magnifying-glass-plus</p>
<eui-icon-magnifying-glass-plus type="solid"></eui-icon-magnifying-glass-plus>
<eui-icon-magnifying-glass-plus type="outline"></eui-icon-magnifying-glass-plus>
<eui-icon-magnifying-glass-plus type="mini"></eui-icon-magnifying-glass-plus>
<eui-icon-magnifying-glass-plus type="micro"></eui-icon-magnifying-glass-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-map</p>
<eui-icon-map type="solid"></eui-icon-map>
<eui-icon-map type="outline"></eui-icon-map>
<eui-icon-map type="mini"></eui-icon-map>
<eui-icon-map type="micro"></eui-icon-map>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-map-pin</p>
<eui-icon-map-pin type="solid"></eui-icon-map-pin>
<eui-icon-map-pin type="outline"></eui-icon-map-pin>
<eui-icon-map-pin type="mini"></eui-icon-map-pin>
<eui-icon-map-pin type="micro"></eui-icon-map-pin>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-megaphone</p>
<eui-icon-megaphone type="solid"></eui-icon-megaphone>
<eui-icon-megaphone type="outline"></eui-icon-megaphone>
<eui-icon-megaphone type="mini"></eui-icon-megaphone>
<eui-icon-megaphone type="micro"></eui-icon-megaphone>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-merge</p>
<eui-icon-merge type="solid"></eui-icon-merge>
<eui-icon-merge type="outline"></eui-icon-merge>
<eui-icon-merge type="mini"></eui-icon-merge>
<eui-icon-merge type="micro"></eui-icon-merge>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-microphone</p>
<eui-icon-microphone type="solid"></eui-icon-microphone>
<eui-icon-microphone type="outline"></eui-icon-microphone>
<eui-icon-microphone type="mini"></eui-icon-microphone>
<eui-icon-microphone type="micro"></eui-icon-microphone>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-minus</p>
<eui-icon-minus type="solid"></eui-icon-minus>
<eui-icon-minus type="outline"></eui-icon-minus>
<eui-icon-minus type="mini"></eui-icon-minus>
<eui-icon-minus type="micro"></eui-icon-minus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-minus-circle</p>
<eui-icon-minus-circle type="solid"></eui-icon-minus-circle>
<eui-icon-minus-circle type="outline"></eui-icon-minus-circle>
<eui-icon-minus-circle type="mini"></eui-icon-minus-circle>
<eui-icon-minus-circle type="micro"></eui-icon-minus-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-moon</p>
<eui-icon-moon type="solid"></eui-icon-moon>
<eui-icon-moon type="outline"></eui-icon-moon>
<eui-icon-moon type="mini"></eui-icon-moon>
<eui-icon-moon type="micro"></eui-icon-moon>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-musical-note</p>
<eui-icon-musical-note type="solid"></eui-icon-musical-note>
<eui-icon-musical-note type="outline"></eui-icon-musical-note>
<eui-icon-musical-note type="mini"></eui-icon-musical-note>
<eui-icon-musical-note type="micro"></eui-icon-musical-note>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-newspaper</p>
<eui-icon-newspaper type="solid"></eui-icon-newspaper>
<eui-icon-newspaper type="outline"></eui-icon-newspaper>
<eui-icon-newspaper type="mini"></eui-icon-newspaper>
<eui-icon-newspaper type="micro"></eui-icon-newspaper>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-no-symbol</p>
<eui-icon-no-symbol type="solid"></eui-icon-no-symbol>
<eui-icon-no-symbol type="outline"></eui-icon-no-symbol>
<eui-icon-no-symbol type="mini"></eui-icon-no-symbol>
<eui-icon-no-symbol type="micro"></eui-icon-no-symbol>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-numbered-list</p>
<eui-icon-numbered-list type="solid"></eui-icon-numbered-list>
<eui-icon-numbered-list type="outline"></eui-icon-numbered-list>
<eui-icon-numbered-list type="mini"></eui-icon-numbered-list>
<eui-icon-numbered-list type="micro"></eui-icon-numbered-list>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-paint-brush</p>
<eui-icon-paint-brush type="solid"></eui-icon-paint-brush>
<eui-icon-paint-brush type="outline"></eui-icon-paint-brush>
<eui-icon-paint-brush type="mini"></eui-icon-paint-brush>
<eui-icon-paint-brush type="micro"></eui-icon-paint-brush>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-paper-airplane</p>
<eui-icon-paper-airplane type="solid"></eui-icon-paper-airplane>
<eui-icon-paper-airplane type="outline"></eui-icon-paper-airplane>
<eui-icon-paper-airplane type="mini"></eui-icon-paper-airplane>
<eui-icon-paper-airplane type="micro"></eui-icon-paper-airplane>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-paper-clip</p>
<eui-icon-paper-clip type="solid"></eui-icon-paper-clip>
<eui-icon-paper-clip type="outline"></eui-icon-paper-clip>
<eui-icon-paper-clip type="mini"></eui-icon-paper-clip>
<eui-icon-paper-clip type="micro"></eui-icon-paper-clip>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-pause</p>
<eui-icon-pause type="solid"></eui-icon-pause>
<eui-icon-pause type="outline"></eui-icon-pause>
<eui-icon-pause type="mini"></eui-icon-pause>
<eui-icon-pause type="micro"></eui-icon-pause>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-pause-circle</p>
<eui-icon-pause-circle type="solid"></eui-icon-pause-circle>
<eui-icon-pause-circle type="outline"></eui-icon-pause-circle>
<eui-icon-pause-circle type="mini"></eui-icon-pause-circle>
<eui-icon-pause-circle type="micro"></eui-icon-pause-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-pencil</p>
<eui-icon-pencil type="solid"></eui-icon-pencil>
<eui-icon-pencil type="outline"></eui-icon-pencil>
<eui-icon-pencil type="mini"></eui-icon-pencil>
<eui-icon-pencil type="micro"></eui-icon-pencil>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-pencil-square</p>
<eui-icon-pencil-square type="solid"></eui-icon-pencil-square>
<eui-icon-pencil-square type="outline"></eui-icon-pencil-square>
<eui-icon-pencil-square type="mini"></eui-icon-pencil-square>
<eui-icon-pencil-square type="micro"></eui-icon-pencil-square>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-percent-badge</p>
<eui-icon-percent-badge type="solid"></eui-icon-percent-badge>
<eui-icon-percent-badge type="outline"></eui-icon-percent-badge>
<eui-icon-percent-badge type="mini"></eui-icon-percent-badge>
<eui-icon-percent-badge type="micro"></eui-icon-percent-badge>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-phone</p>
<eui-icon-phone type="solid"></eui-icon-phone>
<eui-icon-phone type="outline"></eui-icon-phone>
<eui-icon-phone type="mini"></eui-icon-phone>
<eui-icon-phone type="micro"></eui-icon-phone>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-phone-arrow-down-left</p>
<eui-icon-phone-arrow-down-left type="solid"></eui-icon-phone-arrow-down-left>
<eui-icon-phone-arrow-down-left type="outline"></eui-icon-phone-arrow-down-left>
<eui-icon-phone-arrow-down-left type="mini"></eui-icon-phone-arrow-down-left>
<eui-icon-phone-arrow-down-left type="micro"></eui-icon-phone-arrow-down-left>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-phone-arrow-up-right</p>
<eui-icon-phone-arrow-up-right type="solid"></eui-icon-phone-arrow-up-right>
<eui-icon-phone-arrow-up-right type="outline"></eui-icon-phone-arrow-up-right>
<eui-icon-phone-arrow-up-right type="mini"></eui-icon-phone-arrow-up-right>
<eui-icon-phone-arrow-up-right type="micro"></eui-icon-phone-arrow-up-right>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-phone-x-mark</p>
<eui-icon-phone-x-mark type="solid"></eui-icon-phone-x-mark>
<eui-icon-phone-x-mark type="outline"></eui-icon-phone-x-mark>
<eui-icon-phone-x-mark type="mini"></eui-icon-phone-x-mark>
<eui-icon-phone-x-mark type="micro"></eui-icon-phone-x-mark>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-photo</p>
<eui-icon-photo type="solid"></eui-icon-photo>
<eui-icon-photo type="outline"></eui-icon-photo>
<eui-icon-photo type="mini"></eui-icon-photo>
<eui-icon-photo type="micro"></eui-icon-photo>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-play</p>
<eui-icon-play type="solid"></eui-icon-play>
<eui-icon-play type="outline"></eui-icon-play>
<eui-icon-play type="mini"></eui-icon-play>
<eui-icon-play type="micro"></eui-icon-play>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-play-circle</p>
<eui-icon-play-circle type="solid"></eui-icon-play-circle>
<eui-icon-play-circle type="outline"></eui-icon-play-circle>
<eui-icon-play-circle type="mini"></eui-icon-play-circle>
<eui-icon-play-circle type="micro"></eui-icon-play-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-play-pause</p>
<eui-icon-play-pause type="solid"></eui-icon-play-pause>
<eui-icon-play-pause type="outline"></eui-icon-play-pause>
<eui-icon-play-pause type="mini"></eui-icon-play-pause>
<eui-icon-play-pause type="micro"></eui-icon-play-pause>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-plus</p>
<eui-icon-plus type="solid"></eui-icon-plus>
<eui-icon-plus type="outline"></eui-icon-plus>
<eui-icon-plus type="mini"></eui-icon-plus>
<eui-icon-plus type="micro"></eui-icon-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-plus-circle</p>
<eui-icon-plus-circle type="solid"></eui-icon-plus-circle>
<eui-icon-plus-circle type="outline"></eui-icon-plus-circle>
<eui-icon-plus-circle type="mini"></eui-icon-plus-circle>
<eui-icon-plus-circle type="micro"></eui-icon-plus-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-power</p>
<eui-icon-power type="solid"></eui-icon-power>
<eui-icon-power type="outline"></eui-icon-power>
<eui-icon-power type="mini"></eui-icon-power>
<eui-icon-power type="micro"></eui-icon-power>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-presentation-chart-bar</p>
<eui-icon-presentation-chart-bar type="solid"></eui-icon-presentation-chart-bar>
<eui-icon-presentation-chart-bar type="outline"></eui-icon-presentation-chart-bar>
<eui-icon-presentation-chart-bar type="mini"></eui-icon-presentation-chart-bar>
<eui-icon-presentation-chart-bar type="micro"></eui-icon-presentation-chart-bar>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-presentation-chart-line</p>
<eui-icon-presentation-chart-line type="solid"></eui-icon-presentation-chart-line>
<eui-icon-presentation-chart-line type="outline"></eui-icon-presentation-chart-line>
<eui-icon-presentation-chart-line type="mini"></eui-icon-presentation-chart-line>
<eui-icon-presentation-chart-line type="micro"></eui-icon-presentation-chart-line>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-printer</p>
<eui-icon-printer type="solid"></eui-icon-printer>
<eui-icon-printer type="outline"></eui-icon-printer>
<eui-icon-printer type="mini"></eui-icon-printer>
<eui-icon-printer type="micro"></eui-icon-printer>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-puzzle-piece</p>
<eui-icon-puzzle-piece type="solid"></eui-icon-puzzle-piece>
<eui-icon-puzzle-piece type="outline"></eui-icon-puzzle-piece>
<eui-icon-puzzle-piece type="mini"></eui-icon-puzzle-piece>
<eui-icon-puzzle-piece type="micro"></eui-icon-puzzle-piece>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-qr-code</p>
<eui-icon-qr-code type="solid"></eui-icon-qr-code>
<eui-icon-qr-code type="outline"></eui-icon-qr-code>
<eui-icon-qr-code type="mini"></eui-icon-qr-code>
<eui-icon-qr-code type="micro"></eui-icon-qr-code>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-question-mark-circle</p>
<eui-icon-question-mark-circle type="solid"></eui-icon-question-mark-circle>
<eui-icon-question-mark-circle type="outline"></eui-icon-question-mark-circle>
<eui-icon-question-mark-circle type="mini"></eui-icon-question-mark-circle>
<eui-icon-question-mark-circle type="micro"></eui-icon-question-mark-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-queue-list</p>
<eui-icon-queue-list type="solid"></eui-icon-queue-list>
<eui-icon-queue-list type="outline"></eui-icon-queue-list>
<eui-icon-queue-list type="mini"></eui-icon-queue-list>
<eui-icon-queue-list type="micro"></eui-icon-queue-list>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-radio</p>
<eui-icon-radio type="solid"></eui-icon-radio>
<eui-icon-radio type="outline"></eui-icon-radio>
<eui-icon-radio type="mini"></eui-icon-radio>
<eui-icon-radio type="micro"></eui-icon-radio>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-receipt-percent</p>
<eui-icon-receipt-percent type="solid"></eui-icon-receipt-percent>
<eui-icon-receipt-percent type="outline"></eui-icon-receipt-percent>
<eui-icon-receipt-percent type="mini"></eui-icon-receipt-percent>
<eui-icon-receipt-percent type="micro"></eui-icon-receipt-percent>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-receipt-refund</p>
<eui-icon-receipt-refund type="solid"></eui-icon-receipt-refund>
<eui-icon-receipt-refund type="outline"></eui-icon-receipt-refund>
<eui-icon-receipt-refund type="mini"></eui-icon-receipt-refund>
<eui-icon-receipt-refund type="micro"></eui-icon-receipt-refund>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-rectangle-group</p>
<eui-icon-rectangle-group type="solid"></eui-icon-rectangle-group>
<eui-icon-rectangle-group type="outline"></eui-icon-rectangle-group>
<eui-icon-rectangle-group type="mini"></eui-icon-rectangle-group>
<eui-icon-rectangle-group type="micro"></eui-icon-rectangle-group>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-rectangle-stack</p>
<eui-icon-rectangle-stack type="solid"></eui-icon-rectangle-stack>
<eui-icon-rectangle-stack type="outline"></eui-icon-rectangle-stack>
<eui-icon-rectangle-stack type="mini"></eui-icon-rectangle-stack>
<eui-icon-rectangle-stack type="micro"></eui-icon-rectangle-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-rocket-launch</p>
<eui-icon-rocket-launch type="solid"></eui-icon-rocket-launch>
<eui-icon-rocket-launch type="outline"></eui-icon-rocket-launch>
<eui-icon-rocket-launch type="mini"></eui-icon-rocket-launch>
<eui-icon-rocket-launch type="micro"></eui-icon-rocket-launch>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-rss</p>
<eui-icon-rss type="solid"></eui-icon-rss>
<eui-icon-rss type="outline"></eui-icon-rss>
<eui-icon-rss type="mini"></eui-icon-rss>
<eui-icon-rss type="micro"></eui-icon-rss>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-scale</p>
<eui-icon-scale type="solid"></eui-icon-scale>
<eui-icon-scale type="outline"></eui-icon-scale>
<eui-icon-scale type="mini"></eui-icon-scale>
<eui-icon-scale type="micro"></eui-icon-scale>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-scissors</p>
<eui-icon-scissors type="solid"></eui-icon-scissors>
<eui-icon-scissors type="outline"></eui-icon-scissors>
<eui-icon-scissors type="mini"></eui-icon-scissors>
<eui-icon-scissors type="micro"></eui-icon-scissors>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-server</p>
<eui-icon-server type="solid"></eui-icon-server>
<eui-icon-server type="outline"></eui-icon-server>
<eui-icon-server type="mini"></eui-icon-server>
<eui-icon-server type="micro"></eui-icon-server>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-server-stack</p>
<eui-icon-server-stack type="solid"></eui-icon-server-stack>
<eui-icon-server-stack type="outline"></eui-icon-server-stack>
<eui-icon-server-stack type="mini"></eui-icon-server-stack>
<eui-icon-server-stack type="micro"></eui-icon-server-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-share</p>
<eui-icon-share type="solid"></eui-icon-share>
<eui-icon-share type="outline"></eui-icon-share>
<eui-icon-share type="mini"></eui-icon-share>
<eui-icon-share type="micro"></eui-icon-share>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-shield-check</p>
<eui-icon-shield-check type="solid"></eui-icon-shield-check>
<eui-icon-shield-check type="outline"></eui-icon-shield-check>
<eui-icon-shield-check type="mini"></eui-icon-shield-check>
<eui-icon-shield-check type="micro"></eui-icon-shield-check>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-shield-exclamation</p>
<eui-icon-shield-exclamation type="solid"></eui-icon-shield-exclamation>
<eui-icon-shield-exclamation type="outline"></eui-icon-shield-exclamation>
<eui-icon-shield-exclamation type="mini"></eui-icon-shield-exclamation>
<eui-icon-shield-exclamation type="micro"></eui-icon-shield-exclamation>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-shopping-bag</p>
<eui-icon-shopping-bag type="solid"></eui-icon-shopping-bag>
<eui-icon-shopping-bag type="outline"></eui-icon-shopping-bag>
<eui-icon-shopping-bag type="mini"></eui-icon-shopping-bag>
<eui-icon-shopping-bag type="micro"></eui-icon-shopping-bag>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-shopping-cart</p>
<eui-icon-shopping-cart type="solid"></eui-icon-shopping-cart>
<eui-icon-shopping-cart type="outline"></eui-icon-shopping-cart>
<eui-icon-shopping-cart type="mini"></eui-icon-shopping-cart>
<eui-icon-shopping-cart type="micro"></eui-icon-shopping-cart>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-signal</p>
<eui-icon-signal type="solid"></eui-icon-signal>
<eui-icon-signal type="outline"></eui-icon-signal>
<eui-icon-signal type="mini"></eui-icon-signal>
<eui-icon-signal type="micro"></eui-icon-signal>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-signal-slash</p>
<eui-icon-signal-slash type="solid"></eui-icon-signal-slash>
<eui-icon-signal-slash type="outline"></eui-icon-signal-slash>
<eui-icon-signal-slash type="mini"></eui-icon-signal-slash>
<eui-icon-signal-slash type="micro"></eui-icon-signal-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-slash</p>
<eui-icon-slash type="solid"></eui-icon-slash>
<eui-icon-slash type="outline"></eui-icon-slash>
<eui-icon-slash type="mini"></eui-icon-slash>
<eui-icon-slash type="micro"></eui-icon-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-sparkles</p>
<eui-icon-sparkles type="solid"></eui-icon-sparkles>
<eui-icon-sparkles type="outline"></eui-icon-sparkles>
<eui-icon-sparkles type="mini"></eui-icon-sparkles>
<eui-icon-sparkles type="micro"></eui-icon-sparkles>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-speaker-wave</p>
<eui-icon-speaker-wave type="solid"></eui-icon-speaker-wave>
<eui-icon-speaker-wave type="outline"></eui-icon-speaker-wave>
<eui-icon-speaker-wave type="mini"></eui-icon-speaker-wave>
<eui-icon-speaker-wave type="micro"></eui-icon-speaker-wave>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-speaker-x-mark</p>
<eui-icon-speaker-x-mark type="solid"></eui-icon-speaker-x-mark>
<eui-icon-speaker-x-mark type="outline"></eui-icon-speaker-x-mark>
<eui-icon-speaker-x-mark type="mini"></eui-icon-speaker-x-mark>
<eui-icon-speaker-x-mark type="micro"></eui-icon-speaker-x-mark>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-square-2-stack</p>
<eui-icon-square-2-stack type="solid"></eui-icon-square-2-stack>
<eui-icon-square-2-stack type="outline"></eui-icon-square-2-stack>
<eui-icon-square-2-stack type="mini"></eui-icon-square-2-stack>
<eui-icon-square-2-stack type="micro"></eui-icon-square-2-stack>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-square-2-stack-outline</p>
<eui-icon-square-2-stack-outline type="solid"></eui-icon-square-2-stack-outline>
<eui-icon-square-2-stack-outline type="outline"></eui-icon-square-2-stack-outline>
<eui-icon-square-2-stack-outline type="mini"></eui-icon-square-2-stack-outline>
<eui-icon-square-2-stack-outline type="micro"></eui-icon-square-2-stack-outline>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-square-3-stack-3d</p>
<eui-icon-square-3-stack-3d type="solid"></eui-icon-square-3-stack-3d>
<eui-icon-square-3-stack-3d type="outline"></eui-icon-square-3-stack-3d>
<eui-icon-square-3-stack-3d type="mini"></eui-icon-square-3-stack-3d>
<eui-icon-square-3-stack-3d type="micro"></eui-icon-square-3-stack-3d>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-squares-2x2</p>
<eui-icon-squares-2x2 type="solid"></eui-icon-squares-2x2>
<eui-icon-squares-2x2 type="outline"></eui-icon-squares-2x2>
<eui-icon-squares-2x2 type="mini"></eui-icon-squares-2x2>
<eui-icon-squares-2x2 type="micro"></eui-icon-squares-2x2>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-squares-plus</p>
<eui-icon-squares-plus type="solid"></eui-icon-squares-plus>
<eui-icon-squares-plus type="outline"></eui-icon-squares-plus>
<eui-icon-squares-plus type="mini"></eui-icon-squares-plus>
<eui-icon-squares-plus type="micro"></eui-icon-squares-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-star</p>
<eui-icon-star type="solid"></eui-icon-star>
<eui-icon-star type="outline"></eui-icon-star>
<eui-icon-star type="mini"></eui-icon-star>
<eui-icon-star type="micro"></eui-icon-star>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-stop</p>
<eui-icon-stop type="solid"></eui-icon-stop>
<eui-icon-stop type="outline"></eui-icon-stop>
<eui-icon-stop type="mini"></eui-icon-stop>
<eui-icon-stop type="micro"></eui-icon-stop>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-stop-circle</p>
<eui-icon-stop-circle type="solid"></eui-icon-stop-circle>
<eui-icon-stop-circle type="outline"></eui-icon-stop-circle>
<eui-icon-stop-circle type="mini"></eui-icon-stop-circle>
<eui-icon-stop-circle type="micro"></eui-icon-stop-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-sun</p>
<eui-icon-sun type="solid"></eui-icon-sun>
<eui-icon-sun type="outline"></eui-icon-sun>
<eui-icon-sun type="mini"></eui-icon-sun>
<eui-icon-sun type="micro"></eui-icon-sun>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-swatch</p>
<eui-icon-swatch type="solid"></eui-icon-swatch>
<eui-icon-swatch type="outline"></eui-icon-swatch>
<eui-icon-swatch type="mini"></eui-icon-swatch>
<eui-icon-swatch type="micro"></eui-icon-swatch>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-table-cells</p>
<eui-icon-table-cells type="solid"></eui-icon-table-cells>
<eui-icon-table-cells type="outline"></eui-icon-table-cells>
<eui-icon-table-cells type="mini"></eui-icon-table-cells>
<eui-icon-table-cells type="micro"></eui-icon-table-cells>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-tag</p>
<eui-icon-tag type="solid"></eui-icon-tag>
<eui-icon-tag type="outline"></eui-icon-tag>
<eui-icon-tag type="mini"></eui-icon-tag>
<eui-icon-tag type="micro"></eui-icon-tag>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-third-spinner</p>
<eui-icon-third-spinner type="solid"></eui-icon-third-spinner>
<eui-icon-third-spinner type="outline"></eui-icon-third-spinner>
<eui-icon-third-spinner type="mini"></eui-icon-third-spinner>
<eui-icon-third-spinner type="micro"></eui-icon-third-spinner>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-ticket</p>
<eui-icon-ticket type="solid"></eui-icon-ticket>
<eui-icon-ticket type="outline"></eui-icon-ticket>
<eui-icon-ticket type="mini"></eui-icon-ticket>
<eui-icon-ticket type="micro"></eui-icon-ticket>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-trash</p>
<eui-icon-trash type="solid"></eui-icon-trash>
<eui-icon-trash type="outline"></eui-icon-trash>
<eui-icon-trash type="mini"></eui-icon-trash>
<eui-icon-trash type="micro"></eui-icon-trash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-trophy</p>
<eui-icon-trophy type="solid"></eui-icon-trophy>
<eui-icon-trophy type="outline"></eui-icon-trophy>
<eui-icon-trophy type="mini"></eui-icon-trophy>
<eui-icon-trophy type="micro"></eui-icon-trophy>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-truck</p>
<eui-icon-truck type="solid"></eui-icon-truck>
<eui-icon-truck type="outline"></eui-icon-truck>
<eui-icon-truck type="mini"></eui-icon-truck>
<eui-icon-truck type="micro"></eui-icon-truck>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-tv</p>
<eui-icon-tv type="solid"></eui-icon-tv>
<eui-icon-tv type="outline"></eui-icon-tv>
<eui-icon-tv type="mini"></eui-icon-tv>
<eui-icon-tv type="micro"></eui-icon-tv>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-underline</p>
<eui-icon-underline type="solid"></eui-icon-underline>
<eui-icon-underline type="outline"></eui-icon-underline>
<eui-icon-underline type="mini"></eui-icon-underline>
<eui-icon-underline type="micro"></eui-icon-underline>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-user</p>
<eui-icon-user type="solid"></eui-icon-user>
<eui-icon-user type="outline"></eui-icon-user>
<eui-icon-user type="mini"></eui-icon-user>
<eui-icon-user type="micro"></eui-icon-user>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-user-circle</p>
<eui-icon-user-circle type="solid"></eui-icon-user-circle>
<eui-icon-user-circle type="outline"></eui-icon-user-circle>
<eui-icon-user-circle type="mini"></eui-icon-user-circle>
<eui-icon-user-circle type="micro"></eui-icon-user-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-user-group</p>
<eui-icon-user-group type="solid"></eui-icon-user-group>
<eui-icon-user-group type="outline"></eui-icon-user-group>
<eui-icon-user-group type="mini"></eui-icon-user-group>
<eui-icon-user-group type="micro"></eui-icon-user-group>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-user-minus</p>
<eui-icon-user-minus type="solid"></eui-icon-user-minus>
<eui-icon-user-minus type="outline"></eui-icon-user-minus>
<eui-icon-user-minus type="mini"></eui-icon-user-minus>
<eui-icon-user-minus type="micro"></eui-icon-user-minus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-user-plus</p>
<eui-icon-user-plus type="solid"></eui-icon-user-plus>
<eui-icon-user-plus type="outline"></eui-icon-user-plus>
<eui-icon-user-plus type="mini"></eui-icon-user-plus>
<eui-icon-user-plus type="micro"></eui-icon-user-plus>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-users</p>
<eui-icon-users type="solid"></eui-icon-users>
<eui-icon-users type="outline"></eui-icon-users>
<eui-icon-users type="mini"></eui-icon-users>
<eui-icon-users type="micro"></eui-icon-users>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-variable</p>
<eui-icon-variable type="solid"></eui-icon-variable>
<eui-icon-variable type="outline"></eui-icon-variable>
<eui-icon-variable type="mini"></eui-icon-variable>
<eui-icon-variable type="micro"></eui-icon-variable>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-video-camera</p>
<eui-icon-video-camera type="solid"></eui-icon-video-camera>
<eui-icon-video-camera type="outline"></eui-icon-video-camera>
<eui-icon-video-camera type="mini"></eui-icon-video-camera>
<eui-icon-video-camera type="micro"></eui-icon-video-camera>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-video-camera-slash</p>
<eui-icon-video-camera-slash type="solid"></eui-icon-video-camera-slash>
<eui-icon-video-camera-slash type="outline"></eui-icon-video-camera-slash>
<eui-icon-video-camera-slash type="mini"></eui-icon-video-camera-slash>
<eui-icon-video-camera-slash type="micro"></eui-icon-video-camera-slash>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-view-columns</p>
<eui-icon-view-columns type="solid"></eui-icon-view-columns>
<eui-icon-view-columns type="outline"></eui-icon-view-columns>
<eui-icon-view-columns type="mini"></eui-icon-view-columns>
<eui-icon-view-columns type="micro"></eui-icon-view-columns>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-viewfinder-circle</p>
<eui-icon-viewfinder-circle type="solid"></eui-icon-viewfinder-circle>
<eui-icon-viewfinder-circle type="outline"></eui-icon-viewfinder-circle>
<eui-icon-viewfinder-circle type="mini"></eui-icon-viewfinder-circle>
<eui-icon-viewfinder-circle type="micro"></eui-icon-viewfinder-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-wallet</p>
<eui-icon-wallet type="solid"></eui-icon-wallet>
<eui-icon-wallet type="outline"></eui-icon-wallet>
<eui-icon-wallet type="mini"></eui-icon-wallet>
<eui-icon-wallet type="micro"></eui-icon-wallet>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-wifi</p>
<eui-icon-wifi type="solid"></eui-icon-wifi>
<eui-icon-wifi type="outline"></eui-icon-wifi>
<eui-icon-wifi type="mini"></eui-icon-wifi>
<eui-icon-wifi type="micro"></eui-icon-wifi>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-window</p>
<eui-icon-window type="solid"></eui-icon-window>
<eui-icon-window type="outline"></eui-icon-window>
<eui-icon-window type="mini"></eui-icon-window>
<eui-icon-window type="micro"></eui-icon-window>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-wrench</p>
<eui-icon-wrench type="solid"></eui-icon-wrench>
<eui-icon-wrench type="outline"></eui-icon-wrench>
<eui-icon-wrench type="mini"></eui-icon-wrench>
<eui-icon-wrench type="micro"></eui-icon-wrench>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-wrench-screwdriver</p>
<eui-icon-wrench-screwdriver type="solid"></eui-icon-wrench-screwdriver>
<eui-icon-wrench-screwdriver type="outline"></eui-icon-wrench-screwdriver>
<eui-icon-wrench-screwdriver type="mini"></eui-icon-wrench-screwdriver>
<eui-icon-wrench-screwdriver type="micro"></eui-icon-wrench-screwdriver>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-x-circle</p>
<eui-icon-x-circle type="solid"></eui-icon-x-circle>
<eui-icon-x-circle type="outline"></eui-icon-x-circle>
<eui-icon-x-circle type="mini"></eui-icon-x-circle>
<eui-icon-x-circle type="micro"></eui-icon-x-circle>
</span>
<span class="icon-row flex">
<p class="icon-name">eui-icon-x-mark</p>
<eui-icon-x-mark type="solid"></eui-icon-x-mark>
<eui-icon-x-mark type="outline"></eui-icon-x-mark>
<eui-icon-x-mark type="mini"></eui-icon-x-mark>
<eui-icon-x-mark type="micro"></eui-icon-x-mark>
</span>



    </div>
    `
})
export class IconComponent { }