const skills = [
    "Selenium", "Cypress", "Playwright", "Appium", "Java", "JavaScript",
    "CI/CD", "API Testing", "Jenkins", "Git", "Docker"
  ];
  
  function Skills() {
    return (
      <section>
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </section>
    );
  }
  export default Skills;
  