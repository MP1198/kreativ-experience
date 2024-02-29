import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Inspiration.scss";
import anime from "animejs";

const Inspiration = ({isDown}) => {


  return (
    <div className="inspiration-container">
      <ChangePage isDown={isDown}/>
      <h1 className="inspiration-titre">Inspiration</h1>
    </div>
  );
};

export default Inspiration;
