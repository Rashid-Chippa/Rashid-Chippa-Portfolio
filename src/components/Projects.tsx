import React from 'react';
import Heading from "./Heading";
import Card from './Card';
import '../app/styles/projects.css';

const data =[
    {
        id:0,
        title:"Todo List",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/todolist.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },

    

    {
        id:1,
        title:"Weather Widget",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/weatherwdget.png",
        tags: ["react","Node","CSS","TypeScript"],
        
    },

    {
        id:2,
        title:"Word Counter",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/wordcounter.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },

    {
        id:3,
        title:"Simple Calculator",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/smplecalculator.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },

    {
        id:4,
        title:"Number Guessing Game",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/numberguessinggame.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },

    {
        id:5,
        title:"Digital Clock",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/digitalclock.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },

    {
        id:6,
        title:"Currency Converter",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/currencyconverter.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript","JavaScript","TailwindCSS"],
        
    },

    {
        id:7,
        title:"Count Down Timer",
        desc:" A React & TypeScript based app for managng and organzing",
        img:"/countdowntimer.png",
        tags: ["Next.JS","React","Node","CSS","TypeScript"],
        
    },


]

const Projects = () => {
  return (
    <div id="projects" className='projects-container'>
        <Heading title="My Projects" />
        <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
            {data.map((el)=>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            tags={el.tags}
            img={el.img}
            />))}
        </div>
    </div>
  )
}

export default Projects