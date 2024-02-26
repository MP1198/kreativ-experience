import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ChangePage.scss";
import anime from "animejs";

const ChangePage = () => {
    const loadingBar = useRef(null);
    const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);
    const navigation = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === " ") {
            setIsSpacebarPressed(true);
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === " ") {
            setIsSpacebarPressed(false);
        }
    }
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

        if (isSpacebarPressed) {
            animationLoadingOn();
        } else {
            animationLoadingOff();
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        }
    }, [isSpacebarPressed, navigation]);

  return (
        <div className="loading-bar" ref={loadingBar}></div>
  );
};

export default ChangePage;