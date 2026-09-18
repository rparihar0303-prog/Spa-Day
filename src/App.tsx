import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import Treatments from '@/components/Treatments';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Treatments />
        <Experience />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
