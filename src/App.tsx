import React, { useEffect } from 'react';
import { SideBar, Footer } from './layout';
import { Intro, About, Experience, Projects, Contact } from './sections';
import { LanguageSwitcher } from './ui';
import { initializeTagManager } from './utils/gtm';
import './i18n';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  useEffect(() => {
    initializeTagManager();
  }, []);

  return (
    <div className="App">
      <LanguageSwitcher />
      <div className="container-fluid row">
        <div className="offset-md-2 col-md-8">
          <section className="section-wrapper">
            <Intro />
          </section>
          
          <section className="section-wrapper">
            <About />
          </section>

          <section className="section-wrapper">
            <Experience />
          </section>
          
          <section className="section-wrapper">
            <Projects />
          </section>
          
          <section className="section-wrapper">
            <Contact />
          </section>
        </div>
        
        <div className="d-none d-lg-block col-md-2">
          <SideBar
            intro="intro"
            about="about"
            experience="experience"
            projects="projects"
            contact="contact"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App; 