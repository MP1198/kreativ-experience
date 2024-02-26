
import "./BgAccueil.scss";
import React, { useEffect, useState, useRef} from "react";

const BgAccueil = () => {
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const interactifRef = useRef(null);
    const lerpSpeed = 2;
  
    useEffect(() => {

      function handleMouseMove(e) {
        setCurX(e.clientX);
        setCurY(e.clientY);

        const interactif = interactifRef.current;

        const dx = e.clientX - curX;
        const dy = e.clientY - curY;

        const newX = curX + dx / lerpSpeed;
        const newY = curY + dy / lerpSpeed;

        setCurX(newX);
        setCurY(newY);

        if (interactif) {
          interactif.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
      }
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [curX, curY]);

  return (
    <div className="bg-gradient">
        
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>

        <div className="gradients-container">
            <div className="gradient1"></div>
            <div className="gradient2"></div>
            <div className="gradient3"></div>
            <div className="gradient4"></div>
            <div className="gradient5"></div>
            <div className="interactif" ref={interactifRef}></div>
        </div>
    </div>
  );
};

export default BgAccueil;