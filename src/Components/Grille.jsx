import "./Grille.scss";
import anime from "animejs";

const Grille = () => {
    let estEnAnimation = false;
    const handleDotGrid = (e) => {
        if (!estEnAnimation) {
            estEnAnimation = true;

            anime({
                targets: ".inner-dot",
                scale: [
                    { value: 1.35, easing: "easeOutSine", duration: 250 },
                    { value: 1, easing: "easeInOutQuad", duration: 500 },
                ],
                translateY: [
                    { value: -15, easing: "easeOutSine", duration: 250 },
                    { value: 0, easing: "easeInOutQuad", duration: 500 },
                ],
                opacity: [
                    { value: 1, easing: "easeOutSine", duration: 250 },
                    { value: 0.5, easing: "easeInOutQuad", duration: 500 },
                ],
                delay: anime.stagger(100, { grid: [gridW, gridH], from: e.target.dataset.index }),
                complete: () => {
                    estEnAnimation = false;
                }
            });
        }
    };

    const gridW = 25;
    const gridH = 25;

    const dots = [];
    let index = 0;

    for (let i = 0; i < gridW; i++) {
        for (let j = 0; j < gridH; j++) {
            dots.push(
                <div className="grille-dots"
                 data-index={index}
                 key={`${i}/${j}`}
                 onClick={handleDotGrid}>
                    <div className="inner-dot" data-index={index}/>
                 </div>
            );
            index++;
        }
    }

  return (
    <div className="grille-container">
        <div className="grille-dots-container">{dots}</div>
    </div>
  );
};

export default Grille;