import * as React from "react"
import { Link } from "gatsby"

export default function ListItem({ item, type }) {
  // console.log(item)
  if (type === "grid") {
    return (
      <li className="flex flex-col items-center">
        <Link
          to={`/game/${item.slug}`}
          className="group relative h-24 w-24 transform overflow-hidden rounded-xl shadow-lg duration-300 ease-in-out md:hover:scale-110"
        >
          <img
            src={item.icon_url}
            alt={item.title}
            className="object-fit"
            loading="lazy"
          />

          <h2 className="absolute -bottom-0 z-10 hidden h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 p-2 text-center group-hover:flex">
            <span className="scale-95 text-xs">{item.title}</span>
          </h2>
        </Link>
      </li>
    )
  }
  if (type === "card") {
    return (
      <li>
        <Link
          to={`/game/${item.slug}`}
          className="group relative block h-24 transform overflow-hidden rounded-xl bg-white/10 pl-28 shadow-lg duration-300 ease-in-out md:hover:scale-110"
        >
          <img
            src={item.icon_url}
            alt={item.title}
            className="absolute left-0 h-24 w-24 "
            loading="lazy"
          />
          <h2 className="py-2">{item.title}</h2>
          <span className="inline-block origin-left scale-90 rounded-md bg-black/10 px-1.5 py-1 text-xs">
            <span className="uppercase opacity-60">{item.category.name}</span>
          </span>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </li>
    )
  } else {
    return <>OK</>
  }
}
