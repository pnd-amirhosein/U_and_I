import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
            <h4 class="title">empty state:</h4>
            <eui-empty-state icon="x-mark"
            primaryAction="Create new chat"
            secondaryAction="join existing chats" 
            (primaryClick)="test()"
            (secondaryClick)="test()">
                <span>It’s lonely here...</span>
            </eui-empty-state>
        </span>
    </div>
    `
})
export class EmptyStateComponent {

    test = () => {
        console.log("Test is clicked!");

    }

}
