import image from '/public/images/image1.png';
import image1 from '/public/images/image2.png';
import image2 from  '/public/images/image3.png';
import querydocs from '/public/images/querydocs.png';
import querydocs1 from '/public/images/querydocs2.png';
import querydocs2 from '/public/images/querydocs3.png';
import airbnb from '/public/images/airbnb.png';
import airbnb1 from '/public/images/airbnb2.png';
import simpleshell from  '/public/images/simpleshell.png'



export const products = [
  {
    href: "https://your-ecommerce-platform-link.com",
    title: "Ecommerce Platform",
    description:
      "A modern ecommerce platform built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.",
    thumbnail: image2,
    images: [image, image1],
    stack: ["Nextjs", "Tailwindcss", "TypeScript", "Sanity"],
    slug: "ecommerce-platform",
    content: (
      <div>
        <p>
          A full-fledged ecommerce platform designed for a seamless shopping experience. It features
          product listings, user accounts, and a custom CMS for easy product management. Built with modern
          web technologies to ensure performance and scalability.
        </p>
        <p>
          Key features include product search, filtering, user authentication, and a responsive design that
          works across devices. Tailored for online businesses looking for a fast, secure, and easily manageable platform.
        </p>
      </div>
    ),
  },
  {
    href: "https://airbnb-clone-link.com", 
    title: "AirBnB Clone",
    description:
      "A full-stack AirBnB clone with features like booking, listing, and user authentication.",
    thumbnail: airbnb, 
    images: [airbnb, airbnb1], 
    stack: ["Html", "CSS", "Javascript", "Flask", "SQL"],
    slug: "airbnb-clone",
    content: (
      <div>
        <p>
          A full-stack web application that mimics the core features of AirBnB. Users can list properties,
          book stays, and manage their accounts. Built using React for the frontend and Node.js/Express for the backend,
          with MongoDB as the database.
        </p>
        <p>
          The app includes user authentication, booking systems, and responsive design to provide a
          user-friendly experience on both desktop and mobile.
        </p>
      </div>
    ),
  },
  {
    href: "https://querydocs-link.com",
    title: "QueryDocs",
    description:
      "A chat-to-PDF application allowing users to query documents efficiently.",
    thumbnail: querydocs,
    images: [querydocs1, querydocs2], // placeholder images
    stack: ["Nextjs", "Pinecone", "Tailwindcss"],
    slug: "querydocs",
    content: (
      <div>
        <p>
          QueryDocs enables users to interact with PDF documents using natural language. Built with Next.js
          and Pinecone for powerful search and querying capabilities, it offers users a streamlined way to extract
          relevant information from large documents quickly.
        </p>
        <p>
          The app includes advanced search features, real-time query results, and supports various document types,
          making it a valuable tool for professionals and researchers.
        </p>
      </div>
    ),
  },
  {
    href: "https://simple-shell-link.com", 
    title: "Simple Shell",
    description:
      "A Unix-based simple shell built to understand the fundamentals of process creation and management.",
    thumbnail: simpleshell,
    images: [simpleshell, simpleshell],
    stack: ["C", "Linux"],
    slug: "simple-shell",
    content: (
      <div>
        <p>
          Simple Shell is a basic command-line interpreter developed in C, providing insight into how shells like Bash
          function. It handles command execution, environment management, and supports input/output redirection.
        </p>
        <p>
          This project focuses on understanding low-level system programming and the intricacies of process control and
          management in Unix-based systems.
        </p>
      </div>
    ),
  },
];
