import "./BackgroundLights.scss";
import { useEffect } from "react";

const BackgroundLights = () => {
  useEffect(() => {
    let cards = document.querySelectorAll(".bg-card");
    let container = document.querySelector(".bg-container");

    function handleMouseMove(e) {
      requestAnimationFrame(() => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
      });
    }

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
      };
    });

    const numberOfRows = Math.ceil(window.innerHeight / 150);
    const numberOfColumns = Math.ceil(window.innerWidth / 150);
    const totalCards = numberOfRows * numberOfColumns;
    const colors = ["vert", "rouge", "jaune", "rose", "bleu"];
    let colorIndex = 0;

    container.style.gridTemplateColumns = `repeat(${numberOfColumns}, 150px)`;
    container.style.gridTemplateRows = `repeat(${numberOfRows}, 150px)`;

    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement("div");
        card.classList.add("bg-card", colors[colorIndex]);
        card.addEventListener("mousemove", handleMouseMove);
        container.appendChild(card);
        colorIndex = (colorIndex + 1) % colors.length;
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="bg-bigContainer">
      <div className="bg-container"></div>
    </div>
  );
};

export default BackgroundLights;
