function Experience() {
    return (
      <section id="experience" className="experience">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Spring Boot Developer</h3>
              <span className="company">TechSolutions Inc.</span>
              <span className="duration">Jan 2024 - Present</span>
            </div>
            <div className="experience-details">
              <ul>
                <li>Led development of microservices architecture serving 500k+ users daily</li>
                <li>Implemented Spring Security with JWT authentication and OAuth2 integration</li>
                <li>Optimized database performance using Spring Data JPA and custom query optimization</li>
                <li>Built comprehensive REST APIs with OpenAPI documentation and validation</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Architected cloud-native solutions using AWS and containerization</li>
              </ul>
              <div className="tech-used">
                <strong>Technologies:</strong> Spring Boot, Spring Cloud, PostgreSQL, Redis, Docker, AWS, Kubernetes
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Spring Boot Developer</h3>
              <span className="company">FinTech Innovations</span>
              <span className="duration">Aug 2022 - Dec 2023</span>
            </div>
            <div className="experience-details">
              <ul>
                <li>Developed secure banking APIs with Spring Security and transaction management</li>
                <li>Implemented event-driven architecture using RabbitMQ and Spring AMQP</li>
                <li>Created automated testing suites with JUnit 5 and TestContainers</li>
                <li>Deployed applications using Docker containers and Kubernetes</li>
                <li>Integrated third-party payment gateways and financial services</li>
                <li>Collaborated with cross-functional teams in Agile development environment</li>
              </ul>
              <div className="tech-used">
                <strong>Technologies:</strong> Spring Boot, Spring Security, MySQL, RabbitMQ, Docker, Jenkins, Maven
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default Experience;
  