import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { servicesData } from '../../data/data'

const Services = () => {
    return (
        <section className="section-padding bg-neutral-light">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4">
                        NOS SERVICES
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                        Solutions Complètes pour l'Agriculture
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nous offrons une gamme complète de services pour accompagner les agriculteurs et éleveurs dans leur développement
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.slice(0, 6).map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-primary-yellow/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-yellow/30 transition-colors">
                                    <span className="text-3xl">{service.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-primary-green mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                <Link to="/services" className="inline-flex items-center text-primary-green font-semibold hover:text-primary-light transition-colors group">
                                    En savoir plus
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/services" className="btn-primary">
                        Voir tous nos services
                        <FaArrowRight className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Services