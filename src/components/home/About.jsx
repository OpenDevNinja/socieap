import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { aboutData } from '../../data/data'

const About = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src="https://images.unsplash.com/photo-1589923188651-268a9765e432?w=400"
                                alt="Agriculture"
                                className="rounded-2xl shadow-lg"
                            />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src="https://images.unsplash.com/photo-1595754066700-22d62a6508bb?w=400"
                                alt="Élevage"
                                className="rounded-2xl shadow-lg mt-8"
                            />
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute -top-8 -right-8 w-32 h-32 bg-primary-yellow/20 rounded-full blur-2xl"
                        />

                        {/* Experience Badge */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute bottom-8 right-8 bg-primary-green text-white rounded-xl p-6 shadow-xl"
                        >
                            <h3 className="text-4xl font-bold text-primary-yellow">10+</h3>
                            <p className="text-sm mt-1">Années d'expérience</p>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Section Title */}
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4"
                            >
                                À PROPOS DE NOUS
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-5xl font-bold text-primary-green mb-4"
                            >
                                Une Coopérative au Service de l'Agriculture Durable
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-lg text-gray-600"
                            >
                                {aboutData.history.content}
                            </motion.p>
                        </div>

                        {/* Mission & Vision Cards */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-primary-green/5 rounded-xl p-6 border border-primary-green/10"
                            >
                                <h3 className="text-xl font-bold text-primary-green mb-3">Notre Mission</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Promouvoir une agriculture productive et respectueuse de l'environnement
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-primary-yellow/10 rounded-xl p-6 border border-primary-yellow/20"
                            >
                                <h3 className="text-xl font-bold text-primary-green mb-3">Notre Vision</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Garantir l'accès à des aliments sains et de qualité pour tous
                                </p>
                            </motion.div>
                        </div>

                        {/* Values List */}
                        <div className="space-y-3 mb-8">
                            {aboutData.values.slice(0, 3).map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="flex items-start"
                                >
                                    <FaCheckCircle className="text-primary-green text-xl mt-1 mr-3 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-primary-green">{value.title}</h4>
                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/about" className="btn-primary group">
                                En savoir plus
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About