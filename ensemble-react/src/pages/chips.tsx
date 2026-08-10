import { EuiChips } from 'ensemble-ui/react'
import { fakeProduct } from './fakeData.const'

export default function ChipsPage() {
  const data = fakeProduct.products

  const onProductSelected = (event: CustomEvent) => {
    const product = event.detail

    console.log('Product selected from React!', product)
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Chips by title</h4>

        <EuiChips
          data={data}
          displayField="title"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>


      <span className="flex">
        <h4 className="title">Chips by dimensions.height</h4>

        <EuiChips
          data={data}
          displayField="dimensions.height"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>


      <span className="flex">
        <h4 className="title">Chips by reviews.reviewerName</h4>

        <EuiChips
          data={data}
          displayField="reviews.reviewerName"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>

    </div>
  )
}