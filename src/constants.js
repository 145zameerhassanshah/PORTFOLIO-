// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import laravellogo from "./assets/tech_logo/laravellogo.png";
import phplogo from "./assets/tech_logo/phplogo.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";

// Experience Section Logo's
import asLogo from "./assets/company_logo/aimget_logo.jpg";
import stLogo from "./assets/company_logo/sizdom_logo.jpg";

// Education Section Logo's
import puLogo from "./assets/education_logo/pu_logo.jpg";
import gdcLogo from "./assets/education_logo/gdc_logo.jpg";
import ghsLogo from "./assets/education_logo/ghs_logo.jpg";

// Project Section Logo's
import mhowLogo from "./assets/work_logo/mhow_logo.jpg";
import tsmsLogo from "./assets/work_logo/tsms_logo.jpg";
import tahzeelLogo from "./assets/work_logo/tahzeel_logo.jpg";
import Safe_CapitalLogo from "./assets/work_logo/trading.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Laravel", logo: laravellogo },
      { name: "PHP", logo: phplogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: asLogo,
    role: "Fullstack Engineer",
    company: "Aimget Solution",
    date: "January 2024 - Present",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, Laravel, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: ["ReactJS", "PHP", "Laravel", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "SQL"],
  },
  {
    id: 1,
    img: stLogo,
    role: "Frontend Intern",
    company: "Sizdom Technology",
    date: "August 2023 - December 2023",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, and Bootstrap. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
  },
];

export const education = [
  {
    id: 0,
    img: puLogo,
    school: "Govt Islamia Graduate College, Gujranwala Affiliated with University Of The Punjab Lahore",
    date: "October 2020 - November 2024",
    grade: "3.10 CGPA",
    desc: "I completed my Bachelor's degree in Information Technology Science (BSIT) from Govt Islamia Graduate College, Gujranwala Affiliated with University Of The Punjab Lahore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Islamia College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSIT (Information Technology)",
  },
  {
    id: 1,
    img: gdcLogo,
    school: "Govt Degree College Qila Didar Singh, Gujranwala",
    date: "September 2018 - May 2020",
    grade: "A",
    desc: "I completed my class 12 education from Govt Degree College Qila Didar Singh, Gujranwala, under the BISE board, where I studied (ICS) with General Science.",
    degree: "BISE(Gujranwala) - ICS with General Science",
  },
  {
    id: 2,
    img: ghsLogo,
    school: "Govt High School No 2, Qila Didar Singh, Gujranwala",
    date: "Apr 2016 - March 2018",
    grade: "A+",
    desc: "I completed my class 10 education from Govt High School No 2, Qila Didar Singh, Gujranwala, under the BISE board, where I studied Science.",
    degree: "BISE(Gujranwala), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Safe Capital",
    description:
      "Investment & Referral Platform – Built a dynamic system with automated daily returns, 7-level referral commissions, monthly salaries, milestone rewards, withdrawal fee deductions, and a fully editable admin panel with email OTP login, live chat, and customer support.",
    image: Safe_CapitalLogo,
    tags: [" JQuery", "MySQL", "PHP", "Laravel", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/145zameerhassanshah/TRADING_APP",
    webapp: "https://trading.mhow.org/",
  },
  {
    id: 1,
    title: "Tahzeel",
    description:
      "A full-stack service platform that provides UAE government, business, and personal services — including Amer, Tasheel, DED, PRO, DHA, Real Estate, VAT, Legal, and Banking — with multilingual support, secure processing, global reach, and efficient management through a powerful admin panel.",
    image: tahzeelLogo,
    tags: ["jQuery", "API", "HTML", "CSS", "JavaScript", "PHP", "Laravel"],
    github: "https://github.com/145zameerhassanshah/Tahzeel",
    webapp: "http://tahzeel.ae/",
  },
  {
    id: 2,
    title: "TSMS",
    description:
      "TSMS is a full-stack software house website designed to showcase IT solutions, digital services, and custom software development. It highlights the company’s expertise in web and mobile app development, enterprise solutions, and innovative technologies. The platform features a modern design with service listings, project portfolios, client testimonials, and a contact system, making it easy for businesses to connect and collaborate with TSMS for reliable tech solutions.",
    image: tsmsLogo,
    tags: ["jQuery", "JavaScript", "Laravel", "PHP", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/145zameerhassanshah/tsms",
    webapp: "https://tsms.ae/",
  },
  {
    id: 3,
    title: "MHOW",
    description:
      "Mhow is a digital platform designed to organize events, manage donation collections at national and international levels, and support preaching and outreach activities. It provides tools for event management, transparent donation tracking, and effective community engagement.",
    image: mhowLogo,
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "Laravel", "PHP"],
    github: "https://github.com/145zameerhassanshah/mhow",
    webapp: "https://mhow.org/",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "An API-based Inventory Management System built to streamline product tracking, stock control, sales, and purchase management. It provides secure and scalable endpoints for product categorization, supplier integration, stock alerts, and reporting, making it easy to connect with web or mobile applications for seamless business operations.",
    image: mhowLogo, 
    tags: ["AJAX", "JavaScript", "API", "Laravel", "PHP", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/145zameerhassanshah/inventory-management-system-",
  },
  
];
