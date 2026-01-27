import React, { useState } from "react";

import { usePageTheme } from "../../../src/hooks/usePageTheme";
import { Link } from "react-router-dom";

export default function SignUp() {
  usePageTheme("sign-up");

  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // if (!inputEmail.trim()) {
    //   setError("Email is required");
    // } else if (!EMAIL_REGEX.test(inputEmail)) {
    //   setError("Valid email required");
    // } else {
    //   setError(""); // * Clear error if email is valid
    // }
  };

  const handleToggle = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (subscribe) {
      setSubscribe(false);
      setEmail("");
      setError("");
      return;
    } else {
      const trimmed = email.trim();
      if (trimmed === "") {
        setError("Email is required");
        return;
      }
      if (!EMAIL_REGEX.test(trimmed)) {
        setError("Valid email required");
        return;
      }
      setSubmittedEmail(trimmed);
      setSubscribe(true);
      setError("");
      setEmail("");

      //   if (email.trim()! != "" && error === "") {
      //     if (!error && email) {
      //       setSubscibe(true);
      //       console.log("Email submitted");
      //     }
      //   } else {
      //     setError("Email is required");
      //   }
    }
  };

  const baseClasses =
    "w-full h-12 border-1 border-(--input-border) rounded-lg p-4";

  const errorClasses = error
    ? "pt-4 font-bold border-red-400 bg-red-200 outline-none"
    : "border-(--input-border)";

  return (
    <>
      <Link to={"/"}>
        <span className="text-blue-700 text-lg select-none">Get back</span>
      </Link>

      {subscribe ? (
        <div className="w-120 h-auto bg-(--card-bg) rounded-4xl space-y-8 flex flex-col justify-center items-center p-8">
          <div className="w-full">
            <img
              src="..\subDomains\newbie\sign-up\assets\images\icon-success.svg"
              alt=""
            />
          </div>
          <span className="font-bold text-6xl">Thanks for subscribing!</span>
          <span>
            A confirmation email has been sent to{" "}
            <span className="font-bold">{submittedEmail}</span>. Please open it
            and click the button inside to confirm your subscription.
          </span>

          <button
            className="w-full h-12 bg-(--text-primary) text-white rounded-xl select-none cursor-pointer
          hover:bg-[linear-gradient(90deg,rgba(255,83,119,1)_0%,rgba(255,105,62,1)_100%)] hover:font-semibold
          "
            onClick={handleToggle}
          >
            Dismiss message
          </button>
        </div>
      ) : (
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
              <div className="flex justify-between items-center">
                <span className="pt-4 font-bold text-md">Email address</span>
                {error && (
                  <span
                    id="email-error"
                    className="pt-4 font-bold"
                    style={{ color: "red" }}
                  >
                    {error}
                  </span>
                )}
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                className={`${baseClasses} ${errorClasses}`}
                required
                value={email}
                onChange={handleChange}
              />

              <button
                className="w-full h-12 bg-(--text-primary) text-white rounded-xl select-none cursor-pointer
              hover:bg-[linear-gradient(90deg,rgba(255,83,119,1)_0%,rgba(255,105,62,1)_100%)] hover:font-semibold
              "
                onClick={handleToggle}
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
      )}
    </>
  );
}
