import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { testimonialsData } from '../../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonials = () => {
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
                        TÉMOIGNAGES
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
                        Ils Nous Font Confiance
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Découvrez les témoignages de nos partenaires et clients satisfaits
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                                >
                                    {/* Quote Icon */}
                                    <FaQuoteLeft className="text-4xl text-primary-yellow mb-6" />

                                    {/* Content */}
                                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Rating */}
                                    <div className="flex mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-primary-yellow text-lg" />
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-primary-green">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl mb-3">😊</div>
                        <h3 className="text-2xl font-bold text-primary-green mb-2">98%</h3>
                        <p className="text-gray-600">Clients satisfaits</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl mb-3">🌟</div>
                        <h3 className="text-2xl font-bold text-primary-green mb-2">4.9/5</h3>
                        <p className="text-gray-600">Note moyenne</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="text-2xl font-bold text-primary-green mb-2">500+</h3>
                        <p className="text-gray-600">Partenaires actifs</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials