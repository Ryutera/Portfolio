"use client";

import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  MotionValue,
} from "framer-motion";
import { Github } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const mask = useScrollOverflowMask(scrollXProgress);

  return (
    <section
      id="projects"
      className="
        text-white 
        sm:mt-[20%] 
        mt-[10%] 
        px-4 sm:px-10 md:px-20 
        relative 
        w-full
      "
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-center sm:text-left hidden sm:block">
        PROJECTS
      </h2>

      {/* Container */}
      <div id="example" className="space-y-2 sm:space-y-6">
        {/* Progress circle */}
        <div className="flex justify-center sm:justify-start hidden sm:block">
          <svg
            viewBox="0 0 100 100"
            className="h-10 w-10 sm:h-20 sm:w-20"
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
        </div>

        {/* Horizontal scroll list */}
        <motion.ul
          ref={ref}
          style={{ ["--mask" as any]: mask }}
          className={[
            "relative flex gap-4 sm:gap-6",
            "overflow-x-auto overflow-y-hidden",
            "py-4 px-2",
            "[mask-image:var(--mask)]",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {ITEMS?.map((item, index) => (
            <li
              key={index}
              className="
                relative shrink-0 snap-start
                w-[260px] sm:w-[320px] md:w-[360px]
                h-full overflow-hidden
                border border-white/10 bg-white/5 backdrop-blur
                shadow-lg shadow-black/20
                transition-transform duration-300 hover:scale-[1.03]
                rounded-lg
              "
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={320}
                  height={180}
                  className="object-cover w-full h-40 sm:h-48 opacity-80"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white text-sm sm:text-lg font-semibold hover:opacity-[0.8] transition duration-200 ease-in-out">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 space-y-3 text-white">
                <p className="text-xs sm:text-sm text-white/80 h-17 sm:h-24 overflow-scroll scrollbar-thin scrollbar-thumb-white/20">
                  {item.description}
                </p>

                <div className="border-t border-white/10 my-2" />

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        text-[10px] sm:text-xs 
                        px-2 py-[2px] 
                        rounded-full 
                        bg-white/10 
                        text-white/80
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {item.githubUrl && (
                  <div className="
          inline-flex items-center
          text-[11px] sm:text-xs
          px-3 py-1
          rounded-full
          border border-white/20
          hover:border-white/60
          hover:bg-white/10
          hover:cursor-pointer
          transition
        ">
                    <Link href={item?.githubUrl}>
                      <span >View on GitHub</span>
                    </Link>
                  </div>
                )}
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}


interface ItemsType {
  name:string
  image:string
   skills:string[]
   link:string
   githubUrl?:string
   description:string
}
/* プロジェクトリスト */
const ITEMS:ItemsType[] = [
  {
    name: "Vintage Clothing E-Commerce Site",
    image: "/projects/MyShop.png",
    skills: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "Stripe"],
    link: "https://my-shop-blond-ten.vercel.app",
    githubUrl: "https://github.com/Ryutera/my-shop",
    description:
      "A vintage clothing e-commerce site built with Next.js as a full-stack application. It uses Supabase and Prisma for data and authentication, Contentful as a headless CMS for product management, and Stripe for secure checkout with dynamic pricing based on the user’s country."

  },
  {
    name: "GigLink",
    image: "/projects/GigLink.png",
    skills: ["Next.js", "TypeScript", "Prisma ORM", "Supabase", "Clerk"],
    link: "https://gig-link-navy.vercel.app/",
    githubUrl: "https://github.com/Ryutera/GigLink",
    description:
      "GigLink is a platform where musicians can create, manage, and join small live music events. It is built with Next.js and TypeScript, using Clerk for authentication, Supabase and Prisma for data management, and the Google Maps API to display event locations on an interactive map.",
  },


];

/* スクロールフェード効果 */
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
      animate(
        mask,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        mask,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        mask,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return mask;
}
