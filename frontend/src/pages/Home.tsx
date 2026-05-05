import About from "../components/About";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lifestyle from "../components/Lifestyle";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Lifestyle />
            <Features />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home