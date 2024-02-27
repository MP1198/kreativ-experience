import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Layout from "./Components/Layout/Layout";
import Accueil from "./Pages/Accueil/Accueil";
import LesMots from "./Pages/LesMots/LesMots";
import Perspective from "./Pages/Perspective/Perspective";
import Originalite from "./Pages/Originalite/Originalite";
import Intuition from "./Pages/Intuition/Intuition";
import Inspiration from "./Pages/Inspiration/Inspiration";
import Innovation from "./Pages/Innovation/Innovation";
import Ingeniosite from "./Pages/Ingeniosite/Ingeniosite";
import Imagination from "./Pages/Imagination/Imagination";
import Flexibilite from "./Pages/Flexibilite/Flexibilite";
import Expression from "./Pages/Expression/Expression";
import Experimentation from "./Pages/Experimentation/Experimentation";
import Creativite from "./Pages/Creativite/Creativite";

import ChangePage from "./Components/ChangePage/ChangePage";

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



const App = () => {

    const [isSpaceDown, setIsSpaceDown] = useState(false);

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === " ") {
            setIsSpaceDown(true);
        }
      }

      const handleKeyUp = (e) => {
        if (e.key === " ") {
            setIsSpaceDown(false);
        }
      }

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);

      return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);
      }
  
  }, [isSpaceDown]);

  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Accueil isDown={isSpaceDown}/>
        },
        {
          path: "les-mots",
          index: true,
          element: <LesMots  isDown={isSpaceDown}/>
        },
        {
          path: "perspective",
          index: true,
          element: <Perspective isDown={isSpaceDown}/>
        },
        {
          path: "originalite",
          index: true,
          element: <Originalite isDown={isSpaceDown}/>
        },
        {
          path: "intuition",
          index: true,
          element: <Intuition isDown={isSpaceDown}/>
        },
        {
          path: "inspiration",
          index: true,
          element: <Inspiration isDown={isSpaceDown}/>
        },
        {
          path: "innovation",
          index: true,
          element: <Innovation isDown={isSpaceDown}/>
        },
        {
          path: "ingeniosite",
          index: true,
          element: <Ingeniosite isDown={isSpaceDown}/>
        },
        {
          path: "imagination",
          index: true,
          element: <Imagination isDown={isSpaceDown}/>
        },
        {
          path: "flexibilite",
          index: true,
          element: <Flexibilite isDown={isSpaceDown}/>
        },
        {
          path: "expression",
          index: true,
          element: <Expression isDown={isSpaceDown}/>
        },
        {
          path: "experimentation",
          index: true,
          element: <Experimentation isDown={isSpaceDown}/>
        },
        {
          path: "creativite",
          index: true,
          element: <Creativite isDown={isSpaceDown}/>
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ];

  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  
  );
};

export default App;