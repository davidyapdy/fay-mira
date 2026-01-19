import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
