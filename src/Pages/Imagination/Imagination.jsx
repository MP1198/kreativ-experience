import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Imagination.scss";

const Imagination = ({isDown}) => {
  return (
    <div className="imagination-container">
      <ChangePage isDown={isDown}/>
      <h1 className="imagination-titre">Imagination</h1>
    </div>
  );
};

export default Imagination;
