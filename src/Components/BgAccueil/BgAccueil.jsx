
import "./BgAccueil.scss";
// tuto 10:38
const BgAccueil = () => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    const cercleInteractif = document.querySelector(".interactif");

    function bouger (){
        curX +=(tgX-curX)/20;
        curY +=(tgY-curY)/20;
        cercleInteractif.computedStyleMap.transform = 'translate(${Math.round(curX)})px,${Math.round(curY)})px';
    }

    window.addEventListener('mousemove', (e)=>{
        tgX = e.clientX;
        tgY = e.clientY;
    });

  return (
    <div className="bg-gradient">
        <div className="gradients-container">
            <div className="gradient1"></div>
            <div className="gradient2"></div>
            <div className="gradient3"></div>
            <div className="gradient4"></div>
            <div className="gradient5"></div>
            <div className="interactif"></div>
        </div>
    </div>
  );
};

export default BgAccueil;