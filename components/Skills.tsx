import React from 'react'
import {
  motion
} from "framer-motion";
const Skills = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Prisma ORM", "Clerk", "Three.js"]
    

  return (
    //   <div className='text-white mt-[25%] ml-[40%]'>
    //           <h2 className='sm:text-4xl text-lg mb-10 '>SKILLS</h2>
    //           {skillsList?.map((skill, index) => (
    //             <motion.li
    //               whileHover={{ scale: 1.02, color: "#7FFFD4" }}
    //               transition={{ type: "spring", stiffness: 300 }}
    //               className="cursor-default my-4 list-none"
    //               key={index}
    //             >
    //               {skill}
    //             </motion.li>
    //           ))}
    //         </div>
<div
  className="
    text-white 
    mt-[15%] sm:mt-[50%] px-7 
  
  "
>
     <h2 className='sm:text-4xl text-2xl font-semibold text-center sm:text-left  mb-15 '>SKILLS</h2>
    <div className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
    place-items-center sm:gap-10'>
  {skillsList?.map((skill, index) => (
    <motion.li
      whileHover={{ scale: 1.08, color: "#7FFFD4" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        cursor-default 
        list-none 
        border border-white/20 
        rounded-md 
        px-4 py-2 
        text-center 
        text-sm sm:text-base 
        text-white/80 
        bg-white/5 
        backdrop-blur-sm 
        hover:bg-white/10 hover:text-[#7FFFD4]
        shadow-sm hover:shadow-[#7FFFD4]/20 
        transition-all duration-300
      "
      key={index}
    >
      {skill}
    </motion.li>
  ))}</div>
</div>

  )
}

export default Skills
