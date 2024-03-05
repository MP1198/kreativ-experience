import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Inspiration.scss";
import anime from "animejs";
import { useEffect, useState, useRef } from "react";

const Inspiration = ({ isDown }) => {
  
  return (
    <div className="inspiration-container">
      <ChangePage isDown={isDown} />
      <h1 className="inspiration-titre">Inspiration</h1>
    </div>

  );

};
      
export default Inspiration;
