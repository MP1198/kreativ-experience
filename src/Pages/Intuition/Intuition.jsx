import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Intuition.scss";

const Intuition = ({isDown}) => {
  return (
    <div className="intuition-container">
      <ChangePage isDown={isDown}/>
      <h1 className="intuition-titre">Intuition</h1>
    </div>
  );
};

export default Intuition;
