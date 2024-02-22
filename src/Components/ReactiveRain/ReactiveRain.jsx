
import "./ReactiveRain.scss";
import { useEffect, useRef } from "react";
// 4:45 tutorial
const ReactiveRain = () => {
    const nbDroplets = 10;
    const dropletsRef = useRef([]);
    const createDroplets = Array.from({length: nbDroplets});

    const styleRandom = () => {
        let dropSize = (Math.floor(Math.random() * 5))+0.2;
        let posX = Math.floor(Math.random() * window.innerWidth);

        return{
            width: `${dropSize}px`,
            left: `${posX}px`,
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