import "./Accueil.scss";
import BgAccueil from "../../Components/BgAccueil/BgAccueil";
import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";

const Accueil = ({isDown}) => {
  return (
    <div className="accueil-page">
        <svg>
            <filter id="grainy">
                <feTurbulence
                  type="turbulence"
                  baseFrequency={0.65}
                />
            </filter>
            
        </svg>
        <BgAccueil/>
        <div className="accueil-container">
            <h1 className="accueil-titre">Kreativ</h1>
            <h2 className="accueil-slogan">Expérience interactive</h2>
        </div>
        <ChangePage isDown={isDown}/>
        <Instruction texte={"Maintenez la barre d'espacement enfoncée"} delais={90000} delaisOut={30000}/>
    </div>
  );
};

export default Accueil;