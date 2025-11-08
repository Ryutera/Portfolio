import React from 'react'
import {
  motion
} from "framer-motion";
const Skills = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Prisma ORM", "Clerk", "Three.js"]
    

  return (
      <div className='text-white mt-[25%] ml-[40%]'>
              <h2 className='text-4xl mb-10 '>SKILLS</h2>
              {skillsList?.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.02, color: "#7FFFD4" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-default my-4 list-none"
                  key={index}
                >
                  {skill}
                </motion.li>
              ))}
            </div>
  )
}

export default Skills
