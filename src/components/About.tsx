"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/pic.jpg",
    "/images/pic2.png",
    "/images/pic5.jpg",
    "/images/pic4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl dark:text-[#bbb9a8]">
        <Paragraph className="mt-4">
          Hey there, I’m Nowayte — a developer by day, piano enthusiast by
          night, and a lover of good design and strong coffee at all hours. When
          I’m not busy writing code or debugging (usually both at the same
          time), you’ll probably find me hanging out with friends, cycling, or
          swimming. Welcome to my little corner of the web!
        </Paragraph>
        <Paragraph className="mt-4">
          I’ve been hooked on technology for as long as I can remember. From
          those early days of learning to code, I realized my passion wasn’t
          just about making things work — it was about making things work
          beautifully. Whether I’m building an app like QueryDocs or designing
          sleek interfaces for an ecommerce platform, I love turning ideas into
          experiences that people enjoy using. My goal? To create things that
          not only get the job done but look and feel great while doing it.
        </Paragraph>
        <Paragraph className="mt-4">
          But it’s not all code. I’ve got a creative side too, and that’s where
          music and writing come in. I love playing the piano — it’s my way to
          unwind after a long day of problem-solving. I also enjoy writing,
          whether it's breaking down tech concepts in an article or crafting
          stories that take a break from reality. I like to think words and
          music are just other ways of creating, much like code.
        </Paragraph>
        <Paragraph className="mt-4">
          What really drives me, though, is design. I’ve always believed that
          functionality and aesthetics should go hand in hand. So, whether I’m
          tweaking the UI of a project or experimenting with new design trends,
          I make sure what I create is not just usable but enjoyable to look at.
          After all, who says technology can’t be beautiful?
        </Paragraph>
        <Paragraph className="mt-4">
          Through this website, I want to share what I’ve learned, what I’m
          working on, and maybe a few random thoughts along the way. Whether
          you’re here for some tech tips, design inspiration, or just curious
          about my projects, I hope you find something that clicks with you.
        </Paragraph>
        <Paragraph className="mt-4">
          So, that’s me in a nutshell. A little bit of code, a little bit of
          music, a splash of design, and a lot of curiosity. Thanks for stopping
          by, and I’m excited to see where this journey takes us — whether it’s
          through bytes of code, melodies on the piano, or a cycling adventure
          on the weekends.
        </Paragraph>
      </div>
    </div>
  );
}
