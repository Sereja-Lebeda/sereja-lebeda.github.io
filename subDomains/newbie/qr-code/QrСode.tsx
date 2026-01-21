import styles from "./style.module.css"
import { Link } from "react-router-dom"

import { usePageTheme } from "../../../src/hooks/usePageTheme"

export default function QrCode() {

  usePageTheme('qr-code')

  return (
    <>
    <Link to={"/"}> 
    <span className="text-blue-700 text-lg select-none">
      Get back 
      </span>
      </Link>
      <div className={styles.whiteBox}>
        <div className={styles.qr}>
          <img src=".\subDomains\newbie\qr-code\images\image-qr-code.png" alt="123" />
        </div>

        <div className={styles.textSpans}>
          <span className={styles.mainText}>
            Improve your front-end skills by building projects
          </span>

          <span className={styles.miniText}>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </span>
        </div>
      </div>
    </>
  )
}