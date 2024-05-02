import React from "react";
import { supabase } from "../helper/supabaseClient";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        // value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <>
      <div className=" h-screen">
        <div className="flex gap-4">
          <img
            className="size-16 rounded-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf18bf7FxVHVpfei3VuR2JSE3iqU5uY12rgUBh6Ai4hQ&s"
            alt="profile-photo"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">
              {user.user_metadata?.full_name}
            </h2>
            <p className="">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <p className="mr-20 mt-10 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora unde
          commodi odit quidem reprehenderit ut quis iusto maxime dignissimos?
          Sed, architecto. Tempora voluptatibus neque est veritatis eum, nobis
          quibusdam assumenda?
        </p>
      </div>
    </>
  );
}
