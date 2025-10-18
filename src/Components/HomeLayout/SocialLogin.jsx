import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LiaGithub } from "react-icons/lia";

const SocialLogin = () => {
  return (
    <div >
      <h2 className="font-bold mb-5">login with</h2>
    <div className="space-y-3 flex flex-col">
          <button className="btn btn-outline btn-secondary "><FcGoogle  size={24} /> 
        Login with Google
      </button>
      <button className="btn btn-outline btn-primary"><LiaGithub  size={24}/>
        Login with Github
      </button>
    </div>
    </div>
  );
};

export default SocialLogin;
