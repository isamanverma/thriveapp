import React from "react";
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import Blogpage from "./Blogpage";
import FAQ from "./FAQ";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Blogpage />
      <FAQ />
      <Footer />
    </>
  );
}
