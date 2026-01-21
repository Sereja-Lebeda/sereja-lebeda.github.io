import { createBrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import QrCode from "../subDomains/newbie/qr-code/QrСode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/qr-code",
    element: <QrCode />
  },
  {
    path:"*",
    element: <div>Error 404</div>
  }
])