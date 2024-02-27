import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Perspective.scss";

const Perspective = ({isDown}) => {
    
  return (
    <>
    <ChangePage isDown={isDown}/>
    <div className="perspective">
      <h1 className="perspective-texte">Perspective</h1>
    </div>
    </>
  );
};

export default Perspective;