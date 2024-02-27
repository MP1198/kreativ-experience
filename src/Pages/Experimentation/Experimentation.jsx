import React, { useEffect } from "react";
import anime from "animejs";
import "./Experimentation.scss";
import ChangePage from "../../Components/ChangePage/ChangePage";


const Experimentation = ({isDown}) => {
    
    useEffect(() => {
        const h1 = document.querySelector("h1.experimentation-titre");
        const lettres = Array.from(document.querySelectorAll("h1 .experimentation-lettres"));

        let estEnAnimation = false;
        let estEnLeave = false;
        let animEnCours = false;

        function handleLetters(){
            if(animEnCours){
                hoverLeave();
                animEnCours = false;
                return;
            }

            if (animEnCours) {
                estEnLeave = true;
                return;
            }
            estEnAnimation = true;
            const animPromise = new Promise((resolve) => {
                hoverEnter();
                setTimeout(() => {
                    resolve();
                }, 1000);
            })
            animPromise.then(() => {
                estEnAnimation = false;
                if (estEnLeave) {
                    hoverLeave();
                    estEnLeave = false;
                }else if(!estEnLeave){
                    animEnCours = true;
                }
            });
    }

        function hoverEnter() {

            anime({
                targets: lettres,
                translateX: () => anime.random(-150, 150),
                translateY: () => anime.random(-150, 150),
                translateZ: () => anime.random(-2000, 750),
                rotate: () => anime.random(-250, 250),
                easing: 'easeOutElastic(1, 2)',
                duration: 750,
            }); 
        }
        function hoverLeave() {
            anime({
                targets: lettres,
                translateX: 0,
                translateY: 0,
                translateZ: 0,
                rotate: 0,
                easing: 'easeInElastic(1, 2)',
                duration: 750,
            }); 
            console.log(lettres);
        }

        h1.addEventListener("mouseenter", handleLetters);
        h1.addEventListener("mouseleave", handleLetters);
        
        return () => {
            h1.removeEventListener("mouseenter", handleLetters);
            h1.removeEventListener("mouseleave", handleLetters);
        };

    }, []);

    return (
        <div className="experimentation-container">
            <ChangePage isDown={isDown}/>
            <h1 className="experimentation-titre">
                <p className="experimentation-lettres">E</p>
                <p className="experimentation-lettres">x</p>
                <p className="experimentation-lettres">p</p>
                <p className="experimentation-lettres">é</p>
                <p className="experimentation-lettres">r</p>
                <p className="experimentation-lettres">i</p>
                <p className="experimentation-lettres">m</p>
                <p className="experimentation-lettres">e</p>
                <p className="experimentation-lettres">n</p>
                <p className="experimentation-lettres">t</p>
                <p className="experimentation-lettres">a</p>
                <p className="experimentation-lettres">t</p>
                <p className="experimentation-lettres">i</p>
                <p className="experimentation-lettres">o</p>
                <p className="experimentation-lettres">n</p>
            </h1>
        </div>
    );
};

export default Experimentation;
