import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Gym Fitness Website(FoodFitness)",
    blurb: "FoodFitness is a fully responsive full-stack fitness platform featuring secure user login, personalised dashboards, daily calorie tracking, food logging, a recipe-search API, and guided workout plans. It demonstrates my ability to build complete end-to-end applications, integrate external APIs, design intuitive user experiences, and develop secure, scalable backend systems—all while supporting users in improving both their nutrition and physical health.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "Backend"],
    href: "https://tyrellsystemsportfolio.com/gym_website_demo/htdocs/home_page/index.html", 
     image: "/projects_images/gym_website.png",
  },
 
  {
    title: "MindOverMatters",
    blurb: "MindOverMatters is an e-commerce project originally inspired by selling argan oil. Users can browse and purchase products through a fully integrated Stripe payment system, supported by a robust backend that automatically updates stock levels and sends order confirmation emails.",
    tags: ["HTML", "CSS", "PHP", "MySQL", "Backend"],
    href: "https://tyrellsystemsportfolio.com/MindOverMatter/index.html",
     image: "/projects_images/MindoverMatterPicture.png",
  },

   {
    title: "ChronoCube",
    blurb: "A real-time 3D graphics game where players control a cube to collide with moving targets. This project highlights the hands-on nature of real-time rendering, using custom shaders to handle lighting, colour, and visual effects at a low level. Building it involved manually managing many aspects of graphics programming—such as transforms, frame updates, and rendering pipelines—which gave me a deeper understanding of how human and detail-oriented real-time graphics development truly is.",
    tags: ["C++", "DirectX"],
    href: "https://www.youtube.com/watch?v=2D6NwqKp5qc",
     image: "/projects_images/chronocube.png",
  },

   {
    title: "Data-Science(Health-Dashboard on Paitents",
    blurb: "A React-based frontend integrated with Python for machine learning analysis. Tech",
    tags: ["Python", "Scikit", "Pandas", "React"],
    href: "https://youtu.be/uHspVfueTDY?si=B0QHvIg2zZMGI1Hc",
     image: "/projects_images/Health_dashboard.png",
  },

   {
    title: "Game jam Project - Trailer ShowCase",
    blurb: "A game developed during a Game Jam focused on fast-paced creativity and gameplay.",
    tags: ["Unreal Engine"],
    href: "https://youtu.be/qvnI7rFu2IM?si=diDcgRtqFj8bUYrM",
     image: "/projects_images/game_trailer.png",
  },
];
