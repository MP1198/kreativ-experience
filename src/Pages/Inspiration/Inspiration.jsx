import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Inspiration.scss";
import anime from "animejs";

// tu peux cliquer sur les lettres de manière indépendante
// des formes apparaissent (ch. lettre a une forme) - couleur random
// pos random et le but des de remplir la page
// afficher le nb de formes instanciées collectivement.
//OU !!! JE FAIT LES LETTRES DU MOT DE MANIÈRE ABSTRAITE ET LA DERNIÈRE LETTRE EFFACE TOUT LES FORMES
// OU !!! CERTAINES FORMES SONT ANIMÉES!! *GRILLES, ETC.
const Inspiration = ({isDown}) => {
  // z-index - random
  // couleur - random selon un tableau de couleurs
  // position - random
  // taille - random
  // rotation - random (incluant le z et la perspective)
  // position - random

  // cercles
  // carrés
  // triangles
  // lignes
  // grilles
  // formes abstraites
  // formes animées
  // cercles lignes
  // carrées lignes
  // donuts

  return (
    <div className="inspiration-container">
      <ChangePage isDown={isDown}/>
      <h1 className="inspiration-titre">
        <p className="inspiration-lettre">I</p>
        <p className="inspiration-lettre">n</p>
        <p className="inspiration-lettre">s</p>
        <p className="inspiration-lettre">p</p>
        <p className="inspiration-lettre">i</p>
        <p className="inspiration-lettre">r</p>
        <p className="inspiration-lettre">a</p>
        <p className="inspiration-lettre">t</p>
        <p className="inspiration-lettre">i</p>
        <p className="inspiration-lettre">o</p>
        <p className="inspiration-lettre">n</p>
      </h1>
    </div>
  );
};

export default Inspiration;
