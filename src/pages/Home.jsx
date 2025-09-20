import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Products from '../components/home/Products'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import Partners from '../components/home/Partners'
import CTA from '../components/home/CTA'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Products />
            <Stats />
            <Testimonials />
            <Partners />
            <CTA />
        </>
    )
}

export default Home