import "./UI.scss";

const UI = ({texte,nbDonnees}) => {
  return (
      <div className="ui">{texte}: {nbDonnees}</div>
  );
};

export default UI;