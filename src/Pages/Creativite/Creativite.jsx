import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Creativite.scss";

const Creativite = ({isDown}) => {
  return (
    <div className="creativite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="creativite-titre">Créativité</h1>
    </div>
  );
};

export default Creativite;
