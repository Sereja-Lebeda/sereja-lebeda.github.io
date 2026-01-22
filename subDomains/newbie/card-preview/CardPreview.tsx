import { Link } from "react-router-dom"
import Styles from "./CardPreview.module.css"
import { usePageTheme } from "../../../src/hooks/usePageTheme"
import Illustration from "./assets/images/Illustration"

export default function CardPreview() {

  usePageTheme('card-preview')

  return (
    <>
    <Link to={"/"}> 
    <span className="text-blue-700 text-lg select-none">
      Get back 
      </span>
      </Link>

    <div className={Styles.whiteBox}>
      <Illustration className="rounded-xl w-[320px]"/>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="w-auto h-auto bg-[#f5d04e] rounded-md font-bold p-2">
          Learning
        </div>

        <div className="font-semibold text-sm">Published 21 Dec 2023</div>

        <div className="font-bold text-2xl text-black">HTML & CSS foundations</div>

        <div>These languages are backbone of every website, defining structure, content nad presentation.</div>
      
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src=".\subDomains\newbie\card-preview\assets\images\image-avatar.webp" alt="1" className="w-8 h-8"/>
          <span className="font-bold">Greg Hooper</span>
        </div>
      </div>

    </div>
    </>
  )
}