'use client'
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Home() {
   useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
    },[]);
    
  return (
    <main>
    
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
    
   
  )
}





