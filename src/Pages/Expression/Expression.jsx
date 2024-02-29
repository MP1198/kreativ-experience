import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import ChangePage from "../../Components/ChangePage/ChangePage";
import "./Expression.scss";
import citations from "./citations.json";

//  je suis rendu a afficher le message envoyer dans l'écran
//  a la place de la citation

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
              translateX: `${anime.random(-15, 15)}`,
              translateY: `${anime.random(-15, 15)}`,
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
    if (!isVisible) {
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

  const buttonRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [auteurValue, setAuteurValue] = useState("");
  const handleButtonClick = () => {
    const textarea = document.querySelector(".expression-textarea");
    const text = textarea.value;

    const auteur = document.querySelector(".expression-auteur");
    const auteurVal = auteur.value;
    
    setTextareaValue(text);
    setAuteurValue(auteurVal);
    
    textarea.value = "";
    auteur.value = "";
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleButtonClick);
    }
    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", handleButtonClick);
      }
    };
  }, []);

  return (
    <div className="expression-container">
      <ChangePage isDown={isDown} />
      <h1 className="expression-titre">Expression</h1>

      <div className="text-container">
        <form className="expression-form" action="">
          <textarea
            className="expression-textarea"
            type="textarea"
            name=""
            id=""
            autoFocus
            wrap="hard"
            placeholder="Laissez votre créativité s'exprimer ici."
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
          />
          <input
            className="expression-auteur"
            type="text"
            placeholder="Auteur"
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
          />
          <input
            className="expression-btn"
            type="button"
            value="Ajouter"
            ref={buttonRef}
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
    </div>
  );
};

export default Expression;
