import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Expression.scss";

const Expression = ({isDown}) => {
  return (
    <div>
      <ChangePage isDown={isDown}/>
    </div>
  );
};

export default Expression;
