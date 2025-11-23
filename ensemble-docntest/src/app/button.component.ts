import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    template: `
    <div class="doc">
        <span class="flex">
        <h4 class="title">primary - normal buttons:</h4>
        <eui-button size='sm' variant='primary'>Small Primary</eui-button>
        <eui-button size='md' variant='primary'>Medium Primary</eui-button>
        <eui-button size='lg' variant='primary'>large Primary</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">success - normal buttons:</h4>
        <eui-button size='sm' variant='success'>Small success</eui-button>
        <eui-button size='md' variant='success'>Medium success</eui-button>
        <eui-button size='lg' variant='success'>large success</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">warning - normal buttons:</h4>
        <eui-button size='sm' variant='warning'>Small warning</eui-button>
        <eui-button size='md' variant='warning'>Medium warning</eui-button>
        <eui-button size='lg' variant='warning'>large warning</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">danger - normal buttons:</h4>
        <eui-button size='sm' variant='danger'>Small danger</eui-button>
        <eui-button size='md' variant='danger'>Medium danger</eui-button>
        <eui-button size='lg' variant='danger'>large danger</eui-button>
          </span>
          <span class="divider"></span>
          <span class="flex">
        <h4 class="title">primary - outline buttons:</h4>
        <eui-button mode='outline' size='sm' variant='primary'>Small Primary</eui-button>
        <eui-button mode='outline' size='md' variant='primary'>Medium Primary</eui-button>
        <eui-button mode='outline' size='lg' variant='primary'>large Primary</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">success - outline buttons:</h4>
        <eui-button mode='outline' size='sm' variant='success'>Small success</eui-button>
        <eui-button mode='outline' size='md' variant='success'>Medium success</eui-button>
        <eui-button mode='outline' size='lg' variant='success'>large success</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">warning - outline buttons:</h4>
        <eui-button mode='outline' size='sm' variant='warning'>Small warning</eui-button>
        <eui-button mode='outline' size='md' variant='warning'>Medium warning</eui-button>
        <eui-button mode='outline' size='lg' variant='warning'>large warning</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">danger - outline buttons:</h4>
        <eui-button mode='outline' size='sm' variant='danger'>Small danger</eui-button>
        <eui-button mode='outline' size='md' variant='danger'>Medium danger</eui-button>
        <eui-button mode='outline' size='lg' variant='danger'>large danger</eui-button>
          </span>
          <span class="divider"></span>
          <span class="flex">
        <h4 class="title">primary - text-button buttons:</h4>
        <eui-button mode='text-button' size='sm' variant='primary'>Small Primary</eui-button>
        <eui-button mode='text-button' size='md' variant='primary'>Medium Primary</eui-button>
        <eui-button mode='text-button' size='lg' variant='primary'>large Primary</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">success - text-button buttons:</h4>
        <eui-button mode='text-button' size='sm' variant='success'>Small success</eui-button>
        <eui-button mode='text-button' size='md' variant='success'>Medium success</eui-button>
        <eui-button mode='text-button' size='lg' variant='success'>large success</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">warning - text-button buttons:</h4>
        <eui-button mode='text-button' size='sm' variant='warning'>Small warning</eui-button>
        <eui-button mode='text-button' size='md' variant='warning'>Medium warning</eui-button>
        <eui-button mode='text-button' size='lg' variant='warning'>large warning</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">danger - text-button buttons:</h4>
        <eui-button mode='text-button' size='sm' variant='danger'>Small danger</eui-button>
        <eui-button mode='text-button' size='md' variant='danger'>Medium danger</eui-button>
        <eui-button mode='text-button' size='lg' variant='danger'>large danger</eui-button>
          </span>
          <span class="divider"></span>
          <span class="flex">
        <h4 class="title">primary - text-button buttons:</h4>
        <eui-button disabled="true">Small Primary</eui-button>
        <eui-button disabled="true">Medium Primary</eui-button>
        <eui-button disabled="true">large Primary</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">success - text-button buttons:</h4>
        <eui-button disabled="true">Small success</eui-button>
        <eui-button disabled="true">Medium success</eui-button>
        <eui-button disabled="true">large success</eui-button>
          </span>
          <span class="flex">
        <h4 class="title">neutral buttons:</h4>
        <eui-button variant='neutral'>Small success</eui-button>
        <eui-button variant='neutral'>Medium success</eui-button>
        <eui-button variant='neutral'>large success</eui-button>
          </span>
    </div>
    `
})
export class ButtonComponent { }
