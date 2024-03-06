import "./LesMots.scss";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LesMots = ({ isDown, visitePage}) => {
  const lesMotsAvecStyles = [
    {
      mot: "Ingéniosité",
      style: {
        fontFamily: "curetro",
        letterSpacing: "8px",
      },
      path: "/ingeniosite",
    },
    {
      mot: "Expression",
      style: {
        fontFamily: "rainboho",
        fontWeight: "100",
      },
      path: "/expression",
    },
    {
      mot: "Inspiration",
      style: {
        fontFamily: "lostar",
        fontWeight: "200",
        letterSpacing: "8px",
      },
      path: "/inspiration",
    },
    {
      mot: "Expérimentation",
      style: {
        fontFamily: "retrolight",
        fontWeight: "200",
        fontSize: "125px",
      },
      path: "/experimentation",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = useRef(null);
  const navigate = useNavigate();
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const startLoop = () => {
      if (!isLooping) {
        setIsLooping(true);
        interval.current = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= lesMotsAvecStyles.length ? 0 : nextIndex;
          });
        }, 150);
      }
    };

    const stopLoop = () => {
      if (isLooping) {
          setIsLooping(false);

          const pageOuOnVa = visitePage(lesMotsAvecStyles[currentIndex].path);
          console.log(pageOuOnVa, "les-mots");
        if (pageOuOnVa === null) {
          navigate("/fin");
        } else {
          navigate(pageOuOnVa);
        }
      }
    };

    if (isDown) {
      startLoop();
    } else {
      stopLoop();
    }
  }, [isDown]);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="lesMots-page">
      <h1 style={lesMotsAvecStyles[currentIndex].style}>
        {lesMotsAvecStyles[currentIndex].mot}
      </h1>
    </div>
  );
};

export default LesMots;
