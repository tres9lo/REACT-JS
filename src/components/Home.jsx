import React from 'react';
import './Home.css';  // Assuming you'll add some CSS styling

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-subtitle">I’m DEV, a passionate Developer</p>
                <a href="#projects" className="hero-button">See My Work</a>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <h2>About Me</h2>
                <p>
                    I'm a Developer with experience in technologies or skills. I love creating
                    impactful projects that solve real-world problems.
                </p>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img src="dev1.jpg" alt="Project 1" />
                        <h3>Project 1</h3>
                        <p>Description of project 1.</p>
                    </div>
                    <div className="project-card">
                        <img src="dev1.jpg" alt="Project 2" />
                        <h3>Project 2</h3>
                        <p>Description of project 2.</p>
                    </div>
                    <div className="project-card">
                        <img src="dev2.jpg" alt="Project 3" />
                        <h3>Project 3</h3>
                        <p>Description of project 3.</p>
                    </div>
                </div>
            </section>

           {/* Contact Section */}
<section className="contact-section" id="contact">
    <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-description">I’m open to new opportunities and collaborations! Reach out if you'd like to work together.</p>

        <a href="mailto:bikotreslo.99@gmail.com" className="contact-button">Send an Email</a>

        {/* Social Media Icons */}
<div className="social-icons">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon linkedin">
        <i className="bi bi-linkedin"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon github">
        <i className="bi bi-github"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon twitter">
        <i className="bi bi-twitter"></i>
    </a>
</div>

    </div>
</section>


        </div>
    );
};

export default Home;
