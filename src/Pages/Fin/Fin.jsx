import "./Fin.scss";
import Accueil from "../Accueil/Accueil";
import {useNavigate} from "react-router-dom";

const Fin = () => {

  const navigate = useNavigate();
  const naviguer = () => {
    navigate("/");
  };
  return (
    <div className="fin">
      <button className="fin-btn" onClick={naviguer}>Recommencer</button>
      <Accueil />
    </div>
  );
};

export default Fin;