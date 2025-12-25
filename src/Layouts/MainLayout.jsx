import React from "react";
import NavbarMainConatiner from "../Components/NavbarComponents/NavbarMainConatiner";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <section>
      <Toaster />
      <NavbarMainConatiner />
      <Outlet />
    </section>
  );
};

export default MainLayout;
