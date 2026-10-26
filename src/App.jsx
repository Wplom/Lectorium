import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import Partners from './pages/Partners/Partners.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Lecturers from './pages/Lecturers/Lecturers.jsx'
import Reviews from './pages/Reviews/Reviews.jsx'
import Login from './pages/Login/Login.jsx'

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [isDarkTheme, setIsDarkTheme] = useState(false)
     useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [isDarkTheme])

    function toggleTheme() {
        setIsDarkTheme((previousTheme) => !previousTheme)
    }

    function renderCurrentPage() {
        switch (currentPage) {
            case 'partners':
                return <Partners />

            case 'about':
                return <About setCurrentPage={setCurrentPage} />

            case 'lecturers':
                return <Lecturers />

            case 'reviews':
                return <Reviews />

            case 'login':
                return <Login setCurrentPage={setCurrentPage} />

            default:
                return (
                    <Home setCurrentPage={setCurrentPage} />
                )
        }
    }

    return (
        <div className="app">
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
            />

            {renderCurrentPage()}
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default App