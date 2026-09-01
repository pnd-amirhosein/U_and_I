import { Component } from "@angular/core";
import { EuiBreadcrumb } from "ensemble-ui/angular";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    imports: [EuiBreadcrumb],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Toggle - disabled:</h4>
               <eui-breadcrumb [data]="data"/>
        </span>
    </div>
    `
})
export class BreadcrumbComponent {

    data: BreadcrumbData[] = [
        {
            id: 1,
            title: "Academy",
            action: () => {
                console.log(12);
            },
            icon: "academic-cap"
        },
        {
            id: 2,
            title: "adjustments-horizontal",
            action: () => {
                console.log(13);
            },
            icon: "adjustments-horizontal"
        },
    ];



}

export interface BreadcrumbData {
    id: number
    icon?: string;
    title: string;
    action?: () => void;
}