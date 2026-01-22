import { createBrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import QrCode from "../subDomains/newbie/qr-code/QrСode";
import CardPreview from "../subDomains/newbie/card-preview/CardPreview"

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
    path: "/card-preview",
    element: <CardPreview />
  },
  {
    path:"*",
    element: <div>Error 404</div>
  }
])