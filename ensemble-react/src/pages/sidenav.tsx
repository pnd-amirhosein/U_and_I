import {
  EuiButton,
  EuiCheckbox,
  EuiIcon,
  EuiInput,
  EuiSideNav,
} from 'ensemble-ui/react'

export default function SideNavPage() {
  return (
    <div className="doc">

      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - full - center:
        </h4>

        <span className="side-nav-holder">
          <EuiSideNav>
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">Home</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">Search</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">Explore</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">Cart</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">Wallet</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">Sign out</span>
              </div>
            </div>
          </EuiSideNav>

          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>
        </span>
      </span>


      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - full - top:
        </h4>

        <span className="side-nav-holder">
          <EuiSideNav mode="start">
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">Home</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">Search</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">Explore</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">Cart</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">Wallet</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">Sign out</span>
              </div>
            </div>
          </EuiSideNav>

          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>
        </span>
      </span>


      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - compact - top:
        </h4>

        <span className="side-nav-holder">
          <EuiSideNav size="compact">
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">Home</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">Search</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">Explore</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">Cart</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">Wallet</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">Sign out</span>
              </div>
            </div>
          </EuiSideNav>

          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>
        </span>
      </span>


      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - full - center - rtl:
        </h4>

        <span className="side-nav-holder">
          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>

          <EuiSideNav direction="rtl">
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">خانه</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">جستجو</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">اکسپلور</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">سبد خرید</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">کیف پول</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">خروج</span>
              </div>
            </div>
          </EuiSideNav>
        </span>
      </span>


      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - full - top:
        </h4>

        <span className="side-nav-holder">
          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>

          <EuiSideNav mode="start" direction="rtl">
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">خانه</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">جستجو</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">اکسپلور</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">سبد خرید</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">کیف پول</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">خروج</span>
              </div>
            </div>
          </EuiSideNav>
        </span>
      </span>


      <span className="flex flex-col">
        <h4 className="title w-80 justify-start flex">
          Side nav - compact - top:
        </h4>

        <span className="side-nav-holder">
          <div className="simulator flex">
            <div className="header flex">
              <span className="user flex">
                <EuiIcon name="user-circle" type="outline" />
                <div className="welcome">Hi, Amirhosein!</div>
              </span>

              <div className="welcome">Your wallet: 22.18$</div>
            </div>

            <div className="body">
              <span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>
                <span><EuiInput nativeAttrs={{ "placeHolder": "simple input"}} type="password" /></span>
                <span><EuiInput type="number" nativeAttrs={{ "placeHolder": "simple input"}} /></span>

                <span className="checkbox-boy">
                  <EuiCheckbox
                    states={["null" , "false" , "partial" , "true"]}
                    size="lg"
                    mode="outline"
                  />
                  Include wallet
                </span>
              </span>

              <span>
                <EuiButton mode="outline" size="md" variant="primary">
                  Order
                </EuiButton>
              </span>
            </div>
          </div>

          <EuiSideNav size="compact" direction="rtl">
            <div slot="top">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="home" />
                <span className="text">خانه</span>
              </div>
            </div>

            <div slot="middle">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="magnifying-glass" />
                <span className="text">جستجو</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="globe-americas" />
                <span className="text">اکسپلور</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="shopping-cart" />
                <span className="text">سبد خرید</span>
              </div>

              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="wallet" />
                <span className="text">کیف پول</span>
              </div>
            </div>

            <div slot="bottom">
              <div className="item">
                <EuiIcon style={{ width: '24px' }} name="power" />
                <span className="text">خروج</span>
              </div>
            </div>
          </EuiSideNav>
        </span>
      </span>

    </div>
  )
}