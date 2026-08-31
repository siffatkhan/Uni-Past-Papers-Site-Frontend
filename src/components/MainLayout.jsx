import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css"

function MainLayout() {
  return (
    <div className="page-wrapper">
      <main className="page-content">
      <Navbar />
      <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;


