import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import UI from "../../Components/UI/UI";
import "./Originalite.scss";
import anime from "animejs";
import { useEffect, useState, useRef } from "react";

const Originalite = ({ isDown, incrementData, donnees }) => {
  const cerclesContainer = useRef(null);
  const [cercles, setCercles] = useState([]);
  const lesGradients = [
    [
      "radial-gradient(circle, rgba(241,255,0,1) 11%, rgba(255,51,0,1) 100%)",
      "rgba(255,51,0,1)",
    ],
    [
      "radial-gradient(circle, rgba(0,255,101,1) 11%, rgba(39,0,255,1) 100%)",
      "rgba(39,0,255,1)",
    ],
    [
      "radial-gradient(circle, rgba(88,93,0,1) 11%, rgba(93,19,0,1) 100%)",
      "rgba(93,19,0,1)",
    ],
    [
      "radial-gradient(circle, rgba(0,93,37,1) 11%, rgba(14,0,92,1) 100%)",
      "rgba(14,0,92,1)",
    ],
  ];
  const lesSupersGradients = [
    [
      "radial-gradient(circle, rgba(226,12,117,1) 0%, rgba(199,77,151,1) 48%, rgba(10,211,250,1) 100%)",
      "rgba(10,211,250,1)",
    ],
    [
      "radial-gradient(circle, rgba(13,231,250,1) 0%, rgba(7,155,165,1) 48%, rgba(18,3,250,1) 100%)",
      "rgba(18,3,250,1)",
    ],
    [
      "radial-gradient(circle, rgba(255,251,200,1) 0%, rgba(223,61,77,1) 48%, rgba(236,9,88,1) 100%)",
      "rgba(236,9,88,1)",
    ],
    [
      "radial-gradient(circle, rgba(255,2,106,1) 0%, rgba(171,24,162,1) 48%, rgba(61,37,237,1) 100%)",
      "rgba(61,37,237,1)",
    ],
    [
      "radial-gradient(circle, rgba(236,179,21,1) 0%, rgba(220,59,111,1) 48%, rgba(250,166,47,1) 100%)",
      "rgba(250,166,47,1)",
    ],
    [
      "radial-gradient(circle, rgba(90,19,110,1) 0%, rgba(169,11,132,1) 48%, rgba(255,0,156,1) 100%)",
      "rgba(255,0,156,1)",
    ],
    [
      "radial-gradient(circle, rgba(175,227,91,1) 0%, rgba(49,182,139,1) 48%, rgba(27,167,151,1) 100%)",
      "rgba(27,167,151,1)",
    ],
    [
      "radial-gradient(circle, rgba(60,68,135,1) 0%, rgba(137,53,202,1) 48%, rgba(213,83,158,1) 100%)",
      "rgba(213,83,158,1)",
    ],
    [
      "radial-gradient(circle, rgba(251,226,64,1) 0%, rgba(143,240,144,1) 48%, rgba(15,252,239,1) 100%)",
      "rgba(15,252,239,1)",
    ],
  ];

  const gradientDebut =
    "radial-gradient(circle, rgba(66,66,66,1) 30%, rgba(24,24,24,1) 100%)";
  const shadowDebut = "rgba(24,24,24,1)";
  const nbRows = Math.ceil(window.innerHeight / 150);
  const nbCols = Math.ceil(window.innerWidth / 150);

  useEffect(() => {
    const tousLesCercles = nbRows * nbCols;

    const cerclesGeneres = Array.from(
      { length: tousLesCercles },
      (_, index) => ({
        gradient: gradientDebut,
        shadow: shadowDebut,
      })
    );
    setCercles(cerclesGeneres);
  }, []);

  const grilleFond = {
    gridTemplateColumns: `repeat(${nbCols}, 150px)`,
    gridTemplateRows: `repeat(${nbRows}, 150px)`,
  };

  function randomCouleur(couleurs) {
    cercles.forEach((cercle) => {
      const iRandom = Math.floor(Math.random() * couleurs.length);
      cercle.gradient = couleurs[iRandom][0];
      cercle.shadow = couleurs[iRandom][1];
      setCercles([...cercles]);
    });
  }

  const [mot, setMot] = useState("igéOirnlati");
  const motOriginal = "Originalité";
  function shuffleLetters() {
    const motArray = mot.split("");
    const motShuffled = motArray.sort(() => Math.random() - 0.5);
    setMot(motShuffled.join(""));
  }

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      return;
    }
    
    const key = e.key.toLowerCase();
    // console.log(e.key);
    incrementData("nbTouches");
    if (e.shiftKey) 
    {
      if (key !== "shift" && "originalte".includes(key)) {
        setCercles(cercles.map(cercle => ({
          ...cercle,
          gradient: gradientDebut,
          shadow: shadowDebut,
        })));
        setMot(motOriginal);
      } else if (key !== "shift" && !"originalte".includes(key)){
        randomCouleur(lesSupersGradients);
        shuffleLetters();
      }
    } 
    else 
    {
      if ("originalte".includes(key)) {
        setMot(motOriginal);
        randomCouleur(lesGradients);
      } else {
        randomCouleur(lesGradients);
        shuffleLetters();
      }
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }),
    [];

    // TESTER L'ANIM.
    useEffect(() => {
      anime({
        targets: ".originalite-cercle",
        opacity: [0, 1],
        delay: anime.stagger(300),
        easing: "easeInOutQuad",
        duration: 3000,
      });
    }, []);

  return (
    <div className="originalite-container">
      <ChangePage isDown={isDown} />

      <h1 className="originalite-titre">{mot}</h1>

      <div
        className="originalite-cercles-container"
        ref={cerclesContainer}
        style={grilleFond}
        onChange={handleKeyDown}
      >
        {cercles.map((cercle, index) => (
          <div
            key={index}
            className="originalite-cercle"
            style={{
              background: cercle.gradient,
              boxShadow: `0px 0px 5px 3px ${cercle.shadow}`,
            }}
          ></div>
        ))}
      </div>
      <Instruction
        texte={
          <>
            Appuyer sur les touches du clavier
            <br /> 
            ... il y a une combinaison surprise
          </>
        }
        delais={1000}
        delaisOut={30000}
      />
      <UI texte={"Touches appuyées"} nbDonnees={donnees.nbTouches}/>
    </div>
    
  );
};

export default Originalite;
