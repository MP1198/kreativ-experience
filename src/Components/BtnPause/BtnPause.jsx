import "./BtnPause.scss";
import {useRef} from "react";
const BtnPause = () => {
    const barRef = useRef([]);
  let isPlaying = true;
  const ambiance = new Audio("../public/sons/KreativMusic.wav");
  const pauseSound = () => {
    if (isPlaying) {
        isPlaying = false;
      ambiance.pause();
      barRef.forEach(bar => {
        bar.classList.add("btnPause-bar-pause")
      });
    } else {
      isPlaying = true;
      ambiance.loop = true;
      ambiance.volume = 0.2;
      ambiance.pause();
      barRef.forEach(bar => {
        bar.classList.remove("btnPause-bar-pause")
      });
    }
  };
  return (
    <div className="btnPause-container">
      <button className="btnPause-wave" onClick={pauseSound}>
        <div className="btnPause-bar" ref={barRef}></div>
        <div className="btnPause-bar" ref={barRef}></div>
        <div className="btnPause-bar" ref={barRef}></div>
        <div className="btnPause-bar" ref={barRef}></div>
      </button>
    </div>
  );
};

export default BtnPause;
