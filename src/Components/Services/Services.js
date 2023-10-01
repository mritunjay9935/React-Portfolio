import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Technical <span>Skills</span>
          </h1>
          <p>

"I am a recent graduate with a B.Tech in Information Technology and a strong background in Python, C++, HTML, CSS, NodeJS, ReactJS, and various technologies like MongoDB, Docker, REST API, and AWS. As a Software Engineering Intern at Predict Ram, I gained hands-on experience in backend development, API design, and UI development using ReactJS. My project work includes an Income-Expense Tracker and a Student Management System, demonstrating my ability to deliver practical solutions. I am eager to apply my skills and contribute to a dynamic team while continuously learning and growing in the field of software development."
          </p>
          <a href="https://drive.google.com/file/d/1iFlobOEcn48hCITjZSK6P1Smh_MgxsDw/view?usp=sharing">
        <button>Hire Me</button>
          </a>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>

I'm a versatile web developer proficient in React.js, HTML, CSS, JavaScript, Node.js, and Express.js. I excel in both front-end and back-end development and have experience with MySQL and MongoDB for database management. My Python skills add extra flexibility to my toolkit. I'm dedicated to clean and efficient code, and I thrive in collaborative environments. Let's team up to create outstanding web applications!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Backend Developer</h3>
              <p>
              As a backend de
              veloper proficient in Node.js,
               Python, MySQL, and MongoDB, I specialize in building the engine behind web applications. 
               With Node.js, I create scalable and responsive server-side code, while Python adds versatility 
               and reliability to my development toolkit.
                I handle structured data efficiently with MySQL and manage flexible data structures with MongoDB.
                 My role involves optimizing database performance, ensuring data integrity, and providing well-designed APIs to support frontend developers in delivering outstanding user experiences.
                 Collaboration is key to my work,
               as I work closely with cross-functional teams to bring web applications to life.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Frontend Developer</h3>
              <p>
              As a frontend developer specializing in ReactJS, 
              my passion lies in crafting seamless and user-friendly web experiences.
              React's component-based architecture empowers me to create dynamic and responsive interfaces with ease,
              allowing me to bring designs to life and enhance user engagement. I thrive on the constant evolution of web technologies
              nd stay up-to-date with the latest trends to ensure that the applications 
              I build are both cutting-edge and performant. Collaborative by nature, 
              I enjoy working closely with designers and backend developers to deliver cohesive and polished web solutions that leave a lasting impression on users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
