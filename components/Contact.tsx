
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';



const Contact = () => {
   

  return (
   <div className='flex justify-center pt-5  sm:mt-35 mt-[120%] gap-5 text-white opacity-[0.5]'>
         <Link href="https://github.com/Ryutera"><Github /></Link>
          <Link href="mailto:teratera0312@icloud.com"> <Mail /></Link>
        </div>
  )
}

export default Contact
