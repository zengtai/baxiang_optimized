import React from "react"
import { Link } from "gatsby"
import Image from "./image"

export default function ScrollListItem({ items, addBig, lazy }) {
  return (
    <>
      {items.map(item => (
        <li
          className={`${
            addBig ? `col-span-2 row-span-2 md:col-auto md:row-auto` : ``
          } flex flex-col items-center`}
        >
          <Link
            to={`/game/${item.slug}`}
            className={`${
              addBig ? `h-full w-full md:h-auto md:w-auto` : ``
            } group relative transform overflow-hidden shadow-lg duration-300 ease-in-out md:hover:scale-110`}
          >
            <Image
              src={item.appid}
              alt={item.title}
              width={addBig ? `100%` : 100}
              height={addBig ? `100%` : 100}
              lazy={lazy ? `lazy` : `eager`}
            />

            <h2 className="absolute -bottom-0 z-10 hidden h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 p-2 text-center group-hover:flex">
              <span className="scale-95 text-xs">{item.title}</span>
            </h2>
          </Link>
        </li>
      ))}
    </>
  )
}
