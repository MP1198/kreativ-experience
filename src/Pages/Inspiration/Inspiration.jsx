import ChangePage from "../../Components/ChangePage/ChangePage";
import Instruction from "../../Components/UI/Instruction";
import "./Inspiration.scss";
import anime from "animejs";
import { useEffect, useState } from "react";
import { ReactPainter } from "react-painter";

const Inspiration = ({ isDown }) => {
  useEffect(() => {
    function animTitre() {
      anime({
        targets: ".inspiration-titre",
        translateY: -window.innerHeight + 725,
        scale: 0.8,
        duration: 2000,
        easing: "easeInOutQuad",
        delay: 1500,
      });
    }

    animTitre();

    return () => {
      anime.remove(".inspiration-titre");
    };
  }, []);

  return (
    <div className="inspiration-container">
      <ChangePage isDown={isDown} />
      <h1 className="inspiration-titre">Inspiration</h1>

      <ReactPainter
        width={800}
        height={500}
        onSave={(blob) => console.log(blob)}
        render={({
          triggerSave,
          canvas,
          setColor,
          imageDownloadUrl,
          setLineWidth,
        }) => (
          <div className="peindre">
              <div className="canvas">
                <input
                  className="choisiCouleur"
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
                <label className="Grosseur" htmlFor="line-width"></label>
                <input
                  type="number"
                  className="ligne"
                  id="line-width"
                  min={1}
                  max={100}
                  defaultValue={5}
                  onChange={(e) => setLineWidth(e.target.value)}
                />
                <button className="sauvegarder" onClick={triggerSave}>
                  Sauvegarder
                </button>
                {imageDownloadUrl ? (
                  <a className="telecharger" href={imageDownloadUrl} download>
                    Télécharger
                  </a>
                ) : null}
              </div>
            <div>{canvas}</div>
          </div>
        )}
      />
    </div>
  );
};

export default Inspiration;
