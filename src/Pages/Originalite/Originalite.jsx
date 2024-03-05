import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Originalite.scss";
import anime from "animejs";
import { useEffect, useState, useRef } from "react";

// OnKeyDown toutes les couleurs changent et les lettres se melange
// Si shift est appyer en meme temps qu'un touche hue rotation
// Si une touche contenant une lettre du mot est appuyer alors le mot revient
// Si shift est appuyer en meme temps qu'une touche contenant une lettre du mot alors le mot fait un hueRotation

// le fond est un grid de cercle avec des gradients. Donc, liste de gradient
const Originalite = ({ isDown }) => {
  
  return (
    <div className="originalite-container">
      <ChangePage isDown={isDown} />
      <h1 className="originalite-titre">Originalité</h1>
    </div>

  );

};
      
export default Originalite;
