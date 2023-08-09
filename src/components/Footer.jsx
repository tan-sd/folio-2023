import { useRef } from "react";

export const Footer = () => {
    const secondaryRef = useRef(null);

    return (
        <div className="footer oh">
            <span className="oh__inner" ref={secondaryRef}>
                © 2023 Tan Sheng Da
            </span>
        </div>
    );
};
