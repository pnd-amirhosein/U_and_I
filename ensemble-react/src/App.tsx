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


      {/* ANGULAR'S <router-outlet> EQUIVALENT */}
      <Routes>
        <Route path="/button" element={<ButtonPage />} />
      </Routes>

    </main>
  )
}

export default App