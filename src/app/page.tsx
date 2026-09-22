import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
