"use client"

import CanvasBackground from '@/components/CanvasBackground';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import {
  motion, AnimatePresence
} from "framer-motion";
import { useState } from 'react';



function App() {
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)



  const handleShowSkills = () => {
    if (projects) {
      setProjects(false)
    }
    setSkills((prev) => !prev)

  }

  const handleShowProjects = () => {
    if (skills) {
      setSkills(false)
    }
    setProjects((prev) => !prev)

  }

  console.log(skills, "s")
  console.log(projects, "p")

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CanvasBackground />
      <div className="relative z-10 h-screen">


        <div className='grid grid-cols-2'>

          <main className="flex flex-col gap-15 mt-[35%] ml-[10%]  h-screens text-white">
            <h1 className="text-6xl font-bold opacity-[0.8]">Ryusei Teramoto</h1>
            <p className="text-2xl opacity-[0.7]">Web developer / Front-end engineer</p>

            <div className='text-white flex gap-10 mt-20 ' >
              <button className='hover:cursor-pointer font-bold  opacity-[0.8] hover:scale-[1.03] transition duration-300 ease-in-out' onClick={handleShowSkills}>SKILLS</button>
              <button className='hover:cursor-pointer font-bold  opacity-[0.8]  hover:scale-[1.03] transition duration-300 ease-in-out' onClick={handleShowProjects}>PROJECTS</button>

            </div>

          </main>


          <AnimatePresence mode="wait" initial={false}>
            {skills &&
              <motion.div
                key="skills"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

              >
                <Skills />
              </motion.div>
            }



            {projects &&

              <motion.div
                key="projects"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

              >
                <Projects />
              </motion.div>


            }
          </AnimatePresence>
        </div>

        <Contact/>

      </div>

      <footer className="text-xs text-gray-800 bottom-[3%] text-right z-15 mr-1 relative">
        3D model: "Old Computers" by Rafael Rodrigues (CC BY 4.0)
      </footer>
    </div>

  )

}

export default App
