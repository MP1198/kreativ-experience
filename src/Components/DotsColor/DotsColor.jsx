import React from "react";
import "./DotsColor.scss";
import { useEffect } from "react";

const DotsColor = () => {
    const container = document.querySelector(".dots-container");
    const dots = [];
    const nbDots = 175;
    useEffect(()=>{
        
        function animColors() {
            const dots = Array.from(document.querySelectorAll(".dot"));
            console.log(dots);
            dots.forEach((dot) => {
                anime({
                    targets: dot,
                    backgroundColor: () => `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(0, 255)})`,
                    duration: 2000,
                });
            });
        }
        
        const styleRandom = () => {
            
            let dotSize = Math.random(40,200)*200;
            let posX = Math.floor(Math.random() * window.innerWidth);
            let posY = Math.floor(Math.random() * window.innerHeight);
            
            return{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                left: `${posX}px`,
                top: `${posY}px`,
            };
        }
        
        for (let i = 1; i <= nbDots; i++) {
            dots.push(<div className="dot" key={i} style={styleRandom()}></div>);
        }
        
        // container.addEventListener("mousehover", animColors);
    });
    
    return <div className="dots-container">{dots}</div>;
};

export default DotsColor;