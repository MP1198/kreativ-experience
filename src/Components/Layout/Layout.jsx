import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Layout.scss";
import BtnPause from "../BtnPause/BtnPause";

const Layout = ({handleAmbiance}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout">
      <main>
        <Outlet />
        <BtnPause handleAmbiance={handleAmbiance}/>
      </main>
    </div>
  );
};

export default Layout;