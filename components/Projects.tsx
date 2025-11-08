"use client";

import {
    motion,
    animate,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";



export default function Projects() {
    const ref = useRef<HTMLUListElement>(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const mask = useScrollOverflowMask(scrollXProgress); // MotionValue<string>

    return (
        <div className='text-white  mt-[25%] ml-[30%]'>
              <h2 className='text-4xl'>PROJECTS</h2>
              <div className='mt-5'></div>

        <div id="example" className="space-y-6">
            {/* progress circle */}
            <svg
                id="progress"
                viewBox="0 0 100 100"
                className="h-20 w-20"
                aria-hidden
            >
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength={1}
                    className="fill-none stroke-white/20 [stroke-width:8]"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength={1}
                    className="fill-none stroke-white [stroke-width:8] -rotate-90 origin-center"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>


            <motion.ul
                ref={ref}
     
                style={{ ["--mask" as any]: mask }}
                className={[
                    "relative flex gap-4",
                    "overflow-x-auto overflow-y-hidden",
                    "py-4 ",
           
                    "[mask-image:var(--mask)]",
            
                    "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  , 
                ].join(" ")}
            >
                {ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className="
              relative shrink-0 snap-start
              w-[320px] h-full overflow-hidden
              border border-white/10 bg-white/5 backdrop-blur
              shadow-lg shadow-black/20
              transition-transform duration-300 hover:scale-[1.02]
            "
                    >
                        <div className="relative">
                        <Image

                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={90}
                            className="object-cover w-full h-full opacity-[0.8] "
                        />

                        <div className="absolute inset-x-0 bottom-0 p-4">
    
                            <h3 className="relative text-black opacity-[0.6] font-bold  text-lg">
                                {item.name}
                            </h3>
                        </div>
                        </div>

                        <div className="p-4 space-y-2 text-white">
                            <p className="text-sm text-white/80  h-30 overflow-scroll">{item.description}</p>
                            <div className="h-[0.3] bg-black"></div>
                            {item.skills.map((skill,index)=>(
<p className="text-xs text-white/70 inline pr-2" key={index}>{skill}</p>
                            ))}
                             
                        </div>
                    </li>
                ))}

            </motion.ul>
        </div>
 </div>
            

    );
}




const ITEMS = [
    {
        name: "GigLink",
        image: "/projects/GigLink.png",
        skills: ["Next.js","TypeScript", "Prisma ORM","Supabase","Clerk"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti? Facere quam nulla aspernatur perspiciatis dolore nihil deleniti cupiditate, mollitia fugiat quod qui nesciunt eaque error nisi ad et magni.",
    },
    {
        name: "MyShop",
        image: "/projects/MyShop.png",
        skills: ["Next.js","TypeScript","Supabase","Prisma ORM", "Stripe"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti? Facere quam nulla aspernatur perspiciatis dolore nihil deleniti cupiditate, mollitia fugiat quod qui nesciunt eaque error nisi ad et magni.",
    },
       {
        name: "MyShop",
        image: "/projects/MyShop.png",
        skills: ["React.js","Node.js","TypeScript"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti? Facere quam nulla aspernatur perspiciatis dolore nihil deleniti cupiditate, mollitia fugiat quod qui nesciunt eaque error nisi ad et magni.",
    },
    
];

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    
    const mask = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            // 左端
            animate(
                mask,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            );
        } else if (value === 1) {
            // 右端
            animate(
                mask,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            );
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            // 中央へ
            animate(
                mask,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            );
        }
    });

    return mask;
}
