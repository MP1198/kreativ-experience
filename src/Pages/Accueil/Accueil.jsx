import "./Accueil.scss";
import BgAccueil from "../../Components/BgAccueil/BgAccueil";

const Accueil = () => {
  return (
    <>
        <BgAccueil/>
        <div className="accueil-container">
            <h1 className="accueil-titre">Kreativ</h1>
            <h2 className="accueil-slogan">Exprérience Intéractive</h2>
        </div>
    </>
  );
};

export default Accueil;