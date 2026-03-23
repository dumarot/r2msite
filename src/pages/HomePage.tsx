import FeaturedProjects from '../components/FeaturedProjects';
import Projects from '../components/Projects';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import ClientsPartners from '../components/ClientsPartners';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function HomePage() {
  return (
    <>
      <SEO />
      <StructuredData type="organization" />
      <div className="pt-20">
        <FeaturedProjects />
        <Projects />
        <About />
        <Services />
        <Process />
        <ClientsPartners />
        <Contact />
      </div>
    </>
  );
}
