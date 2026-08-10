import { EuiBreadcrumb } from 'ensemble-ui/react'

type BreadcrumbData = {
  id: number
  icon?: string
  title: string
  action?: () => void
}

export default function BreadcrumbPage() {
  const data: BreadcrumbData[] = [
    {
      id: 1,
      title: 'Academy',
      action: () => {
        console.log(12)
      },
      icon: 'academic-cap',
    },
    {
      id: 2,
      title: 'adjustments-horizontal',
      action: () => {
        console.log(13)
      },
      icon: 'adjustments-horizontal',
    },
  ]

  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">Breadcrumb:</h4>

        <EuiBreadcrumb data={data} />
      </span>
    </div>
  )
}