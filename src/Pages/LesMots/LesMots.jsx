import "./LesMots.scss";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LesMots = () => {
    // verifie la liste des pages pour acces a celles non vue encore - mais les pages deja visite sont quand meme affiché sans pouvoir aller dessus.
    const lesMotsAvecStyles = [
        {   mot: "Ingéniosité",
            style: { 
                fontFamily: "curetro",
                letterSpacing: "8px",
            },
            path: "/ingeniosite",
        }, 
        {   mot: "Innovation",
            style: { 
                fontFamily: "unicaone", 
            },
            path: "/innovation",
        },
        {   mot: "Imagination",
            style: { 
                fontFamily: "mercy_christole",
                fontWeight: "300" 
            },
            path: "/imagination",
        },
        {   mot: "Expression",
        style: { 
                fontFamily: "rainboho", 
                fontWeight: "100" 
            },
            path: "/expression",
        },
        {   mot: "Inspiration",
            style: { 
                fontFamily: "lostar", 
                fontWeight: "200",
                letterSpacing: "8px",
            },
            path: "/inspiration",
        },
        {   mot: "Flexibilité",
            style: { 
                fontFamily: "overwave", 
            },
            path: "/flexibilite",
        },
        {   mot: "Expérimentation",
            style: { 
                fontFamily: "retrolight", 
                fontWeight: "200",
                fontSize: "125px"
            },
            path: "/experimentation",
        },
        {   mot: "Intuition",
            style: { 
                fontFamily: "kinan", 
                fontWeight: "200",
            },
            path: "/intuition",
        },
        {   mot: "Perspective",
        style: { 
                fontFamily: "plexifont", 
                fontWeight: "200",
            },
            path: "/perspective",
        },
        {   mot: "Originalité",
            style: { 
                fontFamily: "roblox", 
            },
            path: "/originalite",
        },
        {   mot: "Créativité",
            style: { 
                fontFamily: "protest", 
            },
            path: "/creativite",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);
    const [loopStarted, setLoopStarted] = useState(false);
    const intervalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        const startLoop = () => {
            console.log("Start loop");
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % lesMotsAvecStyles.length);
            }, 150);
            setLoopStarted(true);
        };

        const stopLoop = () => {
            clearInterval(intervalRef.current);
            if (loopStarted) {
                navigate(lesMotsAvecStyles[currentIndex].path);
            }
        };
        
        if (isSpacebarPressed) {
            startLoop();
        } else {
            stopLoop();
        }
        
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        
        return () => {
            stopLoop();
            clearInterval(intervalRef);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [isSpacebarPressed, lesMotsAvecStyles.length, currentIndex, navigate]);

    const handleKeyDown = (e) => {
        if (e.key === " ") {
            setIsSpacebarPressed(true);
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === " ") {
            setIsSpacebarPressed(false);
        }
    };


    return (
        <div className="lesMots-page">
            <h1 style={lesMotsAvecStyles[currentIndex].style} >{lesMotsAvecStyles[currentIndex].mot}</h1>
        </div>
  );
};

export default LesMots;