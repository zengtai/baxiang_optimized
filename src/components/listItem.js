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
          <img src={item.icon_url} alt={item.title} className="object-fit" />

          <h2 className="absolute -bottom-0 z-10 hidden h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 p-2 text-center group-hover:flex">
            <span className="scale-95 text-xs">{item.title}</span>
          </h2>
          {/* <div>{item.category.name}</div> */}
        </Link>
      </li>
    )
  }
  if (type === "card") {
    return (
      <li>
        <Link to={`/game/${item.slug}`}>
          <div>
            <img src={item.icon_url} alt={item.title} />
          </div>
        </Link>
        <h2>{item.title}</h2>
        {/* <Link to={`/category/${item.category.slug}`}>
          <div>{item.category.name}</div>
        </Link> */}
      </li>
    )
  } else {
    return <>OK</>
  }
}
