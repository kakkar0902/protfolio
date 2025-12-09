import React from "react";

import { Header } from "./Header";
import Intro from "./Intro";
import { Projects } from "./Projects";
import { FooterForm } from "./FooterForm";


import yellowBg from "../assets/yellow-bg.jpg";
import image2 from "../assets/image-2.png";

export default function PortfolioWithForm() {
  return (
    <div className="portfolio-layout">

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT: Header + Intro */}
        <div className="hero-left">
          <Header />
          <Intro />
        </div>

        {/* RIGHT: Yellow BG + Sonia Image */}
        <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  }}
>
  <div
    style={{
      position: "relative",
      width: "450px",
      height: "450px",
      overflow: "hidden",
      background: "#f7c526", 

     
      borderBottomLeftRadius: "450px",
      borderBottomRightRadius: "450px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Yellow Gradient Background */}
    <img
      src={yellowBg}
      alt="yellow"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
      }}
    />

    {/* Main Hero Photo */}
    <img
      src={image2}
      alt="Sonia"
      style={{
        position: "absolute",
        bottom: 0,
        height: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
      }}
    />
  </div>
</div>



      </section>

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT + FOOTER */}
      <FooterForm />
    </div>
  );
}
