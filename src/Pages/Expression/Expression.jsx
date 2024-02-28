import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Expression.scss";

const Expression = ({ isDown }) => {
  return (
    <div className="expression-container">
      <ChangePage isDown={isDown} />
      <h1 className="expression-titre">Expression</h1>

      <div className="text-container">
        <form action="">
          <textarea
            className="expression-textarea"
            type="textarea"
            name=""
            id=""
            autoFocus
            wrap="hard"
            placeholder="Laissez votre créativité s'exprimer ici." />
        </form>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
      </div>

    </div>
  );
};

export default Expression;
