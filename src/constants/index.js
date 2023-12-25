import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ltts,
  kba,
  nic,
  java,
  go,
  mysql,
  net,
  csharp,
  python

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blog",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  }

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Go lang",
    icon: go,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },


  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "L&T Technology Services, Mysore, India",
    icon: ltts,
    iconBg: "#E6DEDD",
    date: "January 2022 - July 2023",
    points: [
      "Advised QA and Firmware team members to design and develop robust solutions to meet client requirements for functionality and performance, adhering to CI/CD principles",
      "Peer Reviewed source code and created Proof Of Concept (POCs) for High-Level and Low-Level Software requirements.",
      "Optimized performance of legacy code bases by 50% by leveraging modern frameworks and efficient data structures.",
      "Engaged in migration from Redis Data store to Kafka to cope with huge influx of control fluctuation data, which further improved real-time analysis of factory devices.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "L&T Technology Services, Mysore, India",
    icon: ltts,
    iconBg: "#E6DEDD",
    date: "January 2021 - January 2022",
    points: [
      "Developed Micro-services in Java and C# .Net for logging and analyzing real-time voltage fluctuations from factories devices by utilizing Apache Kafka API for Event Sourcing.",
      "Created an Event-Driven service for processing audit trail events from an HMI server.",
      "Debugged source code and Configuration Logs of build reports to figure out the root cause of issues.",
      "Migrated services from Batch to Stream Processing through DevOps pipelines.",
      "Performed system analysis, documentation, implementation, and High- Level Design creation."
    ],
  },
  {
    title: "Sofware Intern",
    company_name: "L&T Technology Services, Mysore, India",
    icon: ltts,
    iconBg: "#E6DEDD",
    date: "September 2020 - January 2021",
    points: [
      "Teamed up with experienced Application Developers in developing, designing, and implementing a full-fledged Micro-service Application using ASP .NET Core, Web API, Mongo DB as Back-End, and React JS as front-end and deployed in an Azure Cloud Environment using Docker and Kubernetes.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Took initiative in conducting brainstorming sessions with fellow developers to come up with a System Design that tolerates the inflow and outflow of user data comparable to that of Big Data.",
    ],
  },
  {
    title: "Blockchain Developer Intern",
    company_name: "Kerala Blockchain Academy (KBA), Trivandrum, India",
    icon: kba,
    iconBg: "#E6DEDD",
    date: "June 2019 - July 2019",
    points: [
      "Developed a full-fledged decentralized Auction System using Ethereum, Solidity and Web3.js Blockchain Frameworks.",
      "Participated in brainstrorming sessions regarding the future of Decentralized Apps(DApps).",

    ],
  },
  {
    title: "Networking Intern",
    company_name: "National Informatics Center (NIC), Trivandrum, India",
    icon: nic,
    iconBg: "#E6DEDD",
    date: "June 2018 - July 2018",
    points: [
      "Worked on implementing a Network Traffic Analyzing tool to monitor Data Center traffic.",
      "Paid visit to a regional Data Center managing major governmental organisational traffic and understood the end-to-end lifecyle of a Data Packet."

    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };