import React, { useEffect, useState } from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { supabase } from "../helper/supabaseClient";
import ProgressChart from "./UI/ProgressChart"; // Ensure that ProgressChart is imported
import MealRecommendations from "./DashBoardMeals";
import ExerciseRecommendations from "./DashBoardExercise";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    await supabase.auth.signOut();
    setUser({}); // Clear user state
    navigate("/");
  }

  return (
    <div className="">
      {Object.keys(user).length !== 0 ? (
        <>
          <div className="flex flex-row-reverse justify-between">
            <div className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 ">
              <RiLogoutBoxRFill />
              <button onClick={signOutUser}>Log out</button>
            </div>
          </div>
          <h1 className="bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-5xl font-extrabold text-transparent">
            Hi {user.user_metadata?.full_name}!
          </h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            architecto nisi, cumque similique ipsa adipisci obcaecati, est
            possimus perspiciatis repellendus eveniet tempora commodi recusandae
            dolorem iusto rem ducimus incidunt vel!
          </p>
          <ProgressChart /> {/* Ensure this component is rendered */}
          <div className="pt-10">
            <MealRecommendations />
          </div>
          <div className="pt-10">
            <ExerciseRecommendations />
          </div>
        </>
      ) : (
        <h1>User not logged in</h1>
      )}
    </div>
  );
}
