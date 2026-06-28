import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">Toggle - disabled:</h4>
             <eui-tree collapse [data]="data"/>
        </span>
    </div>
    `
})
export class TreeComponent {

    test = () => {
        console.log("Test is clicked!");

    }

    data: TreeData[] = [

        {
            id: "dashboard",
            Title: "Dashboard",
            Action: () => console.log("Dashboard")
        },

        {
            id: "projects",
            Title: "Projects",

            Children: [

                {
                    id: "frontend",
                    Title: "Frontend",

                    Children: [

                        {
                            id: "react",
                            Title: "React",
                            Action: () => console.log("React")
                        },

                        {
                            id: "stencil",
                            Title: "Stencil",
                            Action: () => console.log("Stencil")
                        }

                    ]

                },

                {
                    id: "backend",
                    Title: "Backend",
                    Action: () => console.log("Backend")
                }

            ]

        },

        {
            id: "settings",
            Title: "Settings",
            Action: () => console.log("Settings")
        }

    ]

}

export interface TreeData {
    id?: string;
    Title: string;
    Action?: () => void;
    Children?: TreeData[];
}