import { Link } from "react-router-dom";
import { usePageTheme } from "../../../src/hooks/usePageTheme";
import React, { useState } from "react";

export default function TipCalc() {
  usePageTheme("tip-calc");

  const [activeTip, setActiveTip] = useState<number | "custom" | null>(0);
  const [customPercentage, setCustomPercentage] = useState<number | null>(null);
  const [visitors, setVisitors] = useState<number | null>(null);
  const [bill, setBill] = useState<number | null>(null);
  const [peopleError, setPeopleError] = useState<string | null>(null);

  const handleReset = () => {
    setActiveTip(null);
    setVisitors(null);
    setBill(null);
    setCustomPercentage(null);
    setPeopleError(null);
  };

  const activeTipPercentage = (value: number | "custom") => {
    if (value === activeTip) {
      return;
    } else {
      setActiveTip(value);
      setCustomPercentage(null);
    }
  };

  const getTipBtnClass = (
    activeBtn: number | "custom" | null,
    btnValue: number | "custom",
  ) => {
    return `w-28 min-h-12 text-xl rounded-lg p-6 cursor-pointer outline-none ${
      activeBtn === btnValue
        ? "bg-(--btn-active) text-(--btn-passive)"
        : "bg-(--btn-passive) text-white active:scale-95"
    }`;
  };

  const customBtnTextClass = () => {
    return `w-full bg-(--btn-act-custom) border-2 border-(--btn-act-custom) text-xl rounded-md p-2 placeholder-(--btn-passive) outline-none ${customPercentage === null ? "text-center focus:border-2 focus:border-(--btn-active)" : "flex justify-items-end outline-none border-2 border-(--btn-active) outline-none"}`;
  };

  const checkCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();

    if (val === "") {
      setCustomPercentage(null);
      return;
    }

    const num = Number(val);
    if (!isNaN(num) && num >= 0) {
      // проверяем, что число и не отрицательное
      setCustomPercentage(num);
    }
  };

  const getNumberOfVisitors = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();

    if (val === "") {
      setVisitors(null);
      setPeopleError(null);
      return;
    }

    const ppl = Number(val);

    if (isNaN(ppl)) {
      return; // буквы / символы - ничего не делаем
    }

    if (ppl === 0) {
      setPeopleError("Cant be zero");
      setVisitors(0);
    } else if (ppl > 0) {
      setPeopleError(null);
      setVisitors(ppl);
    }
  };

  const getBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();

    if (val === "") {
      setBill(null);
      return;
    }

    const bill = Number(val);
    if (!isNaN(bill) && bill >= 0) {
      setBill(bill);
    }
  };

  const tipPercent =
    activeTip === "custom" ? (customPercentage ?? 0) : (activeTip ?? 0);

  const tipAmountPerPerson =
    bill !== null && visitors !== null && visitors > 0
      ? (bill * tipPercent) / 100 / visitors
      : 0;

  const totalPerPerson =
    bill !== null && visitors !== null && visitors > 0
      ? (bill + (bill * tipPercent) / 100) / visitors
      : 0;

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="w-auto h-auto flex flex-col justify-center items-center text-(--text-accent) mb-16">
          <span className="w-full flex justify-evenly text-2xl tracking-[12px]">
            SPLI
          </span>
          <span className="w-full flex justify-evenly text-2xl tracking-[12px]">
            TTER
          </span>
        </div>

        <div className="w-full flex justify-self-start">
          <Link to={"/"}>
            <span className="w-full text-blue-700 text-lg select-none mx-4">
              Get back
            </span>
          </Link>
        </div>

        <div className="w-[850px] h-[400px] flex justify-center items-center bg-(--card-bg) rounded-2xl p-8 gap-8">
          {/* Left side of calc */}
          <div className="w-1/2 h-auto flex flex-col justify-center items-start gap-6">
            <div className="relative w-full select-none">
              <span className="text-(--text-accent) text-md">Bill</span>
              <img
                src="..\subDomains\junior\tip-calculator\images\icon-dollar.svg"
                alt=""
                className="absolute bottom-3.5 left-2.5"
              />
              <input
                type="text"
                value={bill ?? ""}
                onChange={getBill}
                placeholder=""
                className="w-full flex justify-items-end min-h-10 bg-(--btn-act-custom) border-2 border-(--btn-act-custom) text-(--btn-passive) text-xl focus:outline-none focus:border-2 focus:border-(--btn-active) rounded-md p-2"
              />
            </div>

            <div className="w-full h-auto">
              <span className="text-(--text-accent) text-md">Select tip %</span>
              <div className="w-full grid grid-rows-2 grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    activeTipPercentage(5);
                  }}
                  value={5}
                  className={getTipBtnClass(activeTip, 5)}
                >
                  <span>5%</span>
                </button>
                <button
                  onClick={() => {
                    activeTipPercentage(10);
                  }}
                  value={10}
                  className={getTipBtnClass(activeTip, 10)}
                >
                  <span>10%</span>
                </button>
                <button
                  onClick={() => {
                    activeTipPercentage(15);
                  }}
                  value={15}
                  className={getTipBtnClass(activeTip, 15)}
                >
                  <span>15%</span>
                </button>
                <button
                  onClick={() => {
                    activeTipPercentage(25);
                  }}
                  value={25}
                  className={getTipBtnClass(activeTip, 25)}
                >
                  <span>25%</span>
                </button>
                <button
                  onClick={() => {
                    activeTipPercentage(50);
                  }}
                  value={50}
                  className={getTipBtnClass(activeTip, 50)}
                >
                  <span>50%</span>
                </button>
                <button
                  onClick={() => {
                    activeTipPercentage("custom");
                  }}
                  className={getTipBtnClass(activeTip, "custom")}
                >
                  <input
                    type="text"
                    className={customBtnTextClass()}
                    placeholder="Custom"
                    value={customPercentage ?? ""}
                    onChange={checkCustomTip}
                  />
                </button>
              </div>
            </div>

            <div className="relative w-full select-none">
              <div className="flex justify-between">
                <span className="text-(--text-accent) text-md">
                  Number of people
                </span>
                <span className="text-red-500 text-sm">{peopleError}</span>
              </div>
              <img
                src="..\subDomains\junior\tip-calculator\images\icon-person.svg"
                alt=""
                className="absolute bottom-3.5 left-2.5"
              />
              <input
                type="text"
                value={visitors ?? ""}
                placeholder=""
                className="w-full flex justify-items-end min-h-10 bg-(--btn-act-custom) border-2 border-(--btn-act-custom) text-(--btn-passive) text-xl focus:outline-none focus:border-2 focus:border-(--btn-active) rounded-md p-2"
                onChange={getNumberOfVisitors}
              />
            </div>
          </div>

          {/* Right side of calc */}
          <div className="min-w-1/2 w-auto h-full flex justify-center items-center bg-(--btn-passive) rounded-2xl p-6">
            {/* Tip \ total \ btn */}
            <div className="w-full h-full flex flex-col justify-between items-center py-4">
              {/* Tip amount / person */}
              <div className="w-full flex flex-col gap-6">
                <div className="w-full h-full flex justify-between items-start">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-(--btn-act-custom) text-md">
                      Tip Amount
                    </span>
                    <span>/ person</span>
                  </div>
                  {/* TODO: Add total bill*/}
                  <span className="text-5xl text-(--btn-active)">
                    ${tipAmountPerPerson.toFixed(2)}
                  </span>
                </div>

                {/* Total \ person */}
                <div className="w-full h-full flex justify-between items-start">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-(--btn-act-custom) text-md">
                      Total
                    </span>
                    <span>/ person</span>
                  </div>
                  {/* TODO: Add total ppl */}
                  <span className="text-5xl text-(--btn-active)">
                    ${totalPerPerson.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full h-1/5 bg-(--btn-active) rounded-md text-(--btn-passive) text-xl cursor-pointer select-none outeline-none active:scale-95"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
