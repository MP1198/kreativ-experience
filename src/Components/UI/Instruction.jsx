import anime from "animejs";
import "./Instruction.scss";

const Instruction = ({texte, delais}) => {
    
    function animateInstruction(){
        setTimeout(() => {
            anime({
                targets: '.instruction-container',
                opacity: 1,
                easing: 'easeInOutSine',
                duration: 500,
            });
        }, delais);
    };
    animateInstruction();

  return (
    <div className="instruction-container">
        <p className="instruction">{texte}</p>
    </div>
  );
};

export default Instruction;