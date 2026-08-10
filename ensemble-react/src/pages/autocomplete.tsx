import { EuiAutoComplete } from 'ensemble-ui/react'

type Product = {
  id: number
  title: string
  [key: string]: unknown
}

type ProductsResponse = {
  products: Product[]
}

export default function AutoCompletePage() {

  const fetchSuggestions = async (query: string): Promise<Product[]> => {
    if (!query || query.trim() === '') {
      return []
    }

    const response = await fetch('https://dummyjson.com/products')
    const data: ProductsResponse = await response.json()

    return data.products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
  }

  const onProductSelected = (event: CustomEvent<Product>) => {
    const product = event.detail

    console.log('Product selected from React!', product)
  }

  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">autocomplete example</h4>

        <EuiAutoComplete
          fetchSuggestions={fetchSuggestions}
          displayField="title"
          onItemSelected={onProductSelected}
          styleValue="width: 25vw;"
          placeholder="Search products..."
        />
      </span>
    </div>
  )
}