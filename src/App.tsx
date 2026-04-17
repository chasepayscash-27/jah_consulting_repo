import './App.css';

const App = () => {
  return (
    <div className="landingPage">
      <header className="topbar">
        <a className="brandTitle" href="#home">JAH Consulting LLC</a>
        <nav className="topNav" aria-label="Page sections">
          <a href="#services">Services</a>
          <a href="#previous-work">Previous Work</a>
          <a href="#about-me">About Me</a>
          <a href="#contact-me">Contact Me</a>
        </nav>
      </header>

      <main id="home" className="content">
        <section id="services" className="sectionCard">
          <h2>Services</h2>
          <p>Coming soon — consulting services and engagement options.</p>
        </section>

        <section id="previous-work" className="sectionCard">
          <h2>Previous Work</h2>
          <p>Coming soon — featured projects and delivered outcomes.</p>
        </section>

        <section id="about-me" className="sectionCard">
          <h2>About Me</h2>
          <p>Coming soon — background, expertise, and consulting philosophy.</p>
        </section>

        <section id="contact-me" className="sectionCard">
          <h2>Contact Me</h2>
          <p>Coming soon — preferred contact methods and response details.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
