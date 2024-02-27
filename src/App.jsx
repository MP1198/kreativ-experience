import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { SpacebarProvider } from './Components/ContextSpacebar/ContextSpacebar';
import { BrowserRouter as Router } from 'react-router-dom';

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
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Accueil />
        },
        {
          path: "les-mots",
          index: true,
          element: <LesMots />
        },
        {
          path: "perspective",
          index: true,
          element: <Perspective />
        },
        {
          path: "originalite",
          index: true,
          element: <Originalite />
        },
        {
          path: "intuition",
          index: true,
          element: <Intuition />
        },
        {
          path: "inspiration",
          index: true,
          element: <Inspiration />
        },
        {
          path: "innovation",
          index: true,
          element: <Innovation />
        },
        {
          path: "ingeniosite",
          index: true,
          element: <Ingeniosite />
        },
        {
          path: "imagination",
          index: true,
          element: <Imagination />
        },
        {
          path: "flexibilite",
          index: true,
          element: <Flexibilite />
        },
        {
          path: "expression",
          index: true,
          element: <Expression />
        },
        {
          path: "experimentation",
          index: true,
          element: <Experimentation />
        },
        {
          path: "creativite",
          index: true,
          element: <Creativite />
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ];

  return (
  <SpacebarProvider>
    <RouterProvider router={createBrowserRouter(routes)} />;
  </SpacebarProvider>
  
  );
};

export default App;