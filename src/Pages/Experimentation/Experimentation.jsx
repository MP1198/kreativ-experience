import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./Experimentation.scss";
import ChangePage from "../../Components/ChangePage/ChangePage";

    // Après les tests
    // mettre un bouton pour recommencer au lieu de le faire automatiquement

const awaitAnimation = (objetAnimation) => {
    const promise = new Promise((resolve, reject) => {
        anime({...objetAnimation, complete: () => resolve()});
    });
    return promise;
};

const delay = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) };



const Experimentation2 = ({ isDown }) => {

    const cibleRef = useRef(null);
    const composantsRefs = useRef([]);
    const timeoutExplosion = useRef();
    let detectClick = false;

    useEffect(() => {
        const lettres = Array.from(document.querySelectorAll("h1 .experimentation-lettres"));
        let tireEl;

        const posRandomCible = () => {
            
            if (cibleRef.current) {
                const positionX = anime.random(85, window.innerWidth) - 75;
                const positionY = anime.random(85, window.innerHeight) - 75;

                cibleRef.current.style.left = `${positionX}px`;
                cibleRef.current.style.top = `${positionY}px`;
            }
        }


        const timerExplosion = async () => {
            timeoutExplosion.current = await awaitAnimation(setTimeout(() => {
                explosion();
                posRandomCible();
                fadeOutCible();
            }, 500));
            cibleRef.current.addEventListener("mousedown", handleCible);
            composantsRefs.current.addEventListener("mousedown", handleCible);

        };

        function explosion() {
            return anime({
                targets: lettres,
                translateX: () => anime.random(-150, 150),
                translateY: () => anime.random(-150, 150),
                translateZ: () => anime.random(-2000, 750),
                rotate: () => anime.random(-250, 250),
                easing: 'easeOutElastic(1, 2)',
                duration: 750,
            });
        }

        function destroyTire() {
            const tires = document.querySelectorAll(".experimentation-tire");
            tires.forEach(tire => {
                tire.remove();
            });
        }

        function fadeTire() {
            const tires = document.querySelectorAll(".experimentation-tire");
            tires.forEach(tire => {
                anime({
                    targets: tire,
                    opacity: 0,
                    easing: 'easeInOutSine',
                    duration: () => anime.random(500, 1250),
                    complete: () => {
                        destroyTire();
                    }
                });
            });
        }
        function fadeInCible() {
            anime({
                targets: cibleRef.current,
                opacity: 1,
                easing: 'easeInOutSine',
                duration: () => anime.random(500, 1250),

            });
        }
        function fadeOutCible() {
             return anime({
                targets: cibleRef.current,
                opacity: 0,
                easing: 'easeInOutSine',

            });
        }

        function recomposition() {
            return anime({
                targets: lettres,
                translateX: 0,
                translateY: 0,
                translateZ: 0,
                rotate: 0,
                easing: 'easeInElastic(1, 2)',
                duration: 750,

            });

        }

        
        function calculerCouleur(e) {
            const sourisX = e.clientX;
            const sourisY = e.clientY;

            const pointCible = cibleRef.current.getBoundingClientRect();
            const centreX = pointCible.left + pointCible.width / 2;
            const centreY = pointCible.top + pointCible.height / 2;

            const distance = Math.sqrt(Math.pow(sourisX - centreX, 2) + Math.pow(sourisY - centreY, 2));
            const maxDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
            const ratio = distance / maxDistance;
            
            const bleu = Math.round(255 * ratio);
            const rouge = Math.round(255 * (1 - ratio));
            const couleur = `rgb(${rouge}, 0, ${bleu})`;
            return couleur;
        }

        const creationTire = (e) => {
            tireEl = document.createElement("div");
            const kid1 = document.createElement("span");
            const kid2 = document.createElement("span");
            const kid3 = document.createElement("span");
            const kid4 = document.createElement("span");
            tireEl.appendChild(kid1);
            tireEl.appendChild(kid2);
            tireEl.appendChild(kid3);
            tireEl.appendChild(kid4);
            tireEl.classList.add("experimentation-tire");
            tireEl.style.left = e.clientX + "px";
            tireEl.style.top = e.clientY + "px";
            tireEl.style.zIndex = "-200000";
            kid1.style.backgroundColor = calculerCouleur(e);
            kid2.style.backgroundColor = calculerCouleur(e);
            kid3.style.backgroundColor = calculerCouleur(e);
            kid4.style.backgroundColor = calculerCouleur(e);
            e.target.appendChild(tireEl);
        }

        const handleCible = async (e) => {
            if (e.target === cibleRef.current) {
                cibleRef.current.removeEventListener("mousedown", handleCible);
                composantsRefs.current.removeEventListener("mousedown", handleCible);
                await awaitAnimation(recomposition());
                fadeTire();
                await awaitAnimation(fadeInCible());
                await delay(3000);
                await awaitAnimation(fadeOutCible());
                posRandomCible();
                await awaitAnimation(explosion());
                cibleRef.current.addEventListener("mousedown", handleCible);
                composantsRefs.current.addEventListener("mousedown", handleCible);
            } else {
                explosion();
                creationTire(e);
            }
        }
        
        timerExplosion();

        return () => {
            cibleRef.current.removeEventListener("mousedown", handleCible);
            composantsRefs.current.removeEventListener("mousedown", handleCible);
            if (timeoutExplosion.current) {
                clearTimeout(timeoutExplosion.current);
            }
        };


    }, []);

    return (
        <div className="experimentation-container" ref={composantsRefs}>
            <ChangePage isDown={isDown} />
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
            <div className="experimentation-cible" ref={cibleRef}>
                <span></span ><span></span> <span></span> <span></span>
            </div>
        </div>
    );
};

export default Experimentation2;
