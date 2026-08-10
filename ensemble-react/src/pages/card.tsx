import { EuiCard } from 'ensemble-ui/react'

export default function CardPage() {
  return (
    <div className="doc">

      {/* classic */}
      <span className="flex">
        <h4 className="title">Card vertical (default) - classic</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* belt */}
      <span className="flex">
        <h4 className="title">Card vertical - belt</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          mode="belt"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* lollipop */}
      <span className="flex">
        <h4 className="title">Card vertical - lollipop</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          mode="lollipop"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* gem */}
      <span className="flex">
        <h4 className="title">Card vertical - gem</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          mode="gem"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* flag */}
      <span className="flex">
        <h4 className="title">Card vertical - flag</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          mode="flag"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* horizontal classic */}
      <span className="flex">
        <h4 className="title">Card horizontal (default) - classic</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          orientation="horizontal"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* horizontal belt */}
      <span className="flex">
        <h4 className="title">Card horizontal - belt</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          orientation="horizontal"
          mode="belt"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* horizontal lollipop */}
      <span className="flex">
        <h4 className="title">Card horizontal - lollipop</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          orientation="horizontal"
          mode="lollipop"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* horizontal gem */}
      <span className="flex">
        <h4 className="title">Card horizontal - gem</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          orientation="horizontal"
          mode="gem"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>


      {/* horizontal flag */}
      <span className="flex">
        <h4 className="title">Card horizontal - flag</h4>

        <EuiCard
          id="one"
          img="src/assets/sample_image.png"
          orientation="horizontal"
          mode="flag"
        >
          <span className="content">
            <span className="quote">“nop is the best op”</span>
            <span className="person">— Amirhosein Mrdani Ch.</span>
            <span className="title">
              Founder of ILECY, the best project of all time.
            </span>
          </span>
        </EuiCard>
      </span>

    </div>
  )
}