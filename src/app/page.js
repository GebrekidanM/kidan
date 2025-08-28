import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FadeIn from "@/components/FadeIn"; 

export default function Home() {
  return (
    <div>
        <FadeIn>
           <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Portfolio />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
    </div>      
  );
}
