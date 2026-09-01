import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { fakeProduct } from "./fakeData.const";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <!-- classic -->
      <span class="flex">
        <h4 class="title">Card vertical (default) - classic</h4>
        <eui-card id="one" img="/sample_image.png">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- belt -->
      <span class="flex">
        <h4 class="title">Card vertical - classic</h4>
        <eui-card id="one" img="/sample_image.png"  mode="belt">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- lollipop -->
      <span class="flex">
        <h4 class="title">Card vertical - classic</h4>
        <eui-card id="one" img="/sample_image.png"  mode="lollipop">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- gem -->
      <span class="flex">
        <h4 class="title">Card vertical - classic</h4>
        <eui-card id="one" img="/sample_image.png"  mode="gem">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- flag -->
      <span class="flex">
        <h4 class="title">Card vertical - classic</h4>
        <eui-card id="one" img="/sample_image.png"  mode="flag">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- classic -->
      <span class="flex">
        <h4 class="title">Card horizontal (default) - classic</h4>
        <eui-card id="one" img="/sample_image.png" orientation="horizontal">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- belt -->
      <span class="flex">
        <h4 class="title">Card horizontal - belt</h4>
        <eui-card id="one" img="/sample_image.png"  orientation="horizontal" mode="belt">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- lollipop -->
      <span class="flex">
        <h4 class="title">Card horizontal - lollipop</h4>
        <eui-card id="one" img="/sample_image.png"  orientation="horizontal" mode="lollipop">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- gem -->
      <span class="flex">
        <h4 class="title">Card horizontal - gem</h4>
        <eui-card id="one" img="/sample_image.png"  orientation="horizontal" mode="gem">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
      <!-- flag -->
      <span class="flex">
        <h4 class="title">Card horizontal - flag</h4>
        <eui-card id="one" img="/sample_image.png"  orientation="horizontal" mode="flag">
        
          <span class="content">
            <Span class="quote">“nop is the best op”</Span>
            <Span class="person">— Amirhosein Mrdani Ch.</Span>
            <Span class="title">Founder of ILECY, the best project of all time.</Span>
          </span>
        </eui-card>
      </span>
    </div>
    `
})
export class CardComponent { }
