import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { MdFitnessCenter, MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="bg-slate-300 ">
        <div>
          <Link to="">
            <div className="flex flex-row items-center justify-center gap-4 bg-slate-700 p-4 lg:justify-start">
              <img
                className="size-12"
                src="/src/assets/Images/logo.png"
                alt="logo"
              />
              <span className="text-xl text-white">Thrive</span>
            </div>
          </Link>
          <ul className="flex w-full overflow-auto lg:flex-col">
            <Link to="profile">
              <li className="flex w-40 cursor-pointer items-center gap-2 px-2 py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <FaUserCircle />
                <span>Profile</span>
              </li>
            </Link>
            <Link to="">
              <li className=" flex w-40 cursor-pointer items-center gap-2 px-2 py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <MdSpaceDashboard />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="goals">
              <li className=" flex w-40 cursor-pointer items-center gap-2 px-2 py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <TbTargetArrow /> <span>Goals</span>
              </li>
            </Link>
            <Link to="meals">
              <li className=" flex w-40 cursor-pointer items-center gap-2 px-2 py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <GiMeal /> <span>Meals</span>
              </li>
            </Link>
            <Link to="workout">
              <li className=" flex w-40  cursor-pointer items-center gap-2 px-2  py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <MdFitnessCenter />
                <span>Workout</span>
              </li>
            </Link>
            <Link to="resources">
              <li className=" flex w-40 cursor-pointer items-center gap-2 px-2 py-4 text-center hover:bg-slate-500 hover:text-slate-200 lg:w-60 lg:pl-4 lg:text-left">
                <HiMiniRectangleStack />
                <span>Resources</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
