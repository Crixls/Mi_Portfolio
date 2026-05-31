import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const RootPortfolioLayout = () => {

  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main
        className={`
          flex-1 transition-colors duration-500
          ${darkMode ? "bg-black text-white" : "bg-white text-black"}
        `}
      >
        <Outlet context={{ darkMode }} />
      </main>

      <Footer />
    </div>
  )
}

export default RootPortfolioLayout