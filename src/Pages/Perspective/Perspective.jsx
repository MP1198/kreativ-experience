import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Perspective.scss";

const Perspective = ({isDown}) => {
    
  return (
    <div className="perspective-container">
      <ChangePage isDown={isDown}/>
      <h1 className="perspective-titre">Perspective</h1>
    </div>
  );
};

export default Perspective;