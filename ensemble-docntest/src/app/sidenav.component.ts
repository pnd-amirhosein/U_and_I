import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  template: `
    <div class="doc">
      <span class="flex flex-col">
        <h4 class="title w-80 justify-start flex">Side nav - full - center:</h4>
       <span class="side-nav-holder">
        <eui-side-nav>
          <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">Home</span>
            </div>
          </div>
          <div slot="middle">
             <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">Search</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">Explore</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">Cart</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">Wallet</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
              <eui-icon style="width:24px;" name="power" />
              <span class="text">Sign out</span>
            </div>
          </div>
        </eui-side-nav>
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
      </span>
    </span>
    <span class="flex flex-col">
      <h4 class="title w-80 justify-start flex">Side nav - full - top:</h4>
       <span class="side-nav-holder">
        <eui-side-nav mode="start">
          <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">Home</span>
            </div>
          </div>
          <div slot="middle">
             <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">Search</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">Explore</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">Cart</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">Wallet</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
              <eui-icon style="width:24px;" name="power" />
              <span class="text">Sign out</span>
            </div>
          </div>
        </eui-side-nav>
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
      </span>
    </span>
    <span class="flex flex-col">
      <h4 class="title w-80 justify-start flex">Side nav - compact - top:</h4>
       <span class="side-nav-holder">
        <eui-side-nav size="compact">
          <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">Home</span>
            </div>
          </div>
          <div slot="middle">
             <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">Search</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">Explore</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">Cart</span>
            </div>
             <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">Wallet</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
              <eui-icon style="width:24px;" name="power" />
              <span class="text">Sign out</span>
            </div>
          </div>
        </eui-side-nav>
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
      </span>
    </span>
      <span class="flex flex-col">
        <h4 class="title w-80 justify-start flex">Side nav - full - center - rtl:</h4>
       <span class="side-nav-holder">
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
        <eui-side-nav direction="rtl">
          <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">خانه</span>
            </div>
          </div>
          <div slot="middle">
            <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">جستجو</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">اکسپلور</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">سبد خرید</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">کیف پول</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
                <eui-icon style="width:24px;" name="power" />
                <span class="text">خروج</span>
              </div>
          </div>
        </eui-side-nav>
      </span>
    </span>
    <span class="flex flex-col">
      <h4 class="title w-80 justify-start flex">Side nav - full - top:</h4>
       <span class="side-nav-holder">
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
                <eui-side-nav mode="start" direction="rtl">
          <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">خانه</span>
            </div>
          </div>
          <div slot="middle">
            <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">جستجو</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">اکسپلور</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">سبد خرید</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">کیف پول</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
                <eui-icon style="width:24px;" name="power" />
                <span class="text">خروج</span>
              </div>
          </div>
        </eui-side-nav>
      </span>
    </span>
    <span class="flex flex-col">
      <h4 class="title w-80 justify-start flex">Side nav - compact - top:</h4>
       <span class="side-nav-holder">
        <div class="simulator flex">
          <div class="header flex">
            <span class="user flex">
              <eui-icon name="user-circle" type="outline"/>
              <div class="welcome">Hi, Amirhosein!</div>
            </span>
            <div class="welcome">Your wallet: 22.18$</div>
          </div>
          <div class="body">
            <span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input placeHolder="simple input"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
              <span><eui-input placeHolder="enter password" type="password"/></span>
              <span><eui-input type="number" placeHolder="simple input"/></span>
                <span class="checkbox-boy"><eui-checkbox
                states='["null" , "false" , "partial" , "true"]'
                size="lg"
                mode="outline"
              ></eui-checkbox>
              Include wallet</span>
            </span>
            <span>
              <eui-button mode='outline' size='md' variant='primary'>Order</eui-button>
            </span>
          </div>
        </div>
        <eui-side-nav size="compact" direction="rtl">
                    <div slot="top">
            <div class="item">
              <eui-icon style="width:24px;" name="home" />
              <span class="text">خانه</span>
            </div>
          </div>
          <div slot="middle">
            <div class="item">
              <eui-icon style="width:24px;" name="magnifying-glass" />
              <span class="text">جستجو</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="globe-americas" />
              <span class="text">اکسپلور</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="shopping-cart" />
              <span class="text">سبد خرید</span>
            </div>
            <div class="item">
              <eui-icon style="width:24px;" name="wallet" />
              <span class="text">کیف پول</span>
            </div>
          </div>
          <div slot="bottom">
              <div class="item">
                <eui-icon style="width:24px;" name="power" />
                <span class="text">خروج</span>
              </div>
          </div>
        </eui-side-nav>
      </span>
    </span>
  </div>
    `
})
export class SidenavComponent {

}
