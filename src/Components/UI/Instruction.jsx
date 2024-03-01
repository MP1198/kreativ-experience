import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import "./Instruction.scss";

const Instruction = ({ texte, delais, delaisOut }) => {
    const [isVisible, setIsVisible] = useState(true);
    const instructionRef = useRef(null);

    useEffect(() => {
        const animateInstruction = () => {
            anime({
                targets: instructionRef.current,
                opacity: 1,
                easing: 'easeInOutSine',
                duration: 500,
            });
        };

        const animateOutInstruction = () => {
            anime({
                targets: instructionRef.current,
                opacity: 0,
                easing: 'easeInOutSine',
                duration: 500,
                complete: () => setIsVisible(false),
            });
        };

        const animationTimeout = setTimeout(() => {
            animateInstruction();
            setTimeout(animateOutInstruction, delaisOut); 
        }, delais);

        return () => clearTimeout(animationTimeout);
    }, [delais, delaisOut]);

    return (
        <>
            {isVisible && (
                <div className="instruction-container" ref={instructionRef}>
                    <p className="instruction">{texte}</p>
                </div>
            )}
        </>
    );
};

export default Instruction;
