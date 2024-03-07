import "./UI.scss";

const UI = ({texte,nbDonnees}) => {
  return (
    <div>{texte}: {nbDonnees}</div>
  );
};

export default UI;