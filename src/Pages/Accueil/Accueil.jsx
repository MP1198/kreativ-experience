import "./Accueil.scss";
import BgAccueil from "../../Components/BgAccueil/BgAccueil";
import ChangePage from "../../Components/ChangePage/ChangePage";

const Accueil = () => {
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
            <h2 className="accueil-slogan">Exprérience Intéractive</h2>
        </div>
        <ChangePage/>
    </div>
  );
};

export default Accueil;