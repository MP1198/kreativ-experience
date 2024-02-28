import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./Experimentation.scss";
import ChangePage from "../../Components/ChangePage/ChangePage";


const Experimentation2 = ({isDown}) => {
    
    const cibleRef = useRef(null);
    const composantsRefs = useRef([]);
    useEffect(() => {
        const lettres = Array.from(document.querySelectorAll("h1 .experimentation-lettres"));
        
        let estEnAnimation = false;
        let estEnLeave = false;
        let animEnCours = false;
        
        //     function handleLetters(){
            //         if(animEnCours){
                //             hoverLeave();
                //             animEnCours = false;
                //             return;
                //         }
                
                //         if (animEnCours) {
                    //             estEnLeave = true;
                    //             return;
                    //         }
                    //         estEnAnimation = true;
                    //         const animPromise = new Promise((resolve) => {
                        //             hoverEnter();
                        //             setTimeout(() => {
                            //                 resolve();
                            //             }, 1000);
                            //         })
                            //         animPromise.then(() => {
                                //             estEnAnimation = false;
    //             if (estEnLeave) {
        //                 hoverLeave();
        //                 estEnLeave = false;
        //             }else if(!estEnLeave){
    //                 animEnCours = true;
    //             }
    //         });
    // }

        const timerExplosion = setTimeout(() => {
            explosion();
        }, 2000);

        function explosion() {

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
        
        function recomposition() {
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
            
            
        const handleCible = (e) =>{
            if(e.target === cibleRef.current){
                recomposition();
            }else{
                explosion();
                console.log(e);
                const test = document.createElement("div");
                test.addClasslist("experimentation-tire")
                test.style.left = e.clientX + "px";
                test.style.top = e.clientY + "px";
                e.target.appendChild(test);
            }
        }   
        
        cibleRef.current.addEventListener("mousedown", handleCible);
        composantsRefs.current.addEventListener("mousedown", handleCible);
        
        return () => {
            cibleRef.current.removeEventListener("mousedown", handleCible);
            composantsRefs.current.removeEventListener("mousedown", handleCible);
        };
        
    }, []);
    // rendu a ajouter la class au div instancier par les cliques
    return (
        <div className="experimentation-container" ref={composantsRefs}>
            <ChangePage isDown={isDown}/>
            <h1 className="experimentation-titre" ref={composantsRefs}>
                <p className="experimentation-lettres" ref={composantsRefs}>E</p>
                <p className="experimentation-lettres" ref={composantsRefs}>x</p>
                <p className="experimentation-lettres" ref={composantsRefs}>p</p>
                <p className="experimentation-lettres" ref={composantsRefs}>é</p>
                <p className="experimentation-lettres" ref={composantsRefs}>r</p>
                <p className="experimentation-lettres" ref={composantsRefs}>i</p>
                <p className="experimentation-lettres" ref={composantsRefs}>m</p>
                <p className="experimentation-lettres" ref={composantsRefs}>e</p>
                <p className="experimentation-lettres" ref={composantsRefs}>n</p>
                <p className="experimentation-lettres" ref={composantsRefs}>t</p>
                <p className="experimentation-lettres" ref={composantsRefs}>a</p>
                <p className="experimentation-lettres" ref={composantsRefs}>t</p>
                <p className="experimentation-lettres" ref={composantsRefs}>i</p>
                <p className="experimentation-lettres" ref={composantsRefs}>o</p>
                <p className="experimentation-lettres" ref={composantsRefs}>n</p>
            </h1>
            <div className="experimentation-cible" ref={cibleRef}></div>
        </div>
    );
};

export default Experimentation2;
