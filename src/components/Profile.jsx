import React, { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { FaUser, FaEnvelope, FaBirthdayCake } from "react-icons/fa";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserData() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }
    getUserData();
  }, []);

  // Dummy user data
  const userDetails = {
    email: user.user_metadata?.full_name,
    birthday: "2004-07-30",
    weight: "85 kg",
    height: "1760 cm",
  };

  const userGoals = {
    dailySteps: 10000,
    dailyWaterIntake: "8 cups",
    targetWeight: "71 kg",
  };

  return (
    <div className="container mx-auto h-screen px-4 py-8">
      <>
        <div className=" md:pl-10">
          <div className="flex gap-4">
            <img
              className="size-16 rounded-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf18bf7FxVHVpfei3VuR2JSE3iqU5uY12rgUBh6Ai4hQ&s"
              alt="profile-photo"
            />
          </div>

        </div>
      </>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-8 flex items-center gap-4">
            <div>
              <h2 className="text-xl font-bold">
                {user.user_metadata?.full_name}
              </h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProfileCard title="User Details">
              <ul className="space-y-2">
                <ListItem icon={<FaEnvelope />} text={userDetails.email} />
                <ListItem
                  icon={<FaBirthdayCake />}
                  text={userDetails.birthday}
                />
              </ul>
            </ProfileCard>
            <ProfileCard title="User Goals">
              <ul className="space-y-2">
                <ListItem
                  icon={<FaUser />}
                  text={`Daily Steps: ${userGoals.dailySteps}`}
                />
                <ListItem
                  // icon={<GiWeight />}
                  text={`Target Weight: ${userGoals.targetWeight}`}
                />
                <ListItem
                  // icon={<GiHeight />}
                  text={`Daily Water Intake: ${userGoals.dailyWaterIntake}`}
                />
              </ul>
            </ProfileCard>
          </div>
        </>
      )}
    </div>
  );
}

const ProfileCard = ({ title, children }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
};

const ListItem = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-2">
      <span className="text-gray-600">{icon}</span>
      <span>{text}</span>
    </li>
  );
};
