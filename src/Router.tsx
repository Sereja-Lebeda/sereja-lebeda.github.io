import { createBrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import QrCode from "../subDomains/newbie/qr-code/QrСode";
import CardPreview from "../subDomains/newbie/card-preview/CardPreview";
import SocialLinks from "../subDomains/newbie/social-links/SocialLinks";
import RecipePage from "../subDomains/newbie/recipe-page/RecipePage";
import ArticlePreview from "../subDomains/newbie/article-preview/ArticlePreview";
import SignUp from "../subDomains/junior/sign-up/SignUp";
import TimeTrack from "../subDomains/junior/time-tracking/TimeTrack";
import TipCalculator from "../subDomains/junior/tip-calculator/TipCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/qr-code",
    element: <QrCode />,
  },
  {
    path: "/card-preview",
    element: <CardPreview />,
  },
  {
    path: "/social-links",
    element: <SocialLinks />,
  },
  {
    path: "/recipe-page",
    element: <RecipePage />,
  },
  {
    path: "/article-preview",
    element: <ArticlePreview />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/time-track",
    element: <TimeTrack />,
  },
  {
    path: "/tip-calc",
    element: <TipCalculator />,
  },
  {
    path: "*",
    element: <div>Error 404</div>,
  },
]);
