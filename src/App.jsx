import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <Navbar
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
            />
            <Menu
                isMenuVisible={isMenuVisible}
                onMenuButtonClick={toggleMenu}
            />
            <Footer isMenuVisible={isMenuVisible} />
        </>
    );
}

export default App;
