import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Expression.scss";

const Expression = ({isDown}) => {
  return (
    <div className="expression-container">
      <ChangePage isDown={isDown}/>
      <h1 className="expression-titre">Expression</h1>
    </div>
  );
};

export default Expression;
