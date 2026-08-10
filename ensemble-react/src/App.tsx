import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router'

import { EuiButton } from 'ensemble-ui/react'

import { docs } from './docs'


import './App.css'
import ButtonPage from './pages/button'
import AutoCompletePage from './pages/autocomplete'
import BadgePage from './pages/badge'
import BreadcrumbPage from './pages/breadcrumb'
import CalendarPage from './pages/calendar'
import CardPage from './pages/card'
import CheckboxPage from './pages/checkbox'
import ChipsPage from './pages/chips'
import ColorPickerPage from './pages/color-picker'
import DatepickerPage from './pages/datepicker'
import DialoguePage from './pages/dialogue'
import DropdownPage from './pages/dropdown'
import EmptyStatePage from './pages/empty-state'
import FeedPage from './pages/feed'
import FontPage from './pages/font'
import IconPage from './pages/icon'
import InputPage from './pages/input'
import KnobPage from './pages/knob'
import PaginatorPage from './pages/paginator'
import ProgressbarPage from './pages/progressbar'
import RadioPage from './pages/radio'
import SideNavPage from './pages/sidenav'
import SliderPage from './pages/slider'
import SnackbarPage from './pages/snackbar'
import StatPage from './pages/stat'
import StepperPage from './pages/stepper'
import TabPage from './pages/tab'
import TablePage from './pages/table'
import TextareaPage from './pages/textarea'
import TogglePage from './pages/toggle'
import TreePage from './pages/tree'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const showClose = location.pathname !== '/'

  return (
    <main className="main">

      {/* TOP AREA */}
      <section className="home">
        <h1>
          Welcome to EUI's very first React documentation page!
        </h1>

        <div className="links">
          {docs.map((doc) => (
            <EuiButton
              key={doc.path}
              size="md"
              variant={doc.variant}
              onClick={() => navigate(doc.path)}
            >
              {doc.label}
            </EuiButton>
          ))}
        </div>
      </section>


      {/* CLOSE BUTTON */}
      {showClose && (
        <div className="closer">
          <div
            className="icon"
            onClick={() => navigate('/')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/autocomplete" element={<AutoCompletePage />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/bread" element={<BreadcrumbPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/checkbox" element={<CheckboxPage />} />
        <Route path="/chips" element={<ChipsPage />} />
        <Route path="/color" element={<ColorPickerPage />} />
        <Route path="/datepicker" element={<DatepickerPage />} />
        <Route path="/dialogue" element={<DialoguePage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/empty" element={<EmptyStatePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/font" element={<FontPage />} />
        <Route path="/icon" element={<IconPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/knob" element={<KnobPage />} />
        <Route path="/paginator" element={<PaginatorPage />} />
        <Route path="/progressbar" element={<ProgressbarPage />} />\
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/sidenav" element={<SideNavPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/snackbar" element={<SnackbarPage />} />
        <Route path="/stat" element={<StatPage />} />
        <Route path="/stepper" element={<StepperPage />} />
        <Route path="/tab" element={<TabPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/textarea" element={<TextareaPage />} />
        <Route path="/toggle" element={<TogglePage />} />
        <Route path="/tree" element={<TreePage />} />
      </Routes>

    </main>
  )
}

export default App