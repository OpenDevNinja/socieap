import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationLinks, companyInfo } from '../../data/data'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Top Bar - Desktop Only */}
            <div className="hidden md:block bg-primary-green text-white py-2">
                <div className="container-custom">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <a href={`tel:${companyInfo.phone}`} className="flex items-center hover:text-primary-yellow transition">
                                <FaPhone className="mr-2" />
                                {companyInfo.phone}
                            </a>
                            <a href={`mailto:${companyInfo.email}`} className="flex items-center hover:text-primary-yellow transition">
                                <FaEnvelope className="mr-2" />
                                {companyInfo.email}
                            </a>
                        </div>
                        <div className="text-primary-yellow font-medium">
                            {companyInfo.slogan}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-custom'
                }`}>
                <div className="container-custom">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 z-50">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-primary-yellow text-xl sm:text-2xl font-bold">S</span>
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-primary-green">SoCiEAP</h1>
                                <p className="text-[10px] sm:text-xs text-primary-light hidden sm:block leading-tight">COOPÉRATIVE AGRO-PASTORALE</p>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`font-medium transition-all duration-300 hover:text-primary-green relative group ${location.pathname === link.path
                                            ? 'text-primary-green'
                                            : 'text-neutral-dark'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-green transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                </Link>
                            ))}
                            <Link to="/contact" className="btn-primary">
                                Nous Contacter
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden relative z-50 p-2 rounded-lg focus:outline-none focus:bg-primary-green/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaTimes className="text-2xl text-primary-green" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaBars className="text-2xl text-primary-green" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Mobile Menu Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="lg:hidden fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-40 overflow-y-auto"
                            >
                                {/* Mobile Menu Header */}
                                <div className="bg-primary-green text-white p-6 pb-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                                                <span className="text-primary-green text-2xl font-bold">S</span>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold">SoCiEAP</h2>
                                                <p className="text-xs text-primary-yellow">Menu Navigation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/80">{companyInfo.slogan}</p>
                                </div>

                                {/* Navigation Links */}
                                <div className="p-6">
                                    <nav className="space-y-1">
                                        {navigationLinks.map((link, index) => (
                                            <motion.div
                                                key={link.path}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                                                            ? 'bg-primary-green text-white shadow-lg'
                                                            : 'text-neutral-dark hover:bg-primary-green/10 hover:translate-x-1'
                                                        }`}
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>

                                    {/* CTA Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-6"
                                    >
                                        <Link
                                            to="/contact"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full text-center bg-primary-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                                        >
                                            Nous Contacter
                                        </Link>
                                    </motion.div>

                                    {/* Mobile Contact Info */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-8 pt-6 border-t border-gray-200"
                                    >
                                        <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                                            Contact rapide
                                        </h3>
                                        <div className="space-y-3">
                                            <a
                                                href={`tel:${companyInfo.phone}`}
                                                className="flex items-center text-neutral-dark hover:text-primary-green transition-colors"
                                            >
                                                <div className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center mr-3">
                                                    <FaPhone className="text-primary-green" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{companyInfo.phone}</p>
                                                    <p className="text-xs text-gray-500">Appelez-nous</p>
                                                </div>
                                            </a>
                                            <a
                                                href={`mailto:${companyInfo.email}`}
                                                className="flex items-center text-neutral-dark hover:text-primary-green transition-colors"
                                            >
                                                <div className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center mr-3">
                                                    <FaEnvelope className="text-primary-green" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{companyInfo.email}</p>
                                                    <p className="text-xs text-gray-500">Écrivez-nous</p>
                                                </div>
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* Social Links - Mobile */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-6 pt-6 border-t border-gray-200"
                                    >
                                        <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                                            Suivez-nous
                                        </h3>
                                        <div className="flex space-x-3">
                                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                                                <motion.a
                                                    key={social}
                                                    href={companyInfo.socialMedia[social]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center hover:bg-primary-green hover:text-white transition-all duration-300 text-primary-green"
                                                >
                                                    {social === 'facebook' && <span className="text-lg">f</span>}
                                                    {social === 'twitter' && <span className="text-lg">𝕏</span>}
                                                    {social === 'instagram' && <span className="text-lg">📷</span>}
                                                    {social === 'linkedin' && <span className="text-lg">in</span>}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom Section */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t">
                                    <p className="text-xs text-center text-gray-500">
                                        © 2024 SoCiEAP. Tous droits réservés.
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar