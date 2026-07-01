import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import CursorSpotlight from "./components/CursorSpotlight";
import StatsStrip from "./components/StatsStrip";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <PageLoader>
      <div className="relative bg-bg min-h-screen overflow-x-hidden">
        <CursorSpotlight />
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Hero />
          <StatsStrip />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageLoader>
  );
}
