import anime from "animejs";
import "./Instruction.scss";

const Instruction = ({texte, delais, delaisOut}) => {
    
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
    function animateOutInstruction(){
        setTimeout(() => {
            anime({
                targets: '.instruction-container',
                opacity: 1,
                easing: 'easeInOutSine',
                duration: 500,
            });
        }, delaisOut);
    };
    
    animateInstruction();
    animateOutInstruction();
  return (
    <div className="instruction-container">
        <p className="instruction">{texte}</p>
    </div>
  );
};

export default Instruction;