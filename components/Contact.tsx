"use client"

import { Github, Mail } from 'lucide-react';
import Link from 'next/link';



const Contact = () => {
   

  return (
   <div className='flex justify-center pt-5  mt-35 gap-5 text-white opacity-[0.5]'>
         <Link href="https://github.com/Ryutera"><Github /></Link>
          <button> <Mail /></button>
        </div>
  )
}

export default Contact
