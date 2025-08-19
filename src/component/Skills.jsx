const skillCategories = [
  {
    category: "Backend Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Spring Cloud"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "H2 Database"]
  },
  {
    category: "Development Tools",
    skills: ["Maven", "Gradle", "IntelliJ IDEA", "Git", "Postman", "Swagger/OpenAPI"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux"]
  },
  {
    category: "Testing",
    skills: ["JUnit 5", "Mockito", "TestContainers", "Spring Boot Test", "Integration Testing"]
  },
  {
    category: "Other Technologies",
    skills: ["Java", "REST APIs", "Microservices", "RabbitMQ", "Elasticsearch", "Actuator"]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  export default Skills;
  