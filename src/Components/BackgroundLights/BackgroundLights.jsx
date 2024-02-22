import "./BackgroundLights.scss";

const BackgroundLights = () => {
    let cards = document.querySelectorAll(".bg-card");

    cards.forEach((card) => {
        card.addEventListener('mousemove', handleMouseMove);
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    });
    
    function handleMouseMove(e) {
        requestAnimationFrame(() => {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            e.target.style.setProperty("--x", `${x}px`);
            e.target.style.setProperty("--y", `${y}px`);
        });
    }
  return (
    <div className="bg-bigContainer">
        <div className="bg-container">
            <div className="bg-card vert"></div>
            <div className="bg-card rouge"></div>
            <div className="bg-card jaune"></div>
            <div className="bg-card rose"></div>
            <div className="bg-card bleu"></div>
            <div className="bg-card vert"></div>
            <div className="bg-card rouge"></div>
            <div className="bg-card jaune"></div>
            <div className="bg-card rose"></div>
            <div className="bg-card bleu"></div>
            <div className="bg-card vert"></div>
            <div className="bg-card rouge"></div>
            <div className="bg-card jaune"></div>
            <div className="bg-card rose"></div>
            <div className="bg-card bleu"></div>
            <div className="bg-card vert"></div>
        </div>
    </div>
  );
};

export default BackgroundLights;