import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Layout from "./Components/Layout";

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