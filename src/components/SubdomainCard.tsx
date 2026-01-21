import { Link } from "react-router-dom"

interface SubdomainCardProps {
  name: string,
  path: string,
  className?: string;
}

export default function SubdomainCard ({
  name,
  path,
  className = "",
}: SubdomainCardProps) {

  return (
    <>
      <Link
      to={path}
      className={`w-40 h-40 flex justify-center items-center border rounded-lg shadow hover:bg-muted hover:scale-105 transition-all duration-200 cursor-pointer ${className}`}
    >
      {name}
    </Link>
    </>
  )
}