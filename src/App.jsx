import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Goals from "./components/Goals";
import Meals from "./components/Meals";
import Workout from "./components/Workout";
import Resources from "./components/Resources";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route path="" element={<LandingPage />} />
              <Route exact path="signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          }
        />
        <Route
          path="/app/*"
          element={
            <div className="flex flex-col lg:flex-row">
              <Sidebar />
              <div className="flex-grow bg-gray-100 p-4">
                <Routes>
                  <Route index element={<Dashboard />} />

                  <Route path="profile" element={<Profile />} />
                  <Route path="goals" element={<Goals />} />
                  <Route path="meals" element={<Meals />} />
                  <Route path="workout" element={<Workout />} />
                  <Route path="resources" element={<Resources />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
