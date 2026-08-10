import { EuiTree } from 'ensemble-ui/react'

interface TreeData {
  id?: string
  Title: string
  Action?: () => void
  Children?: TreeData[]
}

export default function TreePage() {
  const data: TreeData[] = [
    {
      id: 'dashboard',
      Title: 'Dashboard',
      Action: () => console.log('Dashboard'),
    },

    {
      id: 'projects',
      Title: 'Projects',

      Children: [
        {
          id: 'frontend',
          Title: 'Frontend',

          Children: [
            {
              id: 'react',
              Title: 'React',
              Action: () => console.log('React'),
            },

            {
              id: 'stencil',
              Title: 'Stencil',
              Action: () => console.log('Stencil'),
            },
          ],
        },

        {
          id: 'backend',
          Title: 'Backend',
          Action: () => console.log('Backend'),
        },
      ],
    },

    {
      id: 'settings',
      Title: 'Settings',
      Action: () => console.log('Settings'),
    },
  ]

  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">Toggle - disabled:</h4>

        <EuiTree
          collapse
          data={data}
        />
      </span>
    </div>
  )
}