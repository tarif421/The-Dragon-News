import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" flex justify-center min-h-screen  items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="name" />
            {/* photo url */}
            <label className="label">Photo url</label>
            <input type="text" className="input" placeholder="photo url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="text-center">
              <a className="link link-hover r">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-blue-500 underline text-media "
              >
                Login
              </Link>{" "}
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
