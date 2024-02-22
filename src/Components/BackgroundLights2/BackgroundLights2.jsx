import "./BackgroundLights2.scss";
import { useEffect } from "react";

const BackgroundLights2 = () => {
    useEffect(() => {
        const nbCarre = 160;
        const container = document.querySelector(".bgl-container");
        for (let i = 0; i < nbCarre; i++) {
            let box = document.createElement("div");
            box.classList.add("bgl-box");
            container.appendChild(box);
        }
        return () => {
            container.innerHTML = '';
        };
    }, []);

    let cursor = document.querySelector(".bgl-cursor");
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
  return (
    <div className="bgl-bigContainer">
        <div className="bgl-container"></div>
        <div className="bgl-cursor"></div>
    </div>
  );
};

export default BackgroundLights2;