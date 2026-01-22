import { Link } from "react-router-dom"
import { usePageTheme } from "../../../src/hooks/usePageTheme"

export default function SocialLinks() {

  usePageTheme('social-links')

  const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]

  return (
    <>
    <Link to={"/"}> 
    <span className="text-blue-700 text-lg select-none">
      Get back 
      </span>
      </Link>
    <div className="w-auto h-auto bg-(--card-bg) flex flex-col justify-center items-center rounded-2xl gap-4 p-8">
      <img src="subDomains\newbie\social-links\assets\images\avatar-jessica.jpeg" alt="" className="w-auto h-auto rounded-2xl"/>

      <span className="text-white text-2xl font-bold">Jessica Randall</span>
      <span className="text-(--text-accent) text-sm font-semibold">London, United Kingdom</span>
      <span className="text-white">"Front-end developer and avid reader.</span>

      <div className="space-y-3 w-80">
        {links.map((link) => (
          <div
          key={link}
          className="w-full bg-(--links) text-white 
          text-center py-4 rounded-lg 
          font-medium
          hover:bg-[#252525] 
          transition-colors
          cursor-pointer
          select-none"
          >
           {link} 
          </div>
        ))}
      </div>
    </div>
    </>
  )
}