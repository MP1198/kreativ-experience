import React from "react";
import "./DotsColor.scss";
import { useEffect, useRef } from "react";
import anime from "animejs";

const DotsColor = () => {

    useEffect(() => {
        const container = document.querySelector(".dots-container");

        function animColors(event) {
            const dot = event.target;
            dot.removeEventListener("mouseenter", animColors);

            anime({
                targets: dot,
                backgroundColor: () => `rgba(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(0, 255)}, 1)`,
                duration: 1000,
                complete: () => {
                    setTimeout(() => {
                        dot.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                    }, 2000);
                    dot.addEventListener("mouseenter", animColors);
                }                
            });
        }

        function resetColor(event) {
            const dot = event.target;
            anime({
                targets: dot,
                backgroundColor: dot.style.backgroundColor,
                easing: 'linear',
                duration: 2000,
            });
        }

        const styleRandom = () => {
            
            let dotSize = Math.random() * (200 - 100) + 100;
            let posX = Math.random() * window.innerWidth;
            let posY = Math.random() * window.innerHeight;
            console.log(dotSize, posX, posY);
            
            return{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                left: `${posX}px`,
                top: `${posY}px`,
            };
        }

        
        const nbDots = 100;
        for (let i = 0; i < nbDots; i++) {
            let dot = document.createElement("div");
            dot.classList.add("dot");
            let width = dot.style.width = styleRandom().width;
            dot.style.height = width;
            dot.style.left = styleRandom().left;
            dot.style.top = styleRandom().top;
            container.appendChild(dot);
            dot.addEventListener("mouseenter", animColors);
            dot.addEventListener("mouseleave", resetColor);
        }
        return () => {
            container.innerHTML = '';
            container.removeEventListener("mouseenter", animColors);
        };


    }, []);

    return (
        <div className="dots-bigContainer">
            <div className="dots-container">
            </div>
        </div>
    );
};

export default DotsColor;