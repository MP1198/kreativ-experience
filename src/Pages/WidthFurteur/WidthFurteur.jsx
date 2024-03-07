import "./WidthFurteur.scss";
import BgAccueil from "../../Components/BgAccueil/BgAccueil";

const WidthFurteur = () => {
  return (
    <div className="widthFurteur-container">
        <div className="widthFurteur-textes">
            <h1 className="widthFurteur-h1">Attention</h1>
            <p className="widthFurteur-p">La largeur de votre navigateur est inférieure à 992 pixels. <br/><br/>
            Veuillez agrandir la fenêtre ou changer d'appareil pour pouvoir continuer.</p>
            <BgAccueil />
        </div>
    </div>
  );
};

export default WidthFurteur;
