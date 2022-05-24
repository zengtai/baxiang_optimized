import * as React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Image from "./image"
import getIcon from "./icons"

export default function ListItem({
  index,
  item,
  type,
  lazy,
  focus,
  top,
  addBig,
}) {
  let delay = `${(Math.random() * 10).toFixed(1)}s`
  // console.log(item)

  if (type === "grid") {
    // console.log(gameImg)
    if (top) {
      const tops = [`top1`, `top2`, `top3`]
      return (
        <li className={`flex flex-col items-center md:col-span-4`}>
          <span className="relative mb-1.5">{getIcon(tops[index])}</span>
          <Link
            to={`/game/${item.slug}`}
            style={{ animationDelay: `${delay}` }}
            className={`${focus ? `focus` : ""} ${
              top ? `rounded-3xl` : `rounded-2xl`
            } group relative transform overflow-hidden border-4 bg-black/10 duration-300 ease-in-out md:hover:scale-110`}
          >
            <Image
              src={item.appid}
              alt={item.title}
              width={120}
              height={120}
              lazy={lazy}
            />

            <h2 className="absolute -bottom-0 z-10 hidden h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 p-2 text-center group-hover:flex">
              <span className="scale-95 text-xs">{item.title}</span>
            </h2>
          </Link>
        </li>
      )
    } else {
      return (
        <li
          className={`${
            addBig ? `col-span-2 row-span-2 md:col-auto md:row-auto` : ``
          } flex flex-col items-center`}
        >
          <Link
            to={`/game/${item.slug}`}
            style={{ animationDelay: `${delay}` }}
            className={`${focus ? `focus` : ""} ${
              top ? `rounded-full` : `rounded-2xl`
            } ${
              addBig ? `h-full w-full md:h-auto md:w-auto` : ``
            } group relative transform overflow-hidden shadow-lg duration-300 ease-in-out lg:hover:scale-110`}
          >
            <Image
              src={item.appid}
              alt={item.title}
              width={`100%`}
              height={`100%`}
              lazy={lazy}
            />

            <h2 className="absolute -bottom-0 z-10 hidden h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 p-2 text-center lg:group-hover:flex">
              <span className="scale-95 text-xs">{item.title}</span>
            </h2>
          </Link>
        </li>
      )
    }
  }
  if (type === "card") {
    return (
      <li>
        <Link
          to={`/game/${item.slug}`}
          style={{ animationDelay: `${delay}` }}
          className={`${
            focus ? `focus` : ``
          } group relative block h-[100px] transform overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 pl-28 shadow-lg duration-300 ease-in-out lg:hover:scale-110 lg:hover:from-yellow-400`}
        >
          <Image
            className="absolute left-0"
            src={item.appid}
            alt={item.title}
            width={100}
            height={100}
          />
          <h2 className="py-2 font-bold">{item.title}</h2>
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
    return null
  }
}
