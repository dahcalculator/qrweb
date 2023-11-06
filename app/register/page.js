"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();


    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,

      });

 
      if (data.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (

    <div className="container container-fluid">
     
     
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5 flex justify-center items-center">
          <form
            className="border border-secondary rounded p-4 w-96 bg-white"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4 font-bold  text-xl">Register</h1>

            <div className="form-outline mb-4 space-x-5">
              <br/><label className="form-label font-bold" htmlFor="name_field">
                Full name
              </label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4 space-x-5">
             <br/> <label className="form-label font-bold" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4 space-x-5">
              <br/><label className="form-label font-bold" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4
              w-full bg-blue-500 m-2 p-2 font-bold  hover:text-white
              "
            >
              Register
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
