import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "PHP Booking System",
    blurb: "Custom booking system with login, roles, and MySQL. Handles bookings, cancellations, and admin reports.",
    tags: ["PHP", "MySQL", "Backend"],
    href: "https://your-php-booking-url.com", // put your real URL or GitHub
    // image: "/projects/booking.png",
  },
  {
    title: "Portfolio (this site)",
    blurb: "Next.js + Tailwind + Framer Motion portfolio with smooth animations and clean layout.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    href: "https://your-portfolio-url.com",
    // image: "/projects/portfolio.png",
  },
  {
    title: "Shop / E-commerce Page",
    blurb: "Product listing page with filters, cart, and responsive layout.",
    tags: ["PHP", "HTML", "CSS"],
    href: "https://your-shop-url.com",
  },
];
