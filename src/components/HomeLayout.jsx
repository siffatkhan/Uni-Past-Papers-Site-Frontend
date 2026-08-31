import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Home/Header"
import { Outlet } from "react-router-dom";
import "./Layout.css"

function HomeLayout(){
  return (
 
   <div className="page-wrapper">
        <main className="page-content">
          <Header/>
          <Navbar />
          <Outlet />
          </main>
          <Footer />
        </div>
  );
}
export default HomeLayout;



