import "./BackgroundBlocks.scss";
import { useEffect } from "react";
import anime from "animejs";

const BackgroundBlocks = () => {
    useEffect(() => {
        const container = document.querySelector(".bgb-container");
        function animBlocks() {
            const blocks = Array.from(document.querySelectorAll(".bgb-block"));
            blocks.forEach((block) => {
                console.log(block);
                anime({
                    targets: block,
                    translateX: ()=>anime.random(-900, 900),
                    translateY: ()=>anime.random(-500, 500),
                    scale: ()=>anime.random(1, 5),
                    duration: 2000,
                });
            });
        }
        
        container.addEventListener("mouseenter", animBlocks);
        
        const nbBox = 100;
        for (let i = 0; i < nbBox; i++) {
            let block = document.createElement("div");
            block.classList.add("bgb-block");
            container.appendChild(block);
        }
        return () => {
            container.innerHTML = '';
            container.removeEventListener("mouseenter", animBlocks);
        };


    }, []);
    

  return (
    <div className="bgb-bigContainer">
        <div className="bgb-container"></div>
    </div>
  );
};

export default BackgroundBlocks;