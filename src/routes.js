import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/Routes/protectedRoute";
import LoginRoute from "./components/Routes/loginRoute";
import PublicRoute from "./components/Routes/publicRoute";
import { useState, useEffect } from "react";
import {
  loginRoutes,
  protectedRoutes,
  publicRoutes,
} from "./constants/routeNavigators";
import './App.scss';

const Router = () => {
 const location = useLocation();

 const [displayLocation, setDisplayLocation] = useState(location);
 const [transitionStage, setTransistionStage] = useState("fadeIn");

 useEffect(() => {
   if (location !== displayLocation) setTransistionStage("fadeOut");
 }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route element={<LoginRoute />}>
          {loginRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={String(index)}
              />
            );
          })}
        </Route>

        <Route element={<ProtectedRoute />}>
          {protectedRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={String(index)}
              />
            );
          })}
        </Route>

        <Route element={<PublicRoute />}>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={String(index)}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
