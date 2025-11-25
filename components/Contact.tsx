
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';



const Contact = () => {
   

  return (
  <div className="fixed sm:bottom-14 buttom-8 left-0 right-0 z-20 flex justify-center gap-5 text-white opacity-50">
      <Link href="https://github.com/Ryutera"><Github /></Link>
      <Link href="mailto:teratera0312@icloud.com"><Mail /></Link>
    </div>
  )
}

export default Contact
