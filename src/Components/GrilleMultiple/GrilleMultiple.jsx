import "./GrilleMultiple.scss";
import React from "react";
import anime from "animejs";


const GrilleMultiple = () => {
    let indexClick=0;

    const augClick = () => {
        indexClick++;
        if(indexClick > 5){
            indexClick = 0;
        }
    }

    const handleDots = (e)=>{
        if(indexClick === 0){
            anime({
                targets: '.dots',
                rotateZ: 180,
                translateX: anime.stagger(-20, { grid: [gridW, gridH], from: 'center', axis: 'x'}),
                translateY: anime.stagger(-20, { grid: [gridW, gridH], from: 'center', axis: 'y'}),
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }else if(indexClick === 1){
            anime({
                targets: '.dots',
                borderRadius: ['0%', '50%'],
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }else if(indexClick === 2){
            anime({
                targets: '.dots',
                scale: 0.2,
                opacity: 1,
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }else if(indexClick === 3){
            anime({
                targets: '.dots',
                translateX: anime.stagger(0, { grid: [gridW, gridH], from: 'center', axis: 'x'}),
                translateY: anime.stagger(0, { grid: [gridW, gridH], from: 'center', axis: 'y'}),
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }else if(indexClick === 4){
            anime({
                targets: '.dots',
                scale: 1,borderRadius: ['50%', '0%'],
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }else if(indexClick === 5){
            anime({
                targets: '.dots',
                rotateZ: -90,
                easing: 'easeInOutExpo',
                duration: 750,
                delay: anime.stagger(100, { grid: [gridW, gridH], from: 'center'}),
            });
        }
    }


        let dots = [];
        const gridW = 10;
        const gridH = 10;
        let index = 0;
        
        for (let i = 0; i < gridW*gridH; i++) {
            dots.push(
                <div className="dots"
                key={i}
                onClick={() => { handleDots(); augClick(); }}
                dataset={index}
                >
             </div>

        );
            index++;

    }

  return (
    <div className="grilleMultiple-container" >{dots}</div>
  );
};

export default GrilleMultiple;