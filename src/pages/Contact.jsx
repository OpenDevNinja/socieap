import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { companyInfo } from '../data/data'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000)
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-neutral-light">
            {/* Hero Section */}
            <section className="bg-primary-green py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contactez-Nous</h1>
                        <p className="text-xl text-white/90">Nous sommes à votre écoute pour tous vos besoins</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 -mt-8">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FaPhone />,
                                title: "Téléphone",
                                content: companyInfo.phone,
                                link: `tel:${companyInfo.phone}`
                            },
                            {
                                icon: <FaEnvelope />,
                                title: "Email",
                                content: companyInfo.email,
                                link: `mailto:${companyInfo.email}`
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Adresse",
                                content: companyInfo.address,
                                link: null
                            },
                            {
                                icon: <FaClock />,
                                title: "Horaires",
                                content: "Lun-Ven: 8h-18h",
                                link: null
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg p-6 text-center"
                            >
                                <div className="w-14 h-14 bg-primary-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-green text-xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-primary-green mb-2">{item.title}</h3>
                                {item.link ? (
                                    <a href={item.link} className="text-gray-600 hover:text-primary-green transition-colors">
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">{item.content}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-3xl font-bold text-primary-green mb-6">Envoyez-nous un message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                                                placeholder="+229 00 00 00 00"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Sujet</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                <option value="information">Demande d'information</option>
                                                <option value="partnership">Partenariat</option>
                                                <option value="products">Produits</option>
                                                <option value="services">Services</option>
                                                <option value="other">Autre</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                                            placeholder="Votre message..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                    </button>

                                    {submitSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                                        >
                                            Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Map */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126783.16617086966!2d2.3158585!3d6.3702928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102354e509f894f7%3A0xc8fde921f89849f6!2sCotonou%2C%20Benin!5e0!3m2!1sen!2sus!4v1647856514360!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Map"
                                ></iframe>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-primary-green mb-6">Suivez-nous</h3>
                                <p className="text-gray-600 mb-6">
                                    Restez connecté avec nous sur les réseaux sociaux pour suivre nos actualités et nos activités.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href={companyInfo.socialMedia.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-all duration-300 text-primary-green"
                                    >
                                        <FaFacebook className="text-xl" />
                                    </a>
                                    <a
                                        href={companyInfo.socialMedia.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-all duration-300 text-primary-green"
                                    >
                                        <FaTwitter className="text-xl" />
                                    </a>
                                    <a
                                        href={companyInfo.socialMedia.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-all duration-300 text-primary-green"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                    <a
                                        href={companyInfo.socialMedia.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-all duration-300 text-primary-green"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                </div>
                            </div>

                            {/* FAQ Quick Links */}
                            <div className="bg-primary-yellow/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary-green mb-4">Questions Fréquentes</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="flex items-center text-gray-700 hover:text-primary-green transition-colors">
                                            <span className="w-2 h-2 bg-primary-green rounded-full mr-3"></span>
                                            Comment devenir membre de la coopérative ?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-gray-700 hover:text-primary-green transition-colors">
                                            <span className="w-2 h-2 bg-primary-green rounded-full mr-3"></span>
                                            Quels sont les avantages d'être membre ?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-gray-700 hover:text-primary-green transition-colors">
                                            <span className="w-2 h-2 bg-primary-green rounded-full mr-3"></span>
                                            Comment commander des produits ?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact