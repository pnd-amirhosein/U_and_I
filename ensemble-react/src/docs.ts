export type DocVariant =
  | 'primary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'neutral'
  | 'info'

export interface DocLink {
  label: string
  path: string
  variant: DocVariant
}

export const docs: DocLink[] = [
  { label: 'Buttons', path: '/button', variant: 'primary' },
  { label: 'Inputs', path: '/input', variant: 'warning' },
  { label: 'Icons', path: '/icon', variant: 'danger' },
  { label: 'AutoComplete', path: '/autocomplete', variant: 'success' },
  { label: 'Badge', path: '/badge', variant: 'primary' },
  { label: 'Dropdown', path: '/dropdown', variant: 'warning' },
  { label: 'Chips', path: '/chips', variant: 'danger' },
  { label: 'Cards', path: '/card', variant: 'warning' },
  { label: 'Checkbox', path: '/checkbox', variant: 'success' },
  { label: 'Paginator', path: '/paginator', variant: 'primary' },
  { label: 'Dialogue', path: '/dialogue', variant: 'danger' },
  { label: 'Progressbar', path: '/progressbar', variant: 'success' },
  { label: 'Slider', path: '/slider', variant: 'danger' },
  { label: 'Sidenav', path: '/sidenav', variant: 'success' },
  { label: 'Fonts', path: '/font', variant: 'danger' },
  { label: 'Stepper', path: '/stepper', variant: 'warning' },
  { label: 'Stat', path: '/stat', variant: 'success' },
  { label: 'Calendar', path: '/calendar', variant: 'primary' },
  { label: 'Datepicker', path: '/datepicker', variant: 'danger' },
  { label: 'Feed', path: '/feed', variant: 'warning' },
  { label: 'Snackbar', path: '/snackbar', variant: 'primary' },
  { label: 'Table', path: '/table', variant: 'success' },
  { label: 'Tab', path: '/tab', variant: 'warning' },
  { label: 'Toggle', path: '/toggle', variant: 'primary' },
  { label: 'Tree', path: '/tree', variant: 'danger' },
  { label: 'Knob', path: '/knob', variant: 'success' },
  { label: 'Breadcrumb', path: '/bread', variant: 'warning' },
  { label: 'Textarea', path: '/textarea', variant: 'primary' },
  { label: 'Radio', path: '/radio', variant: 'danger' },
  { label: 'Empty state', path: '/empty', variant: 'success' },
  { label: 'Color picker', path: '/color', variant: 'warning' },
]