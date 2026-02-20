export const profileData = {
  name: "Abhay Krishnan K",
  title: "Frontend Engineer",
  avatar: "/profile/professional-developer-avatar.png",
  email: "abhaykrishnan210@gmail.com",
  phone: "+91 9188032272",
  location: "Payyanur, Kannur, Kerala",
  birthday: "14/02/2003",
  social: {
    github: "https://github.com/abhayk012",
    linkedin: "https://linkedin.com/in/abhay-krishnan-k-b7139926b",
  },
};

export const aboutData = {
  description: [
    "I'm a Frontend Engineer with 1+ year of professional experience building scalable, production-grade web applications using React.js, Next.js, and TypeScript. I have strong expertise in REST API integration, performance optimization, and secure frontend architecture.",
    "I specialize in creating seamless user experiences by converting complex designs into pixel-perfect, reusable components. My experience spans e-commerce platforms, booking systems, and modern web applications. I'm passionate about delivering high-quality code with focus on performance, security, and best practices.",
  ],
  services: [
    {
      icon: "Code",
      title: "Frontend Development",
      description:
        "Building scalable web applications with React.js, Next.js, TypeScript, and Tailwind CSS.",
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      description:
        "Implementing lazy loading, code splitting, image optimization, and CDN caching strategies.",
    },
    {
      icon: "Cloud",
      title: "Deployment & DevOps",
      description:
        "Full-stack deployment on AWS (EC2, S3, CloudFront), CI/CD with GitHub Actions, Nginx configuration.",
    },
    {
      icon: "PenTool",
      title: "API Integration",
      description:
        "Seamless REST API integration with secure authentication and state management solutions.",
    },
  ],
  testimonials: [
    {
      avatar: "/professional-man.jpg",
      name: "Rahul Sharma",
      text: "Abhay delivered an exceptional e-commerce platform that exceeded all expectations. His attention to performance optimization and clean code practices is outstanding.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Priya Nair",
      text: "Working with Abhay on the Garmin Bahrain project was seamless. He brought innovative solutions to SEO optimization and demonstrated deep technical expertise.",
    },
    {
      avatar: "/professional-man.jpg",
      name: "Arun Kumar",
      text: "Highly skilled frontend engineer with exceptional problem-solving abilities. Abhay is reliable, communicative, and committed to delivering high-quality work.",
    },
    {
      avatar: "/professional-woman-diverse.png",
      name: "Sneha Patel",
      text: "Impressed by Abhay's technical depth and ability to handle complex state management. His contributions to the car rental platform were instrumental to the project's success.",
    },
  ],
  clients: [
    { name: "ThatWaa Communications", logo: "/tech-company-logo.jpg" },
    { name: "Sysbreeze Technologies", logo: "/startup-logo.png" },
    { name: "Lym Data Labs", logo: "/design-agency-logo.png" },
    { name: "CareMall Online", logo: "/software-company-logo.png" },
    { name: "Garmin Bahrain", logo: "/web-agency-logo.jpg" },
    { name: "Hyvé Car Rental", logo: "/app-development-logo.jpg" },
  ],
};

export const resumeData = {
  education: [
    {
      title: "Bachelor of Computer Applications (BCA)",
      period: "Nov 2020 — Mar 2023",
      description:
        "Kannur University, Kerala. Completed comprehensive coursework in computer applications and software development.",
    },
    {
      title: "ME(A)RN Stack Development",
      period: "Completed",
      description:
        "Luminar Technolab - Intensive full-stack development certification covering MongoDB, Express, React, Node.js.",
    },
  ],
  experience: [
    {
      title: "Frontend Engineer (Contract) at ThatWaa Communications",
      period: "Jan 2026 — Present",
      description:
        "Leading frontend architecture and feature development for client web applications. Building scalable, reusable components using React.js, Next.js, and TypeScript. Improving performance through lazy loading, code splitting, and image optimization.",
    },
    {
      title: "Frontend Developer (Contract) at Sysbreeze Technologies",
      period: "Sep 2025 — Dec 2025",
      description:
        "Led frontend development for a live e-commerce platform serving real customers. Integrated Razorpay payment gateway and secured checkout workflows. Implemented CDN caching and set up CI/CD pipelines using GitHub Actions.",
    },
    {
      title: "MERN Stack Developer (Full-Time) at Lym Data Labs",
      period: "Oct 2024 — Mar 2025",
      description:
        "Developed scalable and responsive UIs using React.js, Next.js, Tailwind CSS. Contributed to hotel booking and car rental platforms. Integrated REST APIs and managed state using Zustand and React Query.",
    },
  ],
  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Redux / Zustand", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      // { name: "Docker", level: 70 },
      { name: "AWS", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "Postman", level: 90 },
    ],
  },
};

export const portfolioData = {
  categories: ["all", "e-commerce", "web development", "applications"],
  projects: [
    {
      title: "CareMall Online — E-commerce Platform",
      category: "e-commerce",
      images: [
        "/portfolio/caremall.png",
        "/portfolio/caremall1.png",
        "/portfolio/caremall2.png",
      ],
      description:
        "Complete customer-facing e-commerce platform with admin dashboard and warehouse management",
      tech: ["React.js", "TypeScript", "Vite", "Node.js", "AWS"],
      liveUrl: "https://caremallonline.com",
      githubUrl: "https://github.com/abhayk012",
    },
    {
      title: "Garmin Bahrain — Official Distributor Website",
      category: "web development",
      images: [
        "/portfolio/garmin.png",
        "/portfolio/garmin1.png",
        "/portfolio/garmin2.png",
      ],
      description:
        "Responsive distributor website with optimized performance and SEO best practices",
      tech: ["Next.js", "Tailwind CSS", "CDN"],
      liveUrl: "https://www.garmin.bh",
      githubUrl: "https://github.com/abhayk012",
    },
    {
      title: "Car Rental Platform",
      category: "applications",
      images: ["/portfolio/hyve.png", "/portfolio/hyve1.png"],
      description:
        "Dynamic booking interface with availability calendar and payment integration",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      liveUrl: "https://hyvecarrental.com",
      githubUrl: "https://github.com/abhayk012",
    },
    // {
    //   title: "Namma_Mavu-Admin-store-App",
    //   category: "web development",
    //   images: ["/portfolio/namma_mavu1.png", "/portfolio/namma_mavu2.png"],
    //   description:
    //     "High-conversion landing page for a B2B SaaS product with modern animations.",
    //   tech: ["Framer Motion", "Tailwind CSS", "Next.js"],
    //   liveUrl: "#",
    //   githubUrl: "https://github.com/abhayk012",
    // },
  ],
};

export const blogData = {
  posts: [
    {
      title: "Building Scalable E-Commerce Platforms with React and Next.js",
      category: "Development",
      date: "Feb 15, 2025",
      readTime: "10 min",
      image: "/web-development-coding.png",
      excerpt:
        "Lessons learned building CareMall Online e-commerce platform with React, TypeScript, and AWS.",
      tags: ["React", "Next.js", "E-commerce", "Performance"],
      slug: "scalable-ecommerce-react-nextjs",
    },
    {
      title: "Payment Gateway Integration: Razorpay with React",
      category: "Development",
      date: "Jan 28, 2025",
      readTime: "8 min",
      image: "/software-architecture.jpg",
      excerpt:
        "Complete guide to integrating Razorpay payment gateway in React and Next.js applications.",
      tags: ["Razorpay", "Payments", "React", "Frontend"],
      slug: "razorpay-integration-react",
    },
    {
      title: "Performance Optimization Techniques for Modern Web Apps",
      category: "Development",
      date: "Jan 15, 2025",
      readTime: "12 min",
      image: "/ui-ux-design-concept.png",
      excerpt:
        "Practical strategies including lazy loading, code splitting, image optimization, and CDN caching.",
      tags: ["Performance", "Optimization", "Frontend", "DevOps"],
      slug: "performance-optimization-web-apps",
    },
    {
      title: "TypeScript Patterns for React Applications",
      category: "Development",
      date: "Dec 20, 2024",
      readTime: "9 min",
      image: "/web-development-coding.png",
      excerpt:
        "Master TypeScript patterns and best practices for building type-safe React applications.",
      tags: ["TypeScript", "React", "Best Practices"],
      slug: "typescript-patterns-react",
    },
    {
      title: "State Management with Zustand: A Lightweight Alternative",
      category: "Development",
      date: "Dec 5, 2024",
      readTime: "8 min",
      image: "/software-architecture.jpg",
      excerpt:
        "Why Zustand is a great alternative to Redux for managing application state in React.",
      tags: ["Zustand", "State Management", "React"],
      slug: "zustand-state-management",
    },
    {
      title: "CI/CD with GitHub Actions: Automating Deployments",
      category: "DevOps",
      date: "Nov 18, 2024",
      readTime: "10 min",
      image: "/ui-ux-design-concept.png",
      excerpt:
        "Set up automated testing and deployment pipelines using GitHub Actions and AWS.",
      tags: ["GitHub Actions", "CI/CD", "DevOps", "AWS"],
      slug: "cicd-github-actions-aws",
    },
  ],
};

export const contactData = {
  email: "abhaykrishnan210@gmail.com",
  phone: "+91 9188032272",
  location: "Payyanur, Kannur, Kerala, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8453178642563!2d75.32547!3d12.11261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5c8a8a8a8a8a9%3A0x0!2sPayyanur%2C%20Kannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
};
