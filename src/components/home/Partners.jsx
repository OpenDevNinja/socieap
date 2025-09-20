import { motion } from 'framer-motion'
import { partnersData } from '../../data/data'

const Partners = () => {
    return (
        <section className="section-padding bg-white">
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
                        NOS PARTENAIRES
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                        Ils Nous Accompagnent
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Des partenariats solides pour un développement agricole durable
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {partnersData.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="group"
                        >
                            <div className="bg-neutral-light rounded-2xl p-8 flex flex-col items-center justify-center h-40 hover:shadow-xl transition-all duration-300">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <p className="mt-4 text-sm text-gray-600 text-center font-medium">
                                    {partner.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Vous souhaitez devenir partenaire ?
                    </p>
                    <button className="btn-outline">
                        Devenir Partenaire
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Partners