import About from './_components/About';
import Features from './_components/Features';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';

export default function Home() {
    return (
        <div>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Features />
            <Footer />
        </div>
    );
}
