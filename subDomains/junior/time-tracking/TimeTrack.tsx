import { usePageTheme } from "../../../src/hooks/usePageTheme";
import { Link } from "react-router-dom";
import { useState } from "react";

import ActivityCard from "./ActivityCard";
import { activityIcons, activityColors } from "./activityProps";
import timeTrackingData from "./data.json";

export default function TimeTrack() {
  usePageTheme("time-track");

  type TimeframeKey = "daily" | "weekly" | "monthly";
  const [rangeActivity, setRangeActivity] = useState<TimeframeKey>("daily");
  // rangeActivity = "daily" | "weekly" | "monthly";

  const handleRangeChange = (newRange: "daily" | "weekly" | "monthly") => {
    setRangeActivity(newRange);
  };

  const getRangeButtonClass = (current: string, target: string) => {
    return `
    w-full flex items-start px-4 py-2 rounded-md cursor-pointer
    ${
      current === target
        ? "text-white font-semibold bg-(--user-card-bg)"
        : "text-gray-400 hover:text-white"
    }
  `;
  };

  return (
    <>
      <div className="p-6">
        <Link to={"/"}>
          <span className="text-blue-700 text-lg select-none">Get back</span>
        </Link>

        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[200px_200px] gap-8">
          <div className="row-span-2">
            {/* Background of card (dark color) */}
            <div className="w-full h-full bg-(--card-bg) rounded-2xl">
              {/* Background of user card w/ information */}
              <div className="w-auto h-auto flex flex-col justify-center items-start bg-(--user-card-bg) rounded-2xl p-6">
                <img
                  src="..\subDomains\junior\time-tracking\images\image-jeremy.png"
                  alt=""
                  className="w-24 h-24 border-3 border-white rounded-full"
                />
                <div className="flex flex-col justify-center items-start py-6">
                  <span className="">Report for</span>
                  <span className="text-4xl text-white">Jeremy Robson</span>
                </div>
              </div>

              <div className="w-full flex flex-col items-start p-5 space-y-1 text-lg">
                <button
                  onClick={() => {
                    handleRangeChange("daily");
                  }}
                  className={getRangeButtonClass(rangeActivity, "daily")}
                >
                  Daily
                </button>

                <button
                  onClick={() => {
                    handleRangeChange("weekly");
                  }}
                  className={getRangeButtonClass(rangeActivity, "weekly")}
                >
                  Weekly
                </button>

                <button
                  onClick={() => {
                    handleRangeChange("monthly");
                  }}
                  className={getRangeButtonClass(rangeActivity, "monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>

          {timeTrackingData.map((item) => (
            <ActivityCard
              key={item.title}
              title={item.title}
              currentFigure={item.timeframes[rangeActivity].current}
              previousFigure={item.timeframes[rangeActivity].previous}
              range={rangeActivity}
              backgroundColor={activityColors[item.title]}
              backgroundIcon={activityIcons[item.title]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
