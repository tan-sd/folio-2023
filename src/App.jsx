import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Screen } from "./components/Screen";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";
import { Experience } from "./experience/Experience";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { CloseProject } from "./components/CloseProject";
import { LoadingScreen } from "./components/LoadingScreen";

import { projectsData } from "./utils/projectsData";
import { Canvas } from "@react-three/fiber";

function App() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [disableStatus, setDisableStatus] = useState(false);
    const [introCompleted, setIntroCompleted] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const toggleAbout = () => {
        setIsAboutVisible(!isAboutVisible);
    };

    const toggleProject = (projectName) => {
        setSelectedProject(projectName);
    };

    const toggleDisableStatus = () => {
        setDisableStatus(!disableStatus);
    };

    const handleIntroCompleted = () => {
        setIntroCompleted(true);
    };

    return (
        <>
            <Navbar
                isNavVisible={isNavVisible}
                onNavButtonClick={toggleNav}
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
                isAboutVisible={isAboutVisible}
                onAboutButtonClick={toggleAbout}
                introStatus={introCompleted}
            />
            <div className="canvas-container">
                <Canvas>
                    <Screen
                        isMenuVisible={isMenuVisible}
                        isAboutVisible={isAboutVisible}
                        selectedProject={selectedProject}
                    />
                </Canvas>
            </div>
            <Menu
                onNavButtonClick={toggleNav}
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
                projectsData={projectsData}
                selectedProject={selectedProject}
                onProjectButtonClick={toggleProject}
            />
            {projectsData.map((project, index) => (
                <Project
                    key={index}
                    projectName={project.name}
                    projectText={project.text}
                    projectTools={project.tools}
                    projectLinks={project.links}
                    projectPanel={project.panel}
                    projectModel={project.canvas}
                    selectedProject={selectedProject}
                    disableStatus={disableStatus}
                    onDisableButtonClick={toggleDisableStatus}
                />
            ))}
            <Experience selectedProject={selectedProject} />
            <About
                onNavButtonClick={toggleNav}
                isAboutVisible={isAboutVisible}
                onAboutButtonClick={toggleAbout}
            />
            <Footer isNavVisible={isNavVisible} introStatus={introCompleted} />
            <CloseProject
                selectedProject={selectedProject}
                onProjectButtonClick={toggleProject}
                onMenuButtonClick={toggleMenu}
                disableStatus={disableStatus}
                onDisableButtonClick={toggleDisableStatus}
            />
            <LoadingScreen onCompleted={handleIntroCompleted} />
        </>
    );
}

export default App;
