import deadInsideGames from "../assets/deadInsideGames.png";
import marvelForDummies from "../assets/MFD.png";
import passwordGen from "../assets/passwordGen.png";

 const projectList = [
  {
    id: 0,
    name: "Dead Inside Games",
    technologies: "MongoDB, Mongoose, GraphQL, Express.js, Node.js, React",
    github: "https://github.com/Dev-Devin/Dead-inside-games-new",
    deployed: "https://desolate-stream-37841.herokuapp.com/signup",
    image: deadInsideGames,
  },

  {
    id: 1,
    name: "Marvel for Dummies",
    technologies: "HTML, CSS, JavaScript, Client & Server Side APIs",
    github: "https://github.com/Dev-Devin/marvel-for-dummies",
    deployed: " https://dev-devin.github.io/marvel-for-dummies/",
    image: marvelForDummies,
  },

  {
    id: 2,
    name: "Password Generator",
    technologies: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize",
    github: "https://github.com/Dev-Devin/New-PASSWORD-GEN",
    deployed: "https://dev-devin.github.io/New-PASSWORD-GEN/",
    image: passwordGen,
  },
];

export default projectList;