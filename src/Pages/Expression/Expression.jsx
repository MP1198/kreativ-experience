import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Expression.scss";
import citations from "./citations.json";
import Instruction from "../../Components/UI/Instruction";

//  aPRES LES TESTS - NE PAS POUVOIR CLIQUER SI UN CHAMP DU FORMULAIRE EST VIDE
// MESSAGE ERREUR

// Je me demande si j'affiches des quotes jusqu'à ce que
// l'écran soit rempli de messages

const Expression = ({ isDown }) => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  useEffect(() => {
    function animCercle() {
      const cercles = document.querySelectorAll(".text-cercle");
      cercles.forEach((cercle) => {
        anime({
          targets: cercle,
          keyframes: [
            {
              translateX: 0,
              translateY: 0,
              duration: `${anime.random(1500, 3000)}`,
              easing: "easeInOutSine",
            },
            {
              translateX: `${anime.random(-30, 30)}`,
              translateY: `${anime.random(-30, 30)}`,
              duration: `${anime.random(1500, 3000)}`,
              easing: "easeInOutSine",
            },
            {
              translateX: 0,
              translateY: 0,
              duration: `${anime.random(1500, 3000)}`,
              easing: "easeInOutSine",
            },
          ],
          loop: true,
          autoplay: isTextareaFocused,
        });
      });
    }

    if (isTextareaFocused) {
      animCercle();
    } else {
      anime.remove(".text-cercle");
    }
  }, [isTextareaFocused]);

  const [randomQuote, setRandomQuote] = useState("");
  const [auteur, setAuteur] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [quotePosition, setQuotePosition] = useState({});
  const [newQuote, setNewQuote] = useState("");
  const [newAuteur, setNewAuteur] = useState("");
  const positions = [
    { bottom: "34px", right: "34px" },
    { top: "44px", right: "28px" },
    { top: "44px", left: "28px" },
    { bottom: "34px", left: "28px" },
  ];
  const [quoteCouleur, setQuoteCouleur] = useState({});
  const couleurs = [
    { color: "rgba(102,255,214,1)" },
    { color: "rgba(182, 106, 226,1)" },
  ];
  const [quoteStyle, setQuoteStyle] = useState({});

  useEffect(() => {
    if (!isVisible && newAuteur === "" && newQuote === "") {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * citations.length);
        setRandomQuote(citations[randomIndex].citation);
        setAuteur(citations[randomIndex].auteur);

        const randomPosition =
          positions[Math.floor(Math.random() * positions.length)];
        setQuotePosition(randomPosition);

        const randomColor =
          couleurs[Math.floor(Math.random() * couleurs.length)];
        setQuoteCouleur(randomColor);

        setQuoteStyle({ ...randomPosition, ...randomColor });

        animQuote();
        setIsVisible(true);
      }, 2000);
    } else if (!isVisible && newAuteur != "" && newQuote != "") {
      setTimeout(() => {
        setRandomQuote(newQuote);
        setAuteur(newAuteur);

        const randomPosition =
          positions[Math.floor(Math.random() * positions.length)];
        setQuotePosition(randomPosition);

        const randomColor =
          couleurs[Math.floor(Math.random() * couleurs.length)];
        setQuoteCouleur(randomColor);

        setQuoteStyle({ ...randomPosition, ...randomColor });

        animQuote();
        setIsVisible(true);
      }, 2000);
    } else {
      setTimeout(() => {
        animQuoteEnd();
        setIsVisible(false);
      }, 6000);
    }
  }, [isVisible]);

  function animQuote() {
    anime({
      targets: ".citations-text",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }

  function animQuoteEnd() {
    anime({
      targets: ".citations-text",
      opacity: [1, 0],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }

  const [messageUserVisible, setMessageUserVisible] = useState(false);
  const [messageUser, setMessageUser] = useState(false);
  const [AuteurUser, setAuteurUser] = useState(false);
  const handleButtonClick = () => {
    setMessageUserVisible(true);
    setMessageUser(newQuote);
    setAuteurUser(newAuteur);
    setTimeout(() => {
      setIsVisible(false);
      setNewQuote("");
      setNewAuteur("");
    }, 5000);
  };

  return (
    <div className="expression-container">
      <ChangePage isDown={isDown} />
      <h1 className={`expression-titre  ${messageUserVisible ? "messageVisible" :  ""}`}>
        {messageUserVisible ? (
          <>
            {messageUser}
            <span>- {AuteurUser}</span>
          </>
        ) : (
          "Expression"
        )}
      </h1>

      <div className="text-container">
        <form className="expression-form" action="">
          <textarea
            className="expression-textarea"
            type="textarea"
            name=""
            id=""
            wrap="hard"
            placeholder="Laissez votre créativité s'exprimer ici."
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
            onChange={(e) => setNewQuote(e.target.value)}
            value={newQuote}
          />
          <input
            className="expression-auteur"
            type="text"
            placeholder="Auteur"
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
            onChange={(e) => setNewAuteur(e.target.value)}
            value={newAuteur}
          />
          <input
            className="expression-btn"
            type="button"
            value="Afficher votre message"
            onClick={() => {
              handleButtonClick();
            }}
          />
        </form>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
        <div className="text-cercle"></div>
      </div>

      <div className="citations-container">
        <p className="citations-text" style={quoteStyle}>
          {randomQuote}
          <span>- {auteur}</span>
        </p>
      </div>
      {/* <Instruction texte={"Maintenez la barre d'espacement enfoncée"} delais={120000} delaisOut={30000}/> */}
    </div>
  );
};

export default Expression;
