import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// BD
import db from "../config";
import { onSnapshot, updateDoc, doc, increment } from "firebase/firestore";

// Pages
import Layout from "./Components/Layout/Layout";
import Accueil from "./Pages/Accueil/Accueil";
import LesMots from "./Pages/LesMots/LesMots";
import Originalite from "./Pages/Originalite/Originalite";
import Ingeniosite from "./Pages/Ingeniosite/Ingeniosite";
import Expression from "./Pages/Expression/Expression";
import Experimentation from "./Pages/Experimentation/Experimentation";

// fonts
import "./Fonts/Fonts.scss";
import "./Fonts/curetro-webfont.woff";
import "./Fonts/curetro-webfont.woff2";
import "./Fonts/mercy_christole-webfont.woff";
import "./Fonts/mercy_christole-webfont.woff2";
import "./Fonts/plexifont-webfont.woff";
import "./Fonts/plexifont-webfont.woff2";
import "./Fonts/retrolight-webfont.woff";
import "./Fonts/retrolight-webfont.woff2";
import "./Fonts/roblox_font_regular-webfont.woff";
import "./Fonts/roblox_font_regular-webfont.woff2";
import "./Fonts/unicaone-regular-webfont.woff";
import "./Fonts/unicaone-regular-webfont.woff2";
import "./Fonts/chopin-light-webfont.woff";
import "./Fonts/chopin-light-webfont.woff2";
import "./Fonts/aesthetic_romance-webfont.woff";
import "./Fonts/aesthetic_romance-webfont.woff2";
import Fin from "./Pages/Fin/Fin";
import WidthFurteur from "./Pages/WidthFurteur/WidthFurteur";

const ambiance = new Audio("../public/sons/KreativMusic.wav");
const App = () => {

  // BD
  const [donnees, setDonnees] = useState({
    nbCliques: 0,
    nbMessages: 0,
    nbConnexions: 0,
    nbTouches: 0,
  });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "stats", "stats"), (snapshot) => {
      const documents = snapshot.data();
      setDonnees(documents);
    });

    return unsub;
  }, []);

  const incrementData = async (key) => {
    const statsRef = doc(db, "stats", "stats");

    await updateDoc(statsRef, {
      [key]: increment(1),
    });
  };

  // changement Page
  const [historique, setHistorique] = useState([
    "/ingeniosite",
    "/expression",
    "/experimentation",
    "/originalite",
  ]);

  function visitePage(page) {
    let newPage = "";

    for (let i = 0; i < historique.length; i++) {
      if (page === historique[i]) {
        newPage = page;
        setHistorique((prevPages) => {
          return prevPages.filter((page) => page !== newPage);
        });
        return newPage;
      }
    }
    if (newPage === "" && historique.length > 0) {
      let newIndex = Math.floor(Math.random() * historique.length);
      let newPage = historique[newIndex];
      setHistorique((prevPages) => {
        return prevPages.filter((page) => page !== newPage);
      });
      return newPage;
    } else {
      setHistorique([
        "/ingeniosite",
        "/expression",
        "/experimentation",
        "/originalite",
      ]);
      newPage = "/fin";
      return newPage;
    }
  }

  const [joue, setJoue] = useState(false);
  const handleStartAmbiance = () => {
    if (ambiance.paused && !joue) {
      ambiance.play();
      ambiance.loop = true;
      ambiance.volume = 0.2; 
      setJoue(true);
    } 
  };
  const handlePlayPauseAmbiance = () => {
    if (ambiance.paused) {
      ambiance.play();
      ambiance.loop = true;
      ambiance.volume = 0.2; 
    } else{
      ambiance.pause();
    }
  };


  
  // Verification de la touche espace
  const [isSpaceDown, setIsSpaceDown] = useState(false);
  useEffect(() => {


    const handleKeyDown = (e) => {
      if (e.key === " ") {
        setIsSpaceDown(true);
        handleStartAmbiance();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === " ") {
        setIsSpaceDown(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const routes = [
    {
      path: "/",
      element: <Layout handleAmbiance={handlePlayPauseAmbiance} />,
      children: [
        {
          path: "/",
          index: true,
          element: <Accueil isDown={isSpaceDown} />,
        },
        {
          path: "/fin",
          element: <Fin />,
        },
        {
          path: "/avertissement",
          element: <WidthFurteur />,
        },
        {
          path: "les-mots",
          element: <LesMots isDown={isSpaceDown} visitePage={visitePage} />,
        },
        {
          path: "originalite",
          element: (
            <Originalite
              isDown={isSpaceDown}
              incrementData={incrementData}
              donnees={donnees}
            />
          ),
        },
        {
          path: "ingeniosite",
          element: (
            <Ingeniosite
              isDown={isSpaceDown}
              incrementData={incrementData}
              donnees={donnees}
            />
          ),
        },
        {
          path: "expression",
          element: (
            <Expression
              isDown={isSpaceDown}
              incrementData={incrementData}
              donnees={donnees}
            />
          ),
        },
        {
          path: "experimentation",
          element: (
            <Experimentation
              isDown={isSpaceDown}
              incrementData={incrementData}
              donnees={donnees}
            />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>;
};

export default App;
