import { Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";

// Pages
import Layout from "./Components/Layout/Layout";
import Accueil from "./Pages/Accueil/Accueil";
import LesMots from "./Pages/LesMots/LesMots";
import Originalite from "./Pages/Originalite/Originalite";
import Ingeniosite from "./Pages/Ingeniosite/Ingeniosite";
import Expression from "./Pages/Expression/Expression";
import Experimentation from "./Pages/Experimentation/Experimentation";

// composant
import PageTracker from "./Components/PageTracker/PageTracker";

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
  
  }, []);



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
          path: "/fin",
          element: <Fin/>
        },
        {
          path: "les-mots",
          element: <LesMots  isDown={isSpaceDown} pathIndex={pageIndex}/>
        },
        {
          path: "originalite",
          element: <Originalite isDown={isSpaceDown}/>
        },
        {
          path: "ingeniosite",
          element: <Ingeniosite isDown={isSpaceDown}/>
        },
        {
          path: "expression",
          element: <Expression isDown={isSpaceDown}/>
        },
        {
          path: "experimentation",
          element: <Experimentation isDown={isSpaceDown}/>
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ];

  return (
    <RouterProvider router={createBrowserRouter(routes)} onLoad={handlePageLoad}>
    </RouterProvider>
  
  );
};

export default App;