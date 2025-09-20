import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaPhone } from 'react-icons/fa'
import { servicesData, companyInfo } from '../data/data'
import { Link } from 'react-router-dom'

const Services = () => {
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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">Nos Services</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Un accompagnement complet pour développer votre activité agricole
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-12 -mt-8">
                <div className="container-custom">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary-green mb-2">6+</div>
                                <p className="text-gray-600">Services spécialisés</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary-green mb-2">500+</div>
                                <p className="text-gray-600">Agriculteurs accompagnés</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary-green mb-2">98%</div>
                                <p className="text-gray-600">Taux de satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Details */}
            <section className="section-padding">
                <div className="container-custom">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`mb-20 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                        >
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                {/* Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className={index % 2 === 0 ? '' : 'lg:order-2'}
                                >
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute top-8 left-8 w-20 h-20 bg-white/90 rounded-2xl flex items-center justify-center">
                                            <span className="text-3xl">{service.icon}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                                    <span className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4">
                                        SERVICE #{service.id}
                                    </span>
                                    <h2 className="text-4xl font-bold text-primary-green mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start"
                                            >
                                                <FaCheckCircle className="text-primary-green text-xl mt-0.5 mr-3 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">{feature}</h4>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Additional Info */}
                                    <div className="bg-primary-green/5 rounded-xl p-6 mb-8">
                                        <h4 className="font-semibold text-primary-green mb-3">Points clés:</h4>
                                        <ul className="grid grid-cols-2 gap-3">
                                            <li className="flex items-center text-sm text-gray-700">
                                                <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                                                Service personnalisé
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                                                Experts qualifiés
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                                                Suivi régulier
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                                                Résultats mesurables
                                            </li>
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link to="/contact" className="btn-primary group">
                                            Demander ce service
                                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <a href={`tel:${companyInfo.phone}`} className="btn-outline group">
                                            <FaPhone className="mr-2" />
                                            Appeler maintenant
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4">
                            NOTRE PROCESSUS
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                            Comment Nous Travaillons
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Un processus simple et efficace pour vous accompagner
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Premier Contact",
                                description: "Échange initial pour comprendre vos besoins"
                            },
                            {
                                step: "02",
                                title: "Diagnostic",
                                description: "Analyse approfondie de votre situation"
                            },
                            {
                                step: "03",
                                title: "Plan d'Action",
                                description: "Élaboration d'une stratégie personnalisée"
                            },
                            {
                                step: "04",
                                title: "Suivi & Support",
                                description: "Accompagnement continu et ajustements"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-primary-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-green mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-primary-green/20"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4">
                            TARIFICATION
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                            Des Formules Adaptées à Vos Besoins
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choisissez la formule qui correspond le mieux à votre activité
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Essentiel",
                                price: "50.000",
                                period: "/mois",
                                features: [
                                    "Conseil de base",
                                    "1 visite mensuelle",
                                    "Support par téléphone",
                                    "Accès aux formations"
                                ],
                                recommended: false
                            },
                            {
                                name: "Professionnel",
                                price: "100.000",
                                period: "/mois",
                                features: [
                                    "Conseil approfondi",
                                    "2 visites mensuelles",
                                    "Support prioritaire",
                                    "Formations avancées",
                                    "Location de matériel -20%"
                                ],
                                recommended: true
                            },
                            {
                                name: "Premium",
                                price: "Sur devis",
                                period: "",
                                features: [
                                    "Accompagnement complet",
                                    "Visites illimitées",
                                    "Support 24/7",
                                    "Toutes les formations",
                                    "Location de matériel -40%",
                                    "Partenariat commercial"
                                ],
                                recommended: false
                            }
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`relative ${plan.recommended ? 'transform scale-105' : ''}`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-primary-yellow text-primary-green px-4 py-1 rounded-full text-sm font-semibold">
                                            Recommandé
                                        </span>
                                    </div>
                                )}
                                <div className={`bg-white rounded-2xl shadow-xl p-8 h-full ${plan.recommended ? 'border-2 border-primary-green' : ''
                                    }`}>
                                    <h3 className="text-2xl font-bold text-primary-green mb-4">
                                        {plan.name}
                                    </h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-primary-green">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-600">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <FaCheckCircle className="text-primary-green mr-3" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className={plan.recommended ? 'btn-primary w-full' : 'btn-outline w-full'}>
                                        Choisir cette formule
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary-green relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Prêt à Booster Votre Production ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Nos experts sont là pour vous accompagner dans votre développement agricole
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-secondary">
                                Obtenir un devis gratuit
                            </Link>
                            <a href={`tel:${companyInfo.phone}`} className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary-green">
                                <FaPhone className="mr-2" />
                                Appelez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services