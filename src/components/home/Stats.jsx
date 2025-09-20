import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaLeaf, FaTruck, FaAward } from 'react-icons/fa'

const stats = [
    {
        icon: <FaUsers />,
        value: 500,
        suffix: '+',
        label: 'Agriculteurs Partenaires',
        color: 'bg-primary-green'
    },
    {
        icon: <FaLeaf />,
        value: 50,
        suffix: '+',
        label: 'Produits Disponibles',
        color: 'bg-primary-yellow'
    },
    {
        icon: <FaTruck />,
        value: 1000,
        suffix: '+',
        label: 'Livraisons Effectuées',
        color: 'bg-primary-light'
    },
    {
        icon: <FaAward />,
        value: 10,
        suffix: '',
        label: 'Années d\'Expérience',
        color: 'bg-primary-green'
    }
]

const Counter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
                window.requestAnimationFrame(step)
            }
        }

        window.requestAnimationFrame(step)
    }, [end, duration])

    return <span>{count}{suffix}</span>
}

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <section className="section-padding bg-primary-green relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-yellow rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setIsVisible(true)}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Nos Réalisations en Chiffres
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Des résultats concrets qui témoignent de notre engagement pour l'agriculture durable
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${stat.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="text-2xl">{stat.icon}</span>
                                </div>

                                {/* Number */}
                                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {isVisible && (
                                        <Counter end={stat.value} suffix={stat.suffix} />
                                    )}
                                </h3>

                                {/* Label */}
                                <p className="text-white/80">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats