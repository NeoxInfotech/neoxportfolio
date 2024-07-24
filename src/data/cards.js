import web from "../assets/web.png"
import app from "../assets/app.png"
import design from "../assets/design.png"

// Neox edu
import react from "../assets/neox-edu/neox_react.png"
import js from "../assets/neox-edu/neox_js.png"
import figma from "../assets/neox-edu/neox_figma.png"
import git from "../assets/neox-edu/neox-git.png"
import node from "../assets/neox-edu/neox_node.png"
import mongo from "../assets/neox-edu/neox_mongo.png"
import mysql from "../assets/neox-edu/neox_mysql.png"
import exp from "../assets/neox-edu/neox_exp.png"
import next from "../assets/neox-edu/neox_next.png"
import wordpress from "../assets/neox-edu/neox_wordpress.png"


export const cardData = [
  {
    id: 1,
    bg: "#95CBC8",
    ico: web,
    head: "Web Development",
    text: "We develop robust, scalable, and secure websites using the latest technologies to ensure optimal performance and reliability.",
  },
  {
    id: 2,
    bg: "#F5C2A8",
    ico: app,
    head: "App Development",
    text: "We create cutting-edge mobile  applications tailored to your business needs. We deliver  high-performance apps that enhance  drive business growth.",
  },
  {
    id: 3,
    bg: "#F4BC44",
    ico: design,
    head: "Design & Animation",
    text: "Our design team creates visually appealing and user-friendly websites tailored to your brand’s identity and audience.",
  },
];



export const pricingcards = [
  {
    id: 1,
    bg: "#95CBC8",
    head: "Basic Plan",
    contents: [
      "5-8 pages", "Proper Responsiveness", "Contact Form", "Content Image Gallery", "Domain & Hosting", "Whatsapp Contact Button", "Fast Loading", "Responsive Sliders", "Page Animations", "100% Support", "2-5 email accounts"
    ],
    price: "Rs 5000 - Rs 8000"
  },
  {
    id: 2,
    bg: "#F4BC44",
    head: "Standard Plan",
    contents: [
      "5-8 pages", "Content Management", "Proper Responsiveness", "Contact Form", "Content Image Gallery", "Domain & Hosting", "Whatsapp Contact Button", "Fast Loading", "Responsive Sliders", "Page Animations", "100% Support", "2-5 email accounts",
    ],
    price: "Rs 10000 - Rs 15000"
  },
  {
    id: 3,
    bg: "#F3C4AD",
    head: "Business Plan ",
    contents: ["Content Management", "Admin Portal & History", "Banners", "SEO support",
      "5-8 pages", "Proper Responsiveness", "Domain & Hosting", "Fast Loading", "Responsive Sliders", "100% Support", "5 or more email accounts", "Customized/ Themed Website",
    ],
    price: "Rs 18000 - Rs 25000"
  },
  {
    id: 4,
    bg: "#95CBC8",
    head: "Eccomerce Plan ",
    contents: ["Customized or themed", "Unlimited filters and categories", "more than 100 products", "24x7 SEO Support", "Inventory Management System", "Payment Gateway Integration", "Slides and Banners", "Pre-Built Andriod App (if necessary)", "Analytical dashboard(charts)"
    ],
    price: "Rs 25000 - Rs 30000"
  },
  {
    id: 5,
    bg: "#F3C4AD",
    head: "Andriod App Plan ",
    contents: ["Content Management", "Admin Portal & History", "SEO support", "Play Store Support",
      "Fast Loading", "Notifications and intro", "100% Support", "5 or more email accounts", "Theme Choice",
    ],
    price: "Rs 40000 - Rs 45000"
  },

]



export const eduCards = [
  {
    id: 1,
    ico: figma,
    head: "Figma",
    bg: "#95CBC8",
    content: "Figma is a collaborative interface design tool that allows designers to create, prototype, and share user interfaces and experiences. It is cloud-based, which means multiple team members can work on the same project simultaneously, making real-time collaboration seamless.",
  },
  {
    id: 2,
    ico: js,
    bg: "#F5C2A8",
    head: "Advanced Javascript",
    content: "Advanced JavaScript encompasses in-depth knowledge and understanding of JavaScript beyond the basics. This includes concepts like closures, promises, async/await, event loop, prototype inheritance, modules, and more. ",
  },
  {
    id: 3,
    ico: react,
    head: "React Js",
    bg: "#F4BC44",
    content: "React is a popular JavaScript library for building user interfaces, primarily for single-page applications. Developed by Facebook, React allows developers to create reusable UI components, manage the state efficiently, and render components dynamically as data changes.",
  },
  {
    id: 4,
    ico: exp,
    bg: "#95CBC8",
    head: "Express JS",
    content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build web and mobile applications. It simplifies the process of writing server-side code, offering tools for handling HTTP requests",
  },
  {
    id: 5,
    ico: node,
    bg: "#F5C2A8",
    head: "Node JS",
    content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance web applications. ",
  },
  {
    id: 6,
    ico: mongo,
    head: "MongoDB",
    bg: "#F4BC44",
    content: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This schema-less design allows for dynamic data structures, making it ideal for applications with evolving requirements.",
  },
  {
    id: 7,
    ico: mysql,
    bg: "#95CBC8",
    head: "MySql",
    content: "MySQL is a widely-used open-source relational database management system (RDBMS). It uses structured query language (SQL) for managing and manipulating data. MySQL is known for its reliability, ease of use, and ability to handle large databases.",
  },
  {
    id: 8,
    ico: git,
    bg: "#F5C2A8",
    head: "Git-Hub",
    content: "Git is a distributed version control system used to track changes in source code during software development.GitHub is a web-based platform that uses Git for version control and offers additional features for collaborative software development.",
  },
  {
    id: 9,
    ico: next,
    head: "Next Js",
    bg: "#F4BC44",
    content: "Next.js is a React framework that enables server-side rendering and the creation of static websites for React-based web applications. It enhances performance and SEO by pre-rendering pages at build time. ",
  }
]