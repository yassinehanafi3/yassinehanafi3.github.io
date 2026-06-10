import React, { useEffect } from 'react';
import { SideBar, Footer } from './layout';
import { Intro, About, Experience, Projects, Contact } from './sections';
import { initializeTagManager } from './utils/gtm';
import './i18n';
import './styles/globals.css';

const App: React.FC = () => {
  useEffect(() => {
    initializeTagManager();
  }, []);

  return (
    <div className="App">
      <a href="#main" className="skipLink">
        Skip to main content
      </a>

      <SideBar />

      <div className="pageShell">
        <main id="main" className="mainContent">
          <section className="section-wrapper" aria-labelledby="intro-heading">
            <Intro />
          </section>

          <section className="section-wrapper" aria-labelledby="about-heading">
            <About />
          </section>

          <section className="section-wrapper" aria-labelledby="experience-heading">
            <Experience />
          </section>

          <section className="section-wrapper" aria-labelledby="projects-heading">
            <Projects />
          </section>

          <section className="section-wrapper" aria-labelledby="contact-heading">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
