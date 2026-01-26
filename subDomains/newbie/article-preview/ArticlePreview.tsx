import { Link } from "react-router-dom";
import { usePageTheme } from "../../../src/hooks/usePageTheme";
import { useState, useEffect, useRef } from "react";

import IconShare from "./images/icon-share"

export default function ArticlePreview() {
  
  usePageTheme("article-preview")

  const shareContainerRef = useRef<HTMLDivElement>(null);

  const [activeShareBtn, setActiveShareBtn] = useState(false)

  const handleActiveBtn = () => {
    setActiveShareBtn(!activeShareBtn)
  }
  
  useEffect(() => {
    // Если попап закрыт — ничего не делаем
    if (!activeShareBtn) return;
  
    const handleClickOutside = (event: MouseEvent) => {
      // Проверяем, попал ли клик ВНУТРИ нашего контейнера
      if (shareContainerRef.current && !shareContainerRef.current.contains(event.target as Node)) {
        setActiveShareBtn(false);
      }
    };
  
    // Вешаем слушатель
    document.addEventListener("mousedown", handleClickOutside);
  
    // Cleanup — обязательно!
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeShareBtn]);   // зависимость — только от состояния попапа

  return (
    <>
    <Link to={"/"}> 
    <span className="text-blue-700 text-lg select-none mx-4">
      Get back 
      </span>
      </Link>

    <div className="w-[750px] h-[300px] bg-white rounded-2xl flex justify-center items-center mx-4">
      <img src="subDomains\newbie\article-preview\images\drawers.jpg" alt="" className="rounded-l-2xl h-[300px] w-[290px] "/>
      <div className="px-4 py-4">
        <div className="w-full h-full flex flex-col justify-start items-start gap-4">
          <span className="font-bold text-(--text-primary) text-2xl">Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home</span>
          <span className="text-(--text-primary)">Ever been in a room and felt like something was missing? Perhaps 
    it felt slightly bare and uninviting. I’ve got some simple tips 
    to help you make any room feel complete.</span>
        
        <div className="w-full h-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="subDomains\newbie\article-preview\images\avatar-michelle.jpg" alt="" className="w-12 h-12 rounded-full"/>
            <div className="flex flex-col justify-center items-start">
              <span>Michelle Appleton</span>
              <span>28 Jun 2020</span>
            </div>
          </div>

          {/* <div className="relative"> */}
            <div className="relative" ref={shareContainerRef}>
              <button className="group w-8 h-8 border-2 border-(--text-primary) rounded-full flex justify-center items-center cursor-pointer select-none hover:bg-(--text-primary)"
              onClick={handleActiveBtn}
              >
                {/* Share  */}
                <IconShare className="text-[#6E8098] group-hover:text-white select-none"/>
              </button>
              {activeShareBtn ? (
                  <>
                  
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[220px] h-[60px] mb-4 bg-(--card-bg) rounded-2xl select-none">
                    
                    <div className="flex justify-between items-center select-none p-4">
                      <a href="#" className="hover:scale-[1.2]">Share</a>
                      <a href="#"><img src="subDomains\newbie\article-preview\images\icon-facebook.svg" alt="Facebook" className="hover:scale-[1.4]"/></a>
                      <a href="#"><img src="subDomains\newbie\article-preview\images\icon-twitter.svg" alt="Twitter" className="hover:scale-[1.4]"/></a>
                      <a href="#"><img src="subDomains\newbie\article-preview\images\icon-pinterest.svg" alt="Pinterest" className="hover:scale-[1.4]"/></a>
                    </div>
                    
                    <div className="absolute left-1/2 top-15 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent
          border-r-[8px] border-r-transparent border-t-[8px] border-t-(--card-bg)" />
                  </div>
                  </>
                ): (
                  <></>
                )}
            </div>
          {/* </div> */}
        </div>
        </div>

      </div>

    </div>
    </>
  )
}