import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-neutral-light">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout