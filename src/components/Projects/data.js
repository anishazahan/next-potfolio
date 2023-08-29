import quize from "../../assets/img/project/Group 17.png";
import youtube from "../../assets/img/project/Rectangle 53.png";
import influencer from "../../assets/img/project/Group 6.png";
import muslime from "../../assets/img/project/Group 8.png";
import personalPortfolio from "../../assets/img/project/Group 4.png";
import best from "../../assets/img/project/Group 13.png";
import BD from "../../assets/img/project/Group 10.png";
import BTS from "../../assets/img/project/Group 9.png";
import arc from "../../assets/img/project/Group 3.png";
import todo from "../../assets/img/project/Group 14.png";
import todoDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-48-36 Vite React TS.png";
import arcD from "../../assets/img/project/Screenshot 2023-08-29 at 14-48-11 Bauhaus Architecture.png";
import BTSD from "../../assets/img/project/Screenshot 2023-08-29 at 14-46-06 BTS.png";
import BDD from "../../assets/img/project/Screenshot 2023-08-29 at 14-45-03 CoursesBD.png";
import personalPortfolioHR from "../../assets/img/project/Group 16.png";
import personalPortfolioHRDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-43-36 HR Limon.png";
import personalPortfolioDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-41-53 Anisha Zahan.png";
import event from "../../assets/img/project/Eventrax.png";
import calculate from "../../assets/img/project/Rectangle 53.png";
import youtubeDetails from "../../assets/img/project/screencapture-youtube-vedio-downloader-orcin-vercel-app-2023-08-29-14_33_54.png";

export const data = [
  {
    id: "1",
    img: quize,
    detailsImg:
      "https://i.ibb.co/2M6mpYz/Screenshot-2022-11-30-at-21-40-16-Quiz-App.png",
    name: "Quiz App",
    description: [
      "Implement MVC architecture , Schema designs for questions and results, use Mongoose.",
      "If you don't enter your username, you will not be able to participate in the quiz,and show How many quizzes have you answered in total and your final achieved result.",
      "Use Custom hook, dynamic route, React Redux ,Load data dynamic way with loading.",
      "Use Tailwind. Beautiful UI design,Responsive for all devices.Clean code with necessary comments.",
    ],
    useTecnology: [
      "Tailwind",
      "Axios",
      "Redux",
      "Node Js",
      " Express Js",
      "Mongoose",
    ],
    live: "https://quiz-application.onrender.com/",
    code: "https://github.com/anishazahan/Quize-app",
    server: "https://github.com/anishazahan/Quiz-app-server",
    type: "Fullstack",
  },
  {
    id: "2",
    img: youtube,
    detailsImg: youtubeDetails,
    name: "Youtube Video Download",
    description: [
      "Give in input Youtube video url link,select regulation and click download button",
    ],
    useTecnology: ["Tailwind", "Next Js", "Typescript", "Axios", "Node Js"],
    live: "https://quiz-application.onrender.com/",
    code: "https://github.com/anishazahan/Quize-app",
    server: "https://github.com/anishazahan/Quiz-app-server",
    type: "Fullstack",
  },
  {
    id: "12",
    img: best,
    detailsImg:
      "https://i.ibb.co/Qvt47fj/Screenshot-2022-11-30-at-19-51-19-React-App.png",
    name: "Best Choice",
    description: [
      "Using React router ,Tailwind, DaisyUI,Responsive for all devices.MVC architecture,schema design.",
      "Clean code with necessary comments. Authentication system implement and protected route add.",
      "Use Custom hook, dynamic route, Swiper slider.Load data dynamic way.",
      "Beautiful UI design,Clean code with necessary comments.",
    ],
    useTecnology: [
      "Tailwind",
      "React router",
      "Axios",
      "Swiper slider",
      "Node Js",
      " Express Js",
      "Mongoose",
    ],
    live: "https://best-choice-a3d8e.firebaseapp.com/",
    code: "https://github.com/anishazahan/Best-Choice",
    server: "https://github.com/anishazahan/Best-Choice-server",
    type: "Fullstack",
  },

  {
    id: "12",
    img: BD,
    detailsImg: BDD,
    name: "BD Courses",
    description: [
      "Using React router ,Tailwind, DaisyUI,Responsive for all devices.",
      "Clean code with necessary comments. Authentication system implement and protected route add.",
      "Use Custom hook, dynamic route, Swiper slider.Load data dynamic way.",
      "Beautiful UI design,Clean code with necessary comments.",
    ],
    useTecnology: [
      "Tailwind",
      "React router",
      "Axios",
      "Swiper slider",
      "Moment js",
      "Aos animation",
    ],
    live: "https://best-choice-a3d8e.firebaseapp.com/",
    code: "https://github.com/anishazahan/Best-Choice",
    server: "https://github.com/anishazahan/Best-Choice-server",
    type: "Frontend",
  },

  {
    id: "11",
    img: event,
    detailsImg: event,
    name: "Eventrox",
    description: [
      "Using Tailwind, Next Js for good performance optimization",
      "Cross browser operability,Responsive design for all devices.",
      "Process improvement,workflow optimization.User Requirement Gathering.",
      "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
    ],
    useTecnology: ["Tailwind", "Next Js", "Aos animation", "Swiper slide"],
    live: "https://muslim-ummah-3d299.web.app/",
    code: "https://github.com/anishazahan/Muslime-Ummah",
    server: "https://github.com/anishazahan/Muslime-Ummah-server",
    type: "Frontend",
  },

  {
    id: "11",
    img: muslime,
    detailsImg:
      "https://i.ibb.co/CV9pjTN/Screenshot-2022-11-30-at-08-19-28-Muslime-Ummah.png",
    name: "Muslime Ummah",
    description: [
      "Using Tailwind, React-Redux, Moment .js for using dynamic date in events route.",
      "Cross browser operability,Responsive design for all devices.",
      "Process improvement,workflow optimization.User Requirement Gathering.",
      "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
    ],
    useTecnology: [
      "Tailwind",
      "Next Js",
      "Axios",
      "Redux",
      "Moment js",
      "Swiper slide",
      "Node Js",
      " Express Js",
      "Mongoose",
    ],
    live: "https://muslim-ummah-3d299.web.app/",
    code: "https://github.com/anishazahan/Muslime-Ummah",
    server: "https://github.com/anishazahan/Muslime-Ummah-server",
    type: "Frontend",
  },

  {
    id: "12",
    img: todo,
    detailsImg: todoDetails,
    name: "Todo App React Typescript",
    description: [
      "User add todo",
      "User delete todo",
      "Beautiful Design",
      "Responsive Design",
    ],
    useTecnology: ["Html", "Css", "Tailwind"],
    live: "https://best-choice-a3d8e.firebaseapp.com/",
    code: "https://github.com/anishazahan/Best-Choice",
    server: "https://github.com/anishazahan/Best-Choice-server",
    type: "Frontend",
  },

  {
    id: "11",
    img: personalPortfolioHR,
    detailsImg: personalPortfolioHRDetails,
    name: "Personal Portfolio(HR)",
    description: [
      "Cross browser operability,Responsive design for all devices.",
      "Process improvement,workflow optimization.User Requirement Gathering.",
      "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
    ],
    useTecnology: ["Tailwind", "React Js", "Aos animation", "Swiper slide"],
    live: "https://muslim-ummah-3d299.web.app/",
    code: "https://github.com/anishazahan/Muslime-Ummah",
    server: "https://github.com/anishazahan/Muslime-Ummah-server",
    type: "Frontend",
  },

  {
    id: "11",
    img: personalPortfolio,
    detailsImg: personalPortfolioDetails,
    name: "Personal Portfolio",
    description: [
      "Using Tailwind, Next Js for good performance optimization",
      "Cross browser operability,Responsive design for all devices.",
      "Process improvement,workflow optimization.User Requirement Gathering.",
      "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
    ],
    useTecnology: ["Tailwind", "Next Js", "Aos animation", "Swiper slide"],
    live: "https://muslim-ummah-3d299.web.app/",
    code: "https://github.com/anishazahan/Muslime-Ummah",
    server: "https://github.com/anishazahan/Muslime-Ummah-server",
    type: "Frontend",
  },

  // {
  //     "id":"8",
  //     "img":"https://i.ibb.co/RcFjD8D/Screenshot-2022-11-30-at-22-16-31-Form-with-SASS.png",
  //     "name":"form-styling-with-sass",
  //     "description":[
  //         "Beautiful Design",
  //         "Responsive Design",
  //         "adding Sass",
  //         "Using raw html css code"
  //     ],
  //     "useTecnology":[
  //         "Html","CSS","SASS"
  //     ],
  //     "live":"https://form-styling-with-sass.vercel.app/",
  //     "code":"https://github.com/anishazahan/form-styling-with-sass",
  //     "server":""
  // },
  // {
  //     "id":"9",
  //     "img":"https://i.ibb.co/cxZ4d41/Screenshot-2022-11-30-at-22-30-12-React-App.png",
  //     "name":"Crypto Cafe",
  //     "description":[
  //         "Beautiful Design",
  //         "Responsive Design",
  //         "Fetch Data with react hook",
  //         "Dynamicaly coin details data load"
  //     ],
  //     "useTecnology":[
  //         "Html","CSS","React","React-Router","React-Hook"
  //     ],
  //     "live":"https://form-styling-with-sass.vercel.app/",
  //     "code":"https://github.com/anishazahan/Country-app",
  //     "server":""
  // },

  {
    id: "10",
    img: influencer,
    detailsImg:
      "https://i.ibb.co/gywTnBB/Screenshot-2022-12-01-at-16-42-12-Influencer-Gears.png",
    name: "Influencer-Gear",
    description: [
      "Beautiful Design",
      "Responsive Design",
      "Using Fontawesome icons",
      "raw html and css code",
      "css grid system implement",
    ],
    useTecnology: ["Html", "CSS", "Fontawesome"],
    live: "https://influencer-gear-kappa.vercel.app/",
    code: "https://github.com/anishazahan/Influencer-Gear",
    server: "",
    type: "Frontend",
  },

  //   {
  //     id: "3",
  //     img: calculate,
  //     detailsImg: calculate,
  //     name: "Saving Calculate",
  //     description: [
  //       "This is saving manangement calculate app",
  //       "You can Calculate in How much money do you spend from your total income",
  //       "If your expenses are more than your gross income, it will show in your remaining balance.",
  //       "If your expenses are less than your gross income, it will show in your savings balance.",
  //     ],
  //     useTecnology: ["html", "Css", "Javascript(es6)"],
  //     live: "https://nostalgic-joliot-c1bf7a.netlify.app/",
  //     code: "https://github.com/anishazahan/Saving-Calculate",
  //     server: "",
  //     type: "Frontend",
  //   },

  {
    id: "12",
    img: BTS,
    detailsImg: BTSD,
    name: "BTS Service",
    description: [
      "Beautiful Design",
      "Responsive Design",
      "Using Fontawesome icons",
      "raw html and css code",
      "css grid system implement",
    ],
    useTecnology: ["Html", "Css", "Tailwind"],
    live: "https://best-choice-a3d8e.firebaseapp.com/",
    code: "https://github.com/anishazahan/Best-Choice",
    server: "https://github.com/anishazahan/Best-Choice-server",
    type: "Frontend",
  },
  {
    id: "12",
    img: arc,
    detailsImg: arcD,
    name: "Architecture Service",
    description: [
      "Beautiful Design",
      "Responsive Design",
      "Using Fontawesome icons",
      "raw html and css code",
      "css grid system implement",
    ],
    useTecnology: ["Html", "Css", "Tailwind"],
    live: "https://best-choice-a3d8e.firebaseapp.com/",
    code: "https://github.com/anishazahan/Best-Choice",
    server: "https://github.com/anishazahan/Best-Choice-server",
    type: "Frontend",
  },
];
