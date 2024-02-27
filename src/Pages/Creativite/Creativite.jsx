import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Creativite.scss";
import ClickParticules from "../../Components/ClickParticules/ClickParticules";

const Creativite = ({isDown}) => {
  return (
    <div className="creativite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="creativite-titre">Créativité</h1>
      <ClickParticules />
    </div>
  );
};

export default Creativite;
