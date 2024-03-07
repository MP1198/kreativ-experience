import "./Accueil.scss";
import BgAccueil from "../../Components/BgAccueil/BgAccueil";
import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Accueil = ({ isDown }) => {
  const navigate = useNavigate();
  const naviguer = () => {
    navigate("/avertissement");
  };

  useEffect(() =>{
    if(window.innerWidth < 992){
      naviguer();
    }
  
  })

  return (
    <div className="accueil-page">
      <svg>
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency={0.65} />
        </filter>
      </svg>
      <BgAccueil />
      <div className="accueil-container">
        <h1 className="accueil-titre">Kreativ</h1>
        <h2 className="accueil-slogan">Expérience interactive</h2>
      </div>
      <ChangePage isDown={isDown} />
      <Instruction
        texte={
          <>
            Maintenir la barre d'espacement enfoncée 
            <br /> 
            afin de naviguer entre les pages
          </>
        }
        delais={10000}
        delaisOut={30000}
      />
    </div>
  );
};

export default Accueil;
