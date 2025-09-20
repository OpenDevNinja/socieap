import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaShoppingCart, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { productsData } from '../data/data'
import { Link } from 'react-router-dom'

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(productsData.categories[0].id)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const activeCategoryData = productsData.categories.find(cat => cat.id === activeCategory)

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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">Nos Produits</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Une gamme complète de produits agricoles, d'élevage et transformés de qualité supérieure
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Bar */}
            <section className="py-8 bg-white shadow-sm">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "🌱", text: "100% Bio" },
                            { icon: "🚚", text: "Livraison Rapide" },
                            { icon: "✅", text: "Qualité Garantie" },
                            { icon: "💰", text: "Prix Justes" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-center space-x-3"
                            >
                                <span className="text-2xl">{feature.icon}</span>
                                <span className="font-semibold text-gray-700">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="py-8 sticky top-20 bg-neutral-light z-30">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4">
                        {productsData.categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${activeCategory === category.id
                                        ? 'bg-primary-green text-white shadow-lg'
                                        : 'bg-white text-primary-green hover:bg-primary-green/10'
                                    }`}
                            >
                                <span className="text-xl mr-2">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Display */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        {activeCategoryData && (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Category Header */}
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary-green mb-4">
                                        {activeCategoryData.name}
                                    </h2>
                                    <p className="text-lg text-gray-600">
                                        Découvrez notre sélection de {activeCategoryData.name.toLowerCase()} de qualité
                                    </p>
                                </div>

                                {/* Products Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {activeCategoryData.products.map((product, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ y: -10 }}
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                                {/* Image */}
                                                <div className="relative h-64 overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-4 right-4">
                                                        <div className="bg-primary-yellow text-primary-green px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                                            <FaLeaf className="mr-1" />
                                                            Bio
                                                        </div>
                                                    </div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                                            <p className="text-sm">Cliquez pour plus de détails</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    <h3 className="text-2xl font-bold text-primary-green mb-3">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-gray-600 mb-4">
                                                        {product.description}
                                                    </p>

                                                    {/* Product Items */}
                                                    <div className="mb-6">
                                                        <h4 className="font-semibold text-gray-700 mb-2">Variétés disponibles:</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.items.map((item, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-3 py-1 bg-primary-green/10 text-primary-green text-sm rounded-full"
                                                                >
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Features */}
                                                    <div className="space-y-2 mb-6">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <FaCheckCircle className="text-primary-green mr-2" />
                                                            Produits frais et locaux
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <FaCheckCircle className="text-primary-green mr-2" />
                                                            Sans pesticides chimiques
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <FaCheckCircle className="text-primary-green mr-2" />
                                                            Livraison disponible
                                                        </div>
                                                    </div>

                                                    {/* CTA Button */}
                                                    <button className="w-full btn-primary group">
                                                        <FaShoppingCart className="mr-2" />
                                                        Commander
                                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="grid md:grid-cols-2">
                                {/* Image */}
                                <div className="h-64 md:h-full">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h2 className="text-3xl font-bold text-primary-green mb-4">
                                        {selectedProduct.name}
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        {selectedProduct.description}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="font-semibold text-lg mb-3">Nos variétés:</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {selectedProduct.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <FaCheckCircle className="text-primary-green mr-2" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-semibold text-lg mb-3">Avantages:</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <FaLeaf className="text-primary-green mt-1 mr-2" />
                                                <span>100% biologique et naturel</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FaLeaf className="text-primary-green mt-1 mr-2" />
                                                <span>Cultivé localement au Bénin</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FaLeaf className="text-primary-green mt-1 mr-2" />
                                                <span>Sans OGM ni pesticides chimiques</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FaLeaf className="text-primary-green mt-1 mr-2" />
                                                <span>Fraîcheur garantie</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link to="/contact" className="flex-1 btn-primary">
                                            Commander
                                        </Link>
                                        <button
                                            onClick={() => setSelectedProduct(null)}
                                            className="flex-1 btn-outline"
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <section className="section-padding bg-primary-green relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                            Besoin de grandes quantités ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Nous offrons des tarifs préférentiels pour les commandes en gros et les partenaires commerciaux
                        </p>
                        <Link to="/contact" className="btn-secondary">
                            Demander un devis
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products