import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Innovation.scss";

const Innovation = ({isDown}) => {
  return (
    <div className="innovation-container">
      <ChangePage isDown={isDown}/>
      <h1 className="innovation-titre">Innovation</h1>
    </div>
  );
};

export default Innovation;