import "./BtnPause.scss";
import { useRef, useState } from "react";
const BtnPause = ({handleAmbiance}) => {
  const barRef = useRef([]);
  const [isPlaying, setIsPlaying] = useState(true);

  const pauseSound = () => {
    if (isPlaying) {
      barRef.current.classList.add("btnPause-bar-pause");
    } else {
      barRef.current.classList.remove("btnPause-bar-pause");
    }
    handleAmbiance();
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="btnPause-container">
      <button className="btnPause-wave" onClick={pauseSound} ref={barRef}>
        <div className="btnPause-bar" ></div>
        <div className="btnPause-bar" ></div>
        <div className="btnPause-bar" ></div>
        <div className="btnPause-bar" ></div>
      </button>
    </div>
  );
};

export default BtnPause;
