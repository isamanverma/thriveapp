import React from "react";
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import Blogpage from "./Blogpage";
import FAQ from "./FAQ";
import KeyFeatures from "./KeyFeatures";
import Benefits from "./Benefits";

export default function LandingPage() {
  const blogData = [
    {
      id: 1,
      title: "The Benefits of Regular Exercise",
      excerpt:
        "Discover the numerous benefits of incorporating regular exercise into your daily routine.",
      imageUrl: "/Images/RegularExercise.jpg",
    },
    {
      id: 2,
      title: "Healthy Eating Habits for a Balanced Diet",
      excerpt:
        "Learn about the importance of healthy eating habits and how they contribute to a balanced diet.",
      imageUrl: "/Images/BalancedDiet.jpg",
    },
    {
      id: 3,
      title: "Tips for Improving Mental Health",
      excerpt:
        "Explore effective strategies for enhancing mental well-being and maintaining a positive mindset.",
      imageUrl: "/Images/MentalHealth.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroPage />
      <KeyFeatures />
      <Benefits />
      <Blogpage blogs={blogData} />
      <FAQ />
      <Footer />
    </>
  );
}
