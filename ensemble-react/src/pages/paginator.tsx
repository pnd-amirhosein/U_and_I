import { useState } from 'react'
import { EuiPaginator } from 'ensemble-ui/react'

export default function PaginatorPage() {
  const [currentPage, setCurrentPage] = useState(5)

  const onPageChange = (event: CustomEvent<number>) => {
    setCurrentPage(event.detail)
  }

  return (
    <div className="doc">

      <span className="flex">
        <h4 className="title">Simple Input</h4>

        <EuiPaginator
          totalPages={10}
          defaultCurrentPage={currentPage}
          onCurrentPage={onPageChange}
        />

        <span>current page: {currentPage}</span>
      </span>


      <span className="flex">
        <h4 className="title">Simple Input</h4>

        <EuiPaginator
          totalPages={10}
          defaultCurrentPage={currentPage}
          nativeAttrs={{
            "disabled": "true",
          }}
        />
      </span>

    </div>
  )
}