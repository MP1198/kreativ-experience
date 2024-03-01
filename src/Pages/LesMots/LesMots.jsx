import "./LesMots.scss";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LesMots = ({isDown}) => {



    const lesMotsAvecStyles = [
        {   mot: "Ingéniosité",
            style: { 
                fontFamily: "curetro",
                letterSpacing: "8px",
            },
            path: "/ingeniosite",
        }, 
        // {   mot: "Innovation",
        //     style: { 
        //         fontFamily: "unicaone", 
        //     },
        //     path: "/innovation",
        // },
        // {   mot: "Imagination",
        //     style: { 
        //         fontFamily: "mercy_christole",
        //         fontWeight: "300" 
        //     },
        //     path: "/imagination",
        // },
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
        // {   mot: "Flexibilité",
        //     style: { 
        //         fontFamily: "overwave", 
        //     },
        //     path: "/flexibilite",
        // },
        {   mot: "Expérimentation",
            style: { 
                fontFamily: "retrolight", 
                fontWeight: "200",
                fontSize: "125px"
            },
            path: "/experimentation",
        },
        // {   mot: "Intuition",
        //     style: { 
        //         fontFamily: "kinan", 
        //         fontWeight: "200",
        //     },
        //     path: "/intuition",
        // },
        // {   mot: "Perspective",
        // style: { 
        //         fontFamily: "plexifont", 
        //         fontWeight: "200",
        //     },
        //     path: "/perspective",
        // },
        // {   mot: "Originalité",
        //     style: { 
        //         fontFamily: "roblox", 
        //     },
        //     path: "/originalite",
        // },
        // {   mot: "Créativité",
        //     style: { 
        //         fontFamily: "protest", 
        //     },
        //     path: "/creativite",
        // },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const interval = useRef(null);
    const navigate = useNavigate();
    const [isLooping, setIsLooping] = useState(false);

    useEffect(() => {

        const startLoop = () => {
            if (!isLooping){
                setIsLooping(true);
               interval.current = setInterval(() => {

                    setCurrentIndex((prevIndex) => {
                        const nextIndex = prevIndex + 1;
                        return nextIndex >= lesMotsAvecStyles.length ? 0 : nextIndex;
                    });

                    console.log(currentIndex + " "  + " " + lesMotsAvecStyles.length);
                }, 150);
            }
        };
        

        const stopLoop = () => {
            if (isLooping){
                console.log(interval);
                setIsLooping(false);
                setCurrentIndex(0);
                navigate(lesMotsAvecStyles[currentIndex].path);
            }
            
        };
        
        if (isDown) {
            startLoop();
            console.log("chouette il");
        } else {
            stopLoop();
        }
        
    }, [isDown]);

    useEffect(() => {
        return () => {
            clearInterval(interval.current);
        }
    }, []);


    return (
        <div className="lesMots-page">
            <h1 style={lesMotsAvecStyles[currentIndex].style} >{lesMotsAvecStyles[currentIndex].mot}</h1>
        </div>
  );
};

export default LesMots;