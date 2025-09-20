import { motion } from 'framer-motion'
import { FaCheckCircle, FaUsers, FaLeaf, FaHandshake, FaLightbulb, FaGlobe, FaHeart } from 'react-icons/fa'
import { aboutData, testimonialsData } from '../data/data'
import { Link } from 'react-router-dom'

const About = () => {
    const icons = {
        "Durabilité": <FaLeaf />,
        "Solidarité": <FaHandshake />,
        "Innovation": <FaLightbulb />,
        "Respect de l'Environnement": <FaGlobe />,
        "Santé et Bien-être": <FaHeart />
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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">À Propos de SoCiEAP</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Une coopérative née de la passion pour la terre et l'agriculture durable
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary-yellow/20 text-primary-green rounded-full text-sm font-semibold mb-4">
                                NOTRE HISTOIRE
                            </span>
                            <h2 className="text-4xl font-bold text-primary-green mb-6">
                                Une Tradition Familiale au Service de l'Agriculture
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                <p className="leading-relaxed">
                                    SoCiEAP, coopérative de société civile spécialisée dans l'exploitation agro-pastorale,
                                    est née d'une passion profonde pour la terre et l'agriculture. Notre histoire est ancrée
                                    dans une tradition familiale d'agriculteurs, où la passion pour le monde rural et les joies
                                    de cultiver la terre ont été transmises de génération en génération.
                                </p>
                                <p className="leading-relaxed">
                                    Notre fondateur, issu d'une famille d'agriculteurs, a grandi aux côtés de son père,
                                    Djima Jacques BONOU, un agriculteur expérimenté et chevronné qui a travaillé sur des
                                    questions relatives à l'agriculture familiale et au développement agricole au Bénin et en Afrique.
                                </p>
                                <p className="leading-relaxed">
                                    Inspiré par son héritage et son expérience, il a décidé de concrétiser son rêve en créant
                                    une coopérative qui valorise l'agriculture durable et responsable. Ainsi est née SoCiEAP,
                                    une coopérative qui s'engage en faveur d'un environnement sain et d'une agriculture durable et responsable.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600"
                                alt="Agriculture"
                                className="rounded-2xl shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1574323347407-e8ffd68466fb?w=600"
                                alt="Céréales"
                                className="rounded-2xl shadow-lg mt-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1595754066700-22d62a6508bb?w=600"
                                alt="Élevage"
                                className="rounded-2xl shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600"
                                alt="Formation"
                                className="rounded-2xl shadow-lg mt-8"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-3xl p-10 shadow-xl"
                        >
                            <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center mb-6">
                                <FaUsers className="text-3xl text-primary-green" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary-green mb-4">{aboutData.mission.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {aboutData.mission.content}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-primary-yellow/10 rounded-3xl p-10 shadow-xl"
                        >
                            <div className="w-20 h-20 bg-primary-yellow/30 rounded-full flex items-center justify-center mb-6">
                                <FaLeaf className="text-3xl text-primary-green" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary-green mb-4">{aboutData.vision.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {aboutData.vision.content}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
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
                            NOS VALEURS
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                            Les Principes qui Nous Guident
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nous sommes unis par notre détermination à promouvoir une agriculture respectueuse
                            de l'environnement et à contribuer au bien-être des communautés rurales
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutData.values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="bg-neutral-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="w-16 h-16 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green group-hover:text-white transition-all duration-300 text-primary-green text-2xl">
                                        {icons[value.title]}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-green mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
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
                            NOTRE ÉQUIPE
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                            Des Experts Passionnés
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Une équipe dévouée d'agronomes, d'éleveurs et de spécialistes en transformation agricole
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. AHOTON Laurent",
                                role: "Directeur Technique",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
                                expertise: "Expert en Agriculture Durable"
                            },
                            {
                                name: "Mme AGOSSOU Marie",
                                role: "Responsable Élevage",
                                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
                                expertise: "Spécialiste en Production Animale"
                            },
                            {
                                name: "M. MENSAH Paul",
                                role: "Chef des Opérations",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
                                expertise: "Expert en Transformation Agricole"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary-green mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-light font-medium mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {member.expertise}
                                    </p>
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center text-white"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Rejoignez Notre Communauté
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Si vous partagez notre passion pour l'agriculture et notre engagement pour un avenir meilleur, rejoignez-nous !
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-secondary">
                                Devenir Membre
                            </Link>
                            <Link to="/services" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary-green">
                                Nos Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About