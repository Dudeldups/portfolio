import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useRef } from "react";
import useScroll from "./hooks/useScroll";

const App = () => {
  const showScrollToTopButton = useScroll(100);

  const appRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={appRef} className="app">
      <Header />
      <main role="main" id="main-content">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {showScrollToTopButton && <ScrollToTop appRef={appRef} />}
    </div>
  );
};

export default App;
