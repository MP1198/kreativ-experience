import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Ingeniosite.scss";

const Ingeniosite = ({isDown}) => {
  return (
    <div className="ingeniosite-container">
      <ChangePage isDown={isDown}/>
      <h1 className="ingeniosite-titre">Ingeniosité</h1>
    </div>
  );
};

export default Ingeniosite;