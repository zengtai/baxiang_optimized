import React from "react"
import { Link } from "gatsby"
import getIcon from "./icons"

export default function CategoryList({ categories }) {
  return (
    <>
      <ul className={`flex flex-wrap gap-2 p-4 font-medium drop-shadow`}>
        {categories.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={`/category/${item.slug}`}
                title={`${item.name} Games`}
                className={`animated block transform rounded-full border-2 border-white/10 bg-white/10 p-2 text-sm duration-300 ease-in-out lg:border-transparent lg:bg-transparent lg:hover:scale-125 lg:hover:bg-white/20`}
              >
                <div className="flex scale-95 items-center space-x-1">
                  <span>{getIcon(item.slug)}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
