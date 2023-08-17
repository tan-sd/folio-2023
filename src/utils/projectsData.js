import { fetchPokemon } from "./fetchPokemon";
import bojioLogoImg from "../assets/image/projects/bojio/bojio-logo.png";
import makanbolehLogoImg from "../assets/image/projects/makanboleh/makanboleh-logo.png";
import mernfolioLogoImg from "../assets/image/projects/mernfolio/mernfolio-logo.png";
import tasktopiaLogoImg from "../assets/image/projects/tasktopia/tasktopia-logo.png";

const setImgList = (img) => {
    const imgList = [];
    for (let i = 0; i < 10; i++) {
        imgList.push(img);
    }
    return imgList;
};

export const projectsData = [
    {
        name: "PokéGen",
        text: "My first ever web application that uses REST to retrieve random Pokémon names, IDs, and images sourced from the PokéAPI.",
        tools: [
            {
                name: "HTML",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                name: "JavaScript",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
        ],
        links: [
            {
                name: "Website",
                link: "https://tan-sd.github.io/pokegen/",
            },
            {
                name: "Github",
                link: "https://github.com/tan-sd/pokemon-random-generator",
            },
        ],
        panel: [
            {
                img: fetchPokemon(10),
                size: "5rem",
            },
        ],
    },
    {
        name: "BOJIO",
        text: "A vibrant social platform for Singaporeans to connect, discover events, and cultivate relationships. Users can join and organize 'jios' based on personal interests, ensuring a fulfilling social experience.",
        tools: [
            {
                name: "Vue",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            },
            {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            {
                name: "ThreeJS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
            },
            {
                name: "Firebase",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
        ],
        links: [
            {
                name: "Website",
                link: "https://bojio.netlify.app/",
            },
            {
                name: "Github",
                link: "https://github.com/tan-sd/bojio",
            },
        ],
        panel: [
            {
                img: setImgList(bojioLogoImg),
                size: "1.5rem",
            },
        ],
    },
    {
        name: "MERNfolio",
        text: "A capstone project from SMU .Hack MERN Stack Series, leveraging the immense potential of the MERN stack to develop a comprehensive web application.",
        tools: [
            {
                name: "MongoDB",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
                name: "React",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Express",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
                name: "NodeJS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
            },
            {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            {
                name: "CSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
        ],
        links: [
            {
                name: "Website",
                link: "https://tan-sd.github.io/mern-portfolio/",
            },
            {
                name: "Github",
                link: "https://github.com/tan-sd/mern-portfolio",
            },
        ],
        panel: [
            {
                img: setImgList(mernfolioLogoImg),
                size: "3.5rem",
            },
        ],
    },
    {
        name: "MakanBoleh",
        text: "This microservice application promotes community sharing of free food to combat food wastage. Users can share and explore available offerings.",
        tools: [
            {
                name: "Vue",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            },
            {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            {
                name: "Firebase",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
            {
                name: "Docker",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
                name: "Flask",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            },
        ],
        links: [
            {
                name: "YouTube",
                link: "https://www.youtube.com/watch?v=FqJ4LMRt8E4",
            },
            {
                name: "Github",
                link: "https://github.com/tan-sd/makan-boleh",
            },
        ],
        panel: [
            {
                img: setImgList(makanbolehLogoImg),
                size: "2rem",
            },
        ],
    },
    {
        name: "Tasktopia",
        text: "A mobile application that gamifies employee engagement and productivity. Nurture virtual pets, complete tasks, and claim rewards.",
        tools: [
            {
                name: "React",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Expo",
                img: "https://cdn.cdnlogo.com/logos/e/72/expo-go-app.svg",
            },
            {
                name: "ThreeJS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
            },
            {
                name: "Firebase",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
        ],
        links: [
            {
                name: "YouTube",
                link: "https://www.youtube.com/watch?v=RlHZ63VFuDM",
            },
            {
                name: "Github",
                link: "https://github.com/tan-sd/tasktopia",
            },
        ],
        panel: [
            {
                img: setImgList(tasktopiaLogoImg),
                size: "3rem",
            },
        ],
    },
];
