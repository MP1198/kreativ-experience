import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Originalite.scss";

const Originalite = ({isDown}) => {
  return (
    <div className="originalite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="originalite-titre">Originalité</h1>
    </div>
  );
};

export default Originalite;
