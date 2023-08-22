import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import SplitType from "split-type";
import wavinghand from "../assets/image/emoji/waving-hand.png";

export const About = ({
    onNavButtonClick,
    isAboutVisible,
    onAboutButtonClick,
}) => {
    const aboutWrapRef = useRef();
    const buttonWrapRef = useRef();
    const aboutTitleRef = useRef();
    const aboutTextRef = useRef();
    const aboutLinksRef = useRef([]);
    const aboutCloseCtrlRef = useRef();

    useEffect(() => {
        if (isAboutVisible) {
            aboutWrapRef.current.classList.add("about--open");
            buttonWrapRef.current.classList.add("about--open");
            gsap.to(aboutTextRef.current, {
                opacity: 1,
            });
            gsap.timeline({ defaults: { duration: 1.2, ease: "expo" } })
                .set(
                    [
                        aboutCloseCtrlRef.current,
                        aboutTitleRef.current,
                        aboutLinksRef.current,
                    ],
                    {
                        y: "150%",
                        rotate: 15,
                    }
                )
                .to(
                    [
                        aboutCloseCtrlRef.current,
                        aboutTitleRef.current,
                        aboutLinksRef.current,
                    ],
                    {
                        y: "0%",
                        rotate: 0,
                    }
                );

            const text = SplitType.create(aboutTextRef.current, {
                types: "words",
            });
            const words = text.words;

            gsap.fromTo(
                words,
                {
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power4.out",
                    delay: 0.5,
                }
            );
        }
    });

    const closeAbout = () => {
        gsap.to(aboutTextRef.current, {
            opacity: 0,
        });
        gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } })
            .to(
                [
                    aboutCloseCtrlRef.current,
                    aboutTitleRef.current,
                    aboutLinksRef.current,
                ],
                {
                    y: "-150%",
                    rotate: -5,
                    stagger: {
                        each: 0.06,
                        from: "start",
                    },
                }
            )
            .then(() => {
                aboutWrapRef.current.classList.remove("about--open");
                buttonWrapRef.current.classList.remove("about--open");
            });
    };

    return (
        <div className="about-container" ref={aboutWrapRef}>
            <div className="about">
                <div className="about-title oh">
                    <span className="oh__inner" ref={aboutTitleRef}>
                        Hi{" "}
                        <img
                            src={wavinghand}
                            alt="waving-hand"
                            style={{ height: "0.9em" }}
                        />
                        , I&apos;m
                        <span className="about-name"> Sheng Da</span>
                    </span>
                </div>
                <div className="about-text oh">
                    <p ref={aboutTextRef}>
                        I&apos;m a penultimate student at Singapore Management
                        University, pursuing a Bachelor in Information Systems.
                        With a diploma in Arts and Theatre Management from
                        Republic Polytechnic, I bring a unique blend of
                        creativity and technical expertise to my passion for web
                        development.
                    </p>
                </div>
                <div className="about-links">
                    <a
                        className="link oh"
                        href="https://www.linkedin.com/in/shengdatan"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: "1em" }}
                    >
                        <span
                            className="oh__inner"
                            ref={(el) => (aboutLinksRef.current[0] = el)}
                        >
                            LinkedIn
                        </span>
                    </a>
                    <a
                        className="link oh"
                        href="https://www.github.com/tan-sd"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: "1em" }}
                    >
                        <span
                            className="oh__inner"
                            ref={(el) => (aboutLinksRef.current[1] = el)}
                        >
                            Github
                        </span>
                    </a>
                    <a
                        className="link oh"
                        href="https://www.instagram.com/shengdaa"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: "1em" }}
                    >
                        <span
                            className="oh__inner"
                            ref={(el) => (aboutLinksRef.current[2] = el)}
                        >
                            Instagram
                        </span>
                    </a>
                    <a
                        className="link oh"
                        href="mailto:shengdatan@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: "1em" }}
                    >
                        <span
                            className="oh__inner"
                            ref={(el) => (aboutLinksRef.current[3] = el)}
                        >
                            Email
                        </span>
                    </a>
                </div>
            </div>
            <button
                className="close close--menu oh unbutton"
                aria-label="Close menu"
                ref={buttonWrapRef}
                onClick={() => {
                    closeAbout();
                    onAboutButtonClick();
                    onNavButtonClick();
                }}
            >
                <span className="oh__inner" ref={aboutCloseCtrlRef}>
                    &#10005;
                </span>
            </button>
        </div>
    );
};

About.propTypes = {
    onNavButtonClick: PropTypes.func.isRequired,
    isAboutVisible: PropTypes.bool.isRequired,
    onAboutButtonClick: PropTypes.func.isRequired,
};
