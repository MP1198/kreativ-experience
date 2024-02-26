import "./LesMots.scss";
import React, { useEffect, useState } from "react";

const LesMots = () => {
    // verifie la liste des pages pour acces a celles non vue encore - mais les pages deja visite sont quand meme affiché sans pouvoir aller dessus.
    const lesMotsAvecStyles = [
        {   mot: "Ingéniosité",
            style: { 
                fontFamily: "cureto",
            }
        }, 
        {   mot: "Innovation",
            style: { 
                fontFamily: "unicaone", 
            }
        },
        {   mot: "Imagination",
            style: { 
                fontFamily: "mercy_christole",
                fontWeight: "300" 
            }
        },
        {   mot: "Expression",
            style: { 
                fontFamily: "", 
            }
        },
        {   mot: "Inspiration",
            style: { 
                fontFamily: "", 
                fontWeight: "200"
            }
        },
        {   mot: "Flexibilité",
            style: { 
                fontFamily: "overwave", 
            }
        },
        {   mot: "Expérimentation",
            style: { 
                fontFamily: "retrolight", 
                fontWeight: "200",
                fontSize: "125px"
            }
        },
        {   mot: "Intuition",
            style: { 
                fontFamily: "kinan", 
                fontWeight: "200",
            }
        },
        {   mot: "Perspective",
        style: { 
                fontFamily: "plexifont", 
                fontWeight: "200",
            }
        },
        {   mot: "Originalité",
            style: { 
                fontFamily: "roblox", 
            }
        },
        {   mot: "Créativité",
            style: { 
                fontFamily: "", 
            }
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);

    useEffect(() => {
        let intervalId;

        const startLoop = () => {
            console.log("Start loop");
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % lesMotsAvecStyles.length);
            }, 100);
        };

        const stopLoop = () => {
            clearInterval(intervalId);
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
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [isSpacebarPressed, lesMotsAvecStyles.length]);

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