import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="flip-right">
          <h2 className='text-4xl md:text-5xl'> Tecnologies I Work With</h2>
          <p className='text-slate-300 pt-2'>
            I have been working with a range a technologies in the web development world.
          specializing in front-end development, HTML, CSS, JavaScript, React, Node.js ,TypeScript.
          I have also experience working with back-end technologies like Node.js and Express.js.
          I am a quick learner and can pick up new tech stacks as needed.
          I am a team player who thrives in collaborating with cross-functional teams to
           produce outstanding web applications
          </p>
        </div>
        <div>
          <div className='grid grid-cols-1 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
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

        <div>
          
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <p className='border border-gray-300 rounded-md p-4 text-center'>
            <span className='text-2xl text-gray-500'>01.</span>
            <span className='text-2xl text-gray-500'>01.</span>
            <span className='text-2xl text-gray-500'>01.</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Skills