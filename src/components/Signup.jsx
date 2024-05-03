import { supabase } from "../helper/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      // User is signed in, forward to /app
      navigate("/app");
    } else {
      // User is signed out, forward to signup page
      navigate("/signup");
    }
  });

  return (
    <>
      <div className="grid h-screen w-screen place-items-center">
        <div className="w-1/2 rounded border-2 p-4 md:w-1/3">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
