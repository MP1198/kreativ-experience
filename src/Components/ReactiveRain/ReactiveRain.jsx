
import "./ReactiveRain.scss";
import { useRef } from "react";
const ReactiveRain = () => {
    const nbDroplets = 200;
    const dropletsRef = useRef([]);
    const createDroplets = Array.from({length: nbDroplets});

    const styleRandom = () => {
        let dropSize = (Math.random() * 5)+0.2;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        let z = Math.random() * 5;

        return{
            width: `${dropSize}px`,
            left: `${posX}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${1+duration}s`,
            zIndex: `${z}`,
        };
    }
    
  return (
    <div className="rr-bigContainer">
        <div className="rr-container">
            {createDroplets.map((drop, index) => {
                return (
                    <div className="rr-drop" 
                    ref={droplet => dropletsRef.current[index = droplet]} 
                    key={index} 
                    data={drop}
                    style={styleRandom()}></div>
                );
            })}
        </div>
    </div>
  );
};

export default ReactiveRain;