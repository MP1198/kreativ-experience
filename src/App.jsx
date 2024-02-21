import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Accueil from "./Pages/Accueil";
import Grille from "./Components/Grille";
// import Experimentation from "./Pages/Experimentation";
import Layout from "./Components/Layout";
import "./Fonts/Fonts.scss";

// fonts
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



const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Grille />
        },
        // {
        //   path: "/",
        //   index: true,
        //   element: <Accueil />
        // },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;