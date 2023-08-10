import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const toggleAbout = () => {
        setIsAboutVisible(!isAboutVisible);
    };

    return (
        <>
            <Navbar
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
                isAboutVisible={isAboutVisible}
                onAboutButtonClick={toggleAbout}
            />
            <Menu
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
            />
            <About
                isAboutVisible={isAboutVisible}
                onAboutButtonClick={toggleAbout}
            />
            <Footer isMenuVisible={isMenuVisible} />
        </>
    );
}

export default App;
