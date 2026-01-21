import SubdomainCard from "./SubdomainCard"
// import { usePageTheme } from "../hooks/usePageTheme";

export default function MainPage() {

  // useThemePage('main')

  const cards = [
    { name: "QR Code", path: "/qr-code" },
    // { name: "Счётчик", path: "/counter" },
    // { name: "ToDo", path: "/todo" },
  ];

  return (
    <>
    <div className="flex flex-wrap justify-center items-center select-none">
    {cards.map((card) => (
        <SubdomainCard
          key={card.path}
          name={card.name}
          path={card.path}
        />
      ))}
    </div>
    </>
  )
}