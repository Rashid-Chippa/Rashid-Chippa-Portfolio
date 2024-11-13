import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container '>
      <div className='skills-grid '>
        {/* first column skills */}
        <div data-aos="flip-right" className='skills-left'>
          <h2 className='skills-heading'> Tecnologies I Work With</h2>
          <p className='skills-text'>
            I have been working with a range a technologies in the web development world.
          specializing in front-end development, HTML, CSS, JavaScript, React, Node.js ,TypeScript.
          I have also experience working with back-end technologies like Node.js and Express.js.
          I am a quick learner and can pick up new tech stacks as needed.
          I am a team player who thrives in collaborating with cross-functional teams to
           produce outstanding web applications
          </p>
        </div>

        {/* second column skills */}
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="flip-right">TypeScrpt</h2>
              <h2 data-aos="flip-right">React.Js</h2>
              <h2 data-aos="flip-right">Next.Js</h2>
              <h2 data-aos="flip-right">Tailwind</h2>
              <h2 data-aos="flip-right">Css</h2>
              <h2 data-aos="flip-right">Node.js</h2>
              <h2 data-aos="flip-right">HTML</h2>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Skills