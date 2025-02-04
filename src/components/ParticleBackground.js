import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(mediaQuery.matches ? "dark" : "light");

        const handleThemeChange = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleThemeChange);
        return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="-z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false }, // Disable full-page behavior
                    background: {
                        color: {
                            value: theme === "dark" ? "#0F172A" : "#F2F2F2",
                        },
                    },
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: theme === "dark" ? "#60A5FA" : "#3B82F6",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true,
                                speed: 0.5,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 0,
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: theme === "dark" ? "#60A5FA" : "#3B82F6",
                            opacity: 0.4,
                            width: 1,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes:{
                            repulse: {
                                distance: 65,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                        }
                    },
                    retina_detect: true,
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -10,
                }}
            />
        </div>
    );
};

export default ParticleBackground;
