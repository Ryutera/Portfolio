"use client"

import CanvasBackground from '@/components/CanvasBackground';
import { ul } from 'framer-motion/client';
import { useState } from 'react';
import { SkeletonUtils } from 'three/examples/jsm/Addons.js';


const skillsList = ["HTML" , "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Supabase", "Clerk" ,"Three.js"]

function App() {
const [skills, setSkills] = useState(false)
const [projects, setProjects] = useState(false)


const handleShowSkills = ()=>{
setSkills((prev)=>!prev)
if (projects) {
  setProjects(false)
}
}

console.log(skills)

  return (
    <div className="relative w-full h-screen overflow-hidden">
     <CanvasBackground/>
      <div className="relative z-10 h-screen">

        <div className='grid grid-cols-2'>

         <main className="flex flex-col gap-15 mt-[35%] ml-[10%]  h-screens text-white">
            <h1 className="text-6xl font-bold opacity-[0.8]">Ryusei Teramoto</h1>
            <p className="text-2xl opacity-[0.7]">Web developer / Front-end engineer</p>

            <div className='text-white flex gap-10 mt-20 '>
              <button className='hover:cursor-pointer font-bold  opacity-[0.8]' onClick={handleShowSkills}>SKILLS</button>
              <button  className='hover:cursor-pointer font-bold  opacity-[0.8]'>PROJECTS</button>
            </div>
          
        </main>


<div className='mt-[25%] ml-[40%]'>
  {skills && <div className='text-white'>
    <h2 className='text-4xl mb-10'>Skills</h2>
  {skillsList?.map((skill,index)=>(
    <ul key={index}>
      <li className='my-3' key={index}>{skill}</li>
    </ul>
  ))}
    </div>}

</div>



        </div>


        
       

        {/* <footer className="text-xs text-white bottom-[1%] right-[1%] z-15 relative">
          3D model: "Old Computers" by Rafael Rodrigues (CC BY 4.0)
        </footer> */}
      </div>


    </div>

  )

}

export default App
