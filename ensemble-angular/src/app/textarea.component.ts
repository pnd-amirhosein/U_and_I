import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { EuiTextarea } from "ensemble-ui/angular";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  imports: [EuiTextarea],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex">
        <h4 class="title">Simple Input</h4>
        <eui-textarea styleValue="width:25vw;" placeHolder="simple input"/>
      </span>
    </div>
    `
})
export class TextareaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    console.log("ksjhfdksdkj");

    var el = getComputedStyle(document.documentElement).fontSize
    console.log(el);
    if (el)
      console.log("LOGGGGG", el
        // getComputedStyle(el)
        //   .getPropertyValue('--space-5xl')
      )
  }

  sell = "1"
  checkMate(e: any): boolean {

    if (!e) return true
    else return false

  }
}
