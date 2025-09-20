import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaTimes, FaExpand } from 'react-icons/fa'
import { galleryData } from '../data/data'

const Gallery = () => {
    const [filter, setFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)

    // Get unique categories
    const categories = [
        { value: 'all', label: 'Tout' },
        { value: 'agriculture', label: 'Agriculture' },
        { value: 'elevage', label: 'Élevage' },
        { value: 'transformation', label: 'Transformation' },
        { value: 'formation', label: 'Formation' },
        { value: 'equipement', label: 'Équipement' },
        { value: 'equipe', label: 'Équipe' },
        { value: 'marche', label: 'Marché' }
    ]

    const filteredImages = filter === 'all'
        ? galleryData.images
        : galleryData.images.filter(img => img.category === filter)

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
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">Notre Galerie</h1>
                        <p className="text-xl text-white/90">Découvrez nos activités en images</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-8 bg-white shadow-sm sticky top-20 z-30">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.value}
                                onClick={() => setFilter(cat.value)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat.value
                                        ? 'bg-primary-green text-white shadow-lg'
                                        : 'bg-neutral-light text-primary-green hover:bg-primary-green/10'
                                    }`}
                            >
                                {cat.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Images Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ y: -10 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64">
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                <h3 className="font-semibold text-lg">{image.title}</h3>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-custom p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <FaExpand className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Videos Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-primary-green mb-8 text-center">Nos Vidéos</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {galleryData.videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <FaPlay className="text-primary-green text-2xl ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-xl font-semibold">{video.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-primary-yellow transition-colors"
                            >
                                <FaTimes className="text-3xl" />
                            </button>
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-lg"
                            />
                            <div className="mt-4 text-white text-center">
                                <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 text-white hover:text-primary-yellow transition-colors"
                            >
                                <FaTimes className="text-3xl" />
                            </button>
                            <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={selectedVideo.url}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-4 text-white text-center">
                                <h3 className="text-2xl font-semibold">{selectedVideo.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Gallery