function About() {
    return (
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate <strong>Spring Boot Developer</strong> with 3+ years of experience 
            building scalable, robust backend systems and RESTful APIs. My expertise lies in 
            developing enterprise-level applications using the Spring ecosystem, microservices 
            architecture, and modern development practices.
          </p>
          
          <p>
            I specialize in creating high-performance backend solutions using Spring Boot, Spring Security, 
            and Spring Data JPA. My experience includes working with both relational and NoSQL databases, 
            implementing comprehensive security measures, API design, and optimizing application performance 
            for production environments.
          </p>
          
          <p>
            Currently focused on cloud-native development, containerization with Docker, implementing 
            microservices patterns, and building CI/CD pipelines for seamless deployment processes. 
            I'm committed to writing clean, maintainable code and following industry best practices.
          </p>
          
          <div className="highlights">
            <h3>Key Achievements</h3>
            <ul>
              <li>Developed and deployed 15+ production-ready Spring Boot applications</li>
              <li>Implemented microservices architecture reducing system response time by 40%</li>
              <li>Built comprehensive REST APIs serving 100k+ daily requests</li>
              <li>Optimized database queries resulting in 60% performance improvement</li>
              <li>Led migration of monolithic applications to cloud-native microservices</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  export default About;
  