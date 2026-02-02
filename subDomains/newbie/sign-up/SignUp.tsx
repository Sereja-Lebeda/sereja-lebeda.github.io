import React, { useState } from "react";

import { usePageTheme } from "../../../src/hooks/usePageTheme";
import { Link } from "react-router-dom";

export default function SignUp() {
  usePageTheme("sign-up");

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!inputEmail) {
      setError("Email us required");
    } else if (!EMAIL_REGEX.test(inputEmail)) {
      setError("Please enter a valid email (e.g. user@domain.com)");
    } else {
      setError(""); // * Clear error if email is valid
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!error && email) {
      alert("Email submitted");
    }
  };

  return (
    <>
      <Link to={"/"}>
        <span className="text-blue-700 text-lg select-none">Get back</span>
      </Link>

      <div className="w-220 h-auto bg-(--card-bg) rounded-4xl flex justify-center items-center">
        <div className=" h-full flex flex-col justify-center items-start p-10 space-y-4">
          <span className="text-5xl text-(text-primary) font-bold">
            Stay updated!
          </span>

          <span className="wrap-break-word text-lg">
            Join 60,000+ product managers receiving monthly updates on:
          </span>

          <div className="hauto flex flex-col justify-center items-start ">
            <div className="flex justify-start items-center gap-4">
              <img
                src="..\subDomains\newbie\sign-up\assets\images\icon-list.svg"
                alt=""
              />
              <span>Product discovery and building what matters</span>
            </div>

            <div className="flex justify-start items-center gap-4">
              <img
                src="..\subDomains\newbie\sign-up\assets\images\icon-list.svg"
                alt=""
              />
              <span>Measuring to ensure updates are a success</span>
            </div>

            <div className="flex justify-start items-center gap-4">
              <img
                src="..\subDomains\newbie\sign-up\assets\images\icon-list.svg"
                alt=""
              />
              <span>And much more!</span>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2">
            <span className="pt-4 font-bold text-md">Email address</span>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-full h-12 border-2 border-(--input-border) rounded-lg p-4"
              required
              value={email}
              onChange={handleChange}
            />
            {error && (
              <span id="email-error" style={{ color: "red" }}>
                {error}
              </span>
            )}

            <button
              className="w-full h-12 bg-(--text-primary) text-white rounded-xl select-none cursor-pointer
            hover:bg-[linear-gradient(90deg,rgba(255,83,119,1)_0%,rgba(255,105,62,1)_100%)] hover:font-semibold
            "
              onClick={handleSubmit}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>

        <img
          src="..\subDomains\newbie\sign-up\assets\images\illustration-sign-up-desktop.svg"
          alt=""
          className="rounded-2xl p-4"
        />
      </div>
    </>
  );
}
