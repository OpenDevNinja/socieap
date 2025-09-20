import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'
import { navigationLinks, companyInfo, productsData, servicesData } from '../../data/data'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-primary-green text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-14 h-14 bg-primary-yellow rounded-full flex items-center justify-center">
                                <span className="text-primary-green text-3xl font-bold">S</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">SoCiEAP</h3>
                                <p className="text-xs text-primary-yellow">COOPÉRATIVE AGRO-PASTORALE</p>
                            </div>
                        </div>
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Cultivons ensemble un avenir durable. Agriculture moderne et élevage responsable pour un Bénin prospère.
                        </p>
                        <div className="flex space-x-4">
                            <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-primary-green transition-all duration-300">
                                <FaFacebook />
                            </a>
                            <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-primary-green transition-all duration-300">
                                <FaTwitter />
                            </a>
                            <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-primary-green transition-all duration-300">
                                <FaInstagram />
                            </a>
                            <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-primary-green transition-all duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary-yellow">Liens Rapides</h4>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                        <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products & Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary-yellow">Nos Activités</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/products" className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                    Produits Agricoles
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                    Produits d'Élevage
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                    Produits Transformés
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                    Formation & Conseil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-white/80 hover:text-primary-yellow transition-colors duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-primary-yellow rounded-full mr-3"></span>
                                    Location de Matériel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary-yellow">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href={`tel:${companyInfo.phone}`} className="flex items-start text-white/80 hover:text-primary-yellow transition-colors duration-300">
                                    <FaPhone className="mt-1 mr-3 flex-shrink-0" />
                                    <span>{companyInfo.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${companyInfo.email}`} className="flex items-start text-white/80 hover:text-primary-yellow transition-colors duration-300">
                                    <FaEnvelope className="mt-1 mr-3 flex-shrink-0" />
                                    <span>{companyInfo.email}</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start text-white/80">
                                    <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                                    <span>{companyInfo.address}</span>
                                </div>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h5 className="font-semibold mb-3">Newsletter</h5>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-primary-yellow text-white placeholder-white/50"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary-yellow text-primary-green font-semibold rounded-r-lg hover:bg-opacity-90 transition-all duration-300"
                                >
                                    S'abonner
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white/60 text-sm text-center md:text-left mb-4 md:mb-0">
                            © 2024 SoCiEAP. Tous droits réservés. | Développé avec ❤️ pour l'agriculture béninoise
                        </p>
                        <div className="flex items-center space-x-6">
                            <Link to="/privacy" className="text-white/60 hover:text-primary-yellow text-sm transition-colors duration-300">
                                Confidentialité
                            </Link>
                            <Link to="/terms" className="text-white/60 hover:text-primary-yellow text-sm transition-colors duration-300">
                                Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary-yellow text-primary-green rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-40"
                aria-label="Retour en haut"
            >
                <FaArrowUp className="text-lg" />
            </button>
        </footer>
    )
}

export default Footer