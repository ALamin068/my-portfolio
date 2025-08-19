function Contact() {
    return (
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in discussing new opportunities, challenging projects, 
          and innovative Spring Boot solutions. Let's connect!
        </p>
        <div className="contact-links">
          <a href="mailto:binshafiqalamin@gmail.com" className="contact-link email">
            📧 binshafiqalamin@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/al-amin-bin-shafiq-0a5bb5291/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-link linkedin">
            💼 LinkedIn Profile
          </a>
          <a href="https://github.com/ALamin068" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-link github">
            🐙 GitHub Portfolio
          </a>
        </div>
        <div className="availability">
          <p><strong>Available for:</strong></p>
          <ul>
            <li>Full-time Spring Boot Developer positions</li>
            <li>Backend development consulting projects</li>
            <li>Microservices architecture implementation</li>
            <li>Code review and technical mentoring</li>
          </ul>
        </div>
      </section>
    );
  }
  export default Contact;
  