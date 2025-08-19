import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce REST API",
      description: "Full-featured e-commerce backend with Spring Boot, JWT authentication, and MySQL database. Implements complete CRUD operations for products, orders, and user management.",
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JWT", "Maven"],
      github: "https://github.com/ALamin068/ecommerce-api",
      features: ["JWT Authentication", "Role-based Authorization", "Payment Integration", "Order Management"]
    },
    {
      title: "Microservices Banking System",
      description: "Distributed banking system using Spring Cloud microservices architecture with service discovery, API gateway, and centralized configuration.",
      technologies: ["Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "PostgreSQL", "Docker"],
      github: "https://github.com/ALamin068/banking-microservices",
      features: ["Service Discovery", "Load Balancing", "Circuit Breaker", "Distributed Tracing"]
    },
    {
      title: "Task Management System",
      description: "Project management tool with real-time notifications using WebSockets, Redis caching, and comprehensive REST API.",
      technologies: ["Spring Boot", "WebSocket", "Redis", "MongoDB", "Docker", "React"],
      github: "https://github.com/ALamin068/task-manager",
      features: ["Real-time Updates", "File Upload", "Task Analytics", "Team Collaboration"]
    },
    {
      title: "Blog Management API",
      description: "RESTful blog platform with content management, user authentication, and search functionality using Elasticsearch.",
      technologies: ["Spring Boot", "Spring Security", "Elasticsearch", "PostgreSQL", "Swagger"],
      github: "https://github.com/ALamin068/blog-api",
      features: ["Full-text Search", "Content Moderation", "SEO Optimization", "API Documentation"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tech-stack">
              <h4>Technologies:</h4>
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
