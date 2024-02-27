import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Flexibilite.scss";


const Flexibilite = ({isDown}) => {
  return (
    <div className="flexibilite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="flexibilite-titre">Flexibilité</h1>
    </div>
  );
};

export default Flexibilite;
