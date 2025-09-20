import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import { companyInfo } from '../../data/data'

const CTA = () => {
    return (
        <section className="section-padding bg-neutral-light">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-primary-green rounded-3xl p-8 md:p-16 relative overflow-hidden">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            >
                                Prêt à Transformer Votre Agriculture ?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-xl text-white/90 mb-10"
                            >
                                Rejoignez la coopérative SoCiEAP et bénéficiez de notre expertise,
                                nos formations et notre réseau pour développer votre activité agricole
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link to="/contact" className="btn-secondary group">
                                    Commencer maintenant
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary-green group"
                                >
                                    <FaPhone className="mr-2" />
                                    {companyInfo.phone}
                                </a>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-3 gap-8 mt-16"
                            >
                                <div>
                                    <div className="text-4xl mb-3">🌱</div>
                                    <h3 className="text-xl font-semibold mb-2">Agriculture Durable</h3>
                                    <p className="text-white/80">Pratiques respectueuses de l'environnement</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-3">📚</div>
                                    <h3 className="text-xl font-semibold mb-2">Formation Continue</h3>
                                    <p className="text-white/80">Accompagnement personnalisé et formations</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-3">🤝</div>
                                    <h3 className="text-xl font-semibold mb-2">Réseau Solidaire</h3>
                                    <p className="text-white/80">Communauté d'agriculteurs engagés</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA