import React, { useContext } from "react";
import { AUTHContextAPI } from "../Context/AuthContext";
import { Navigate, NavLink } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  let { isAuthUser } = useContext(AUTHContextAPI);
  if (isAuthUser != null) {
    <Navigate to={"/"} />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoutes;
