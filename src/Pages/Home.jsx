import React from "react";
import NavEle from "../Components/NavEle/NavEle";
import "./Home.modules.css";
import buld from "../Assets/Images/buld.png";
import HomeContent from "./HomeContent";
import About from "./About";
import EdgeServices from "./EdgeServices";
import Portfolio from "./Portfolio";
import Carrers from "./Carrers";
import Servfeatures from "./Servfeatures";
import Contact from "./Contact";
import Email from "./Email";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="Home">
      <NavEle />
      <HomeContent />
      <About />
      <EdgeServices />
      <Carrers />
      <Portfolio />
      <Servfeatures/>
      <Contact/>
      <Email/>
      <Footer/>
    </div>
  );
}
