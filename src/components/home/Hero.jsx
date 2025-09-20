import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { heroData } from '../../data/data'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920"
                    alt="Agriculture au Bénin"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-primary-green/70"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center bg-white/20 backdrop-blur-custom rounded-full px-4 py-2 mb-6"
                        >
                            <span className="w-2 h-2 bg-primary-yellow rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium">100% Agriculture Durable</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            {heroData.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl md:text-2xl text-primary-yellow mb-6"
                        >
                            {heroData.subtitle}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg text-white/90 mb-8"
                        >
                            {heroData.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/products" className="btn-secondary group">
                                {heroData.cta}
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary-green group">
                                <FaPlay className="mr-2" />
                                Voir la Vidéo
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20"
                        >
                            {heroData.stats.map((stat, index) => (
                                <div key={index} className="text-center md:text-left">
                                    <h3 className="text-3xl font-bold text-primary-yellow">{stat.value}</h3>
                                    <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Floating Images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1589923188651-268a9765e432?w=600"
                                    alt="Agriculteur"
                                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                                />
                            </motion.div>

                            {/* Floating Card 1 */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-10 -left-10 bg-white rounded-xl shadow-xl p-4 z-20"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-primary-yellow rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🌾</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-primary-green">Céréales</p>
                                        <p className="text-sm text-gray-600">100% Bio</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-4 z-20"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🐄</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-primary-green">Élevage</p>
                                        <p className="text-sm text-gray-600">Responsable</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero