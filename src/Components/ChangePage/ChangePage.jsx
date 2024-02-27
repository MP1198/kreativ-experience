import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ChangePage.scss";
import anime from "animejs";

const ChangePage = ({ isDown }) => {
    const loadingBar = useRef(null);
    const navigation = useNavigate();

    useEffect(() => {

        const animationLoadingOn = () => {
            anime({
                targets: loadingBar.current,
                width: "100%",
                duration: 5000,
                easing: "easeInOutQuad",
                complete: () => {
                    console.log("Animation on terminée");
                    navigation("/les-mots");
                }
            })
        };

        const animationLoadingOff = () => {
            anime({
                targets: loadingBar.current,
                width: "0%",
                duration: 5000,
                easing: "easeInOutQuad",
                complete: () => {
                    console.log("Animation off terminée");
                }
            })
        };

        if (isDown) { 
            animationLoadingOn();
        } else {
            animationLoadingOff();
        }
    }, [navigation]);

  return (
        <div className="loading-bar" ref={loadingBar} ></div>
  );
};

export default ChangePage;