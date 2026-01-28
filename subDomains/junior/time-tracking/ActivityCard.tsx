interface ActivityCardProps {
  title: string;
  currentFigure: number;
  previousFigure: number;
  backgroundColor: string;
  backgroundIcon: string;
  range: string;
}

export default function ActivityCard({
  title,
  currentFigure,
  previousFigure,
  range,
  backgroundColor,
  backgroundIcon,
}: ActivityCardProps) {
  return (
    <>
      <div className="relative">
        <div
          className={`relative w-full h-full flex flex-col ${backgroundColor} rounded-2xl rounded-b-3xl overflow-hidden`}
        >
          <div className="absolute right-4 -top-2 w-14 h-14 overflow-hidden rounded-t-2xl z-0">
            <img
              src={backgroundIcon}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
        <div className="absolute w-full h-full top-7">
          {/* Card bg with information */}
          <div className="w-full h-7/8 bg-(--card-bg) rounded-2xl px-4 py-2 mt-auto z-10 hover:bg-(--card-bg-hover) hover:scale-105">
            <div className="flex flex-col justify-center items-start space-y-3 pt-2">
              {/* Title and btn */}
              <div className="w-full flex justify-between items-center pb-2">
                <span className="font-bold text-xl">{title}</span>
                <button>
                  <img
                    src="..\subDomains\junior\time-tracking\images\icon-ellipsis.svg"
                    alt=""
                    className="hover:color-white cursor-pointer"
                  />
                </button>
              </div>

              {/* Current figure */}
              <div>
                <span className="text-6xl text-white">{currentFigure}hrs</span>
              </div>

              {/* Previous figure */}
              <div>
                <span>
                  Last {range} - {previousFigure}hrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
