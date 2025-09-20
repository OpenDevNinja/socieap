import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaLeaf } from 'react-icons/fa'
import { productsData } from '../../data/data'

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(productsData.categories[0].id)

    const activeCategoryData = productsData.categories.find(cat => cat.id === activeCategory)

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
                        NOS PRODUITS
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                        Produits Frais et de Qualité
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        De la ferme à votre table, découvrez notre gamme complète de produits agricoles, d'élevage et transformés
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {productsData.categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${activeCategory === category.id
                                    ? 'bg-primary-green text-white shadow-lg'
                                    : 'bg-white text-primary-green border-2 border-primary-green/20 hover:border-primary-green'
                                }`}
                        >
                            <span className="text-xl mr-2">{category.icon}</span>
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    {activeCategoryData && (
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {activeCategoryData.products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-primary-yellow text-primary-green px-3 py-1 rounded-full text-sm font-semibold">
                                                <FaLeaf className="inline mr-1" />
                                                100% Bio
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-primary-green mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {product.description}
                                            </p>

                                            {/* Items */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.items.slice(0, 3).map((item, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-primary-green/10 text-primary-green text-xs rounded-full"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                                {product.items.length > 3 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                        +{product.items.length - 3} autres
                                                    </span>
                                                )}
                                            </div>

                                            {/* Button */}
                                            <Link
                                                to="/products"
                                                className="inline-flex items-center text-primary-green font-semibold hover:text-primary-light transition-colors group"
                                            >
                                                Voir détails
                                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-primary-green rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">
                            Commandez vos produits frais dès maintenant
                        </h3>
                        <p className="text-lg mb-8 text-white/90">
                            Livraison rapide et produits garantis de qualité supérieure
                        </p>
                        <Link to="/products" className="btn-secondary">
                            Explorer notre catalogue
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Products