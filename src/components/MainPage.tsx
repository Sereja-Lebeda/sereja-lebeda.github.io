import SubdomainCard from "./SubdomainCard";
// import { usePageTheme } from "../hooks/usePageTheme";

export default function MainPage() {
  // useThemePage('main')

  const cards = [
    { name: "QR Code", path: "/qr-code" },
    { name: "Card Preview", path: "/card-preview" },
    { name: "Social links", path: "/social-links" },
    { name: "Recipe page", path: "/recipe-page" },
    { name: "Article Preview", path: "/article-preview" },
    { name: "Sign Up", path: "/sign-up" },
    // { name: "ToDo", path: "/todo" },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center select-none gap-4">
        {cards.map((card) => (
          <SubdomainCard key={card.path} name={card.name} path={card.path} />
        ))}
      </div>
    </>
  );
}
