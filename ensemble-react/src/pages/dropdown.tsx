import { EuiDropdown } from 'ensemble-ui/react'
import { fakeProduct } from './fakeData.const'

export default function DropdownPage() {
  const data = fakeProduct.products

  const onProductSelected = (event: CustomEvent) => {
    const product = event.detail

    console.log('Product selected from React!', product)
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Dropdown by title</h4>

        <EuiDropdown
          data={data}
          displayField="title"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>


      <span className="flex">
        <h4 className="title">Dropdown by dimensions.height</h4>

        <EuiDropdown
          data={data}
          displayField="dimensions.height"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>


      <span className="flex">
        <h4 className="title">Dropdown by reviews.reviewerName</h4>

        <EuiDropdown
          data={data}
          displayField="reviews.reviewerName"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>


      <span className="flex">
        <h4 className="title">Default value</h4>

        <EuiDropdown
          data={data}
          displayField="title"
          defaultValue="Red Nail Polish"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>

    </div>
  )
}