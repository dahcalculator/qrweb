"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import logo from "../../public/images/logo.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");


  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (data.error) {
        setError("Invalid Credentials");
        return;
      }

      console.log(data);
      router.replace("dashboard")
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <div className="container container-fluid bg">
      <div className="">
        <div className="flex justify-center items-center  flex-col">
          <Image
          src={logo}
          width={90}
             height={90}
          />

          <form
            className="border border-secondary rounded p-4 w-96 bg-white"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4 font-bold  text-xl">Login</h1>
            <div className="form-outline mb-4 flex-col space-x-5">
              <br/><label className="form-label font-bold" htmlFor="email_field">
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
              className="w-full bg-blue-500 m-2 p-2 font-bold  hover:text-white"
            >
              Sign in
            </button>
            {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

            <div className="text-center">
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
