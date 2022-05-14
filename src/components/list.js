import * as React from "react"

import ListItem from "./listItem"

export default function List({ items, type, lazy, focus, top, cols, addBig }) {
  if (type === "grid") {
    let setCols = `grid-cols-3`
    if (cols && cols === `2`) {
      setCols = `grid-cols-2`
    }
    if (cols && cols === `3`) {
      setCols = `grid-cols-3`
    }
    if (cols && cols === `4`) {
      setCols = `grid-cols-4`
    }
    if (cols && cols === `5`) {
      setCols = `grid-cols-5`
    }
    return (
      <>
        <ul
          className={`my-3 mx-3 grid ${setCols} gap-4 md:grid-cols-6 lg:my-6 xl:grid-cols-12`}
        >
          {items.map((item, index) => {
            let game = item.node || item
            return (
              <ListItem
                index={index}
                key={game.slug}
                item={game}
                type={type}
                lazy={lazy}
                focus={focus}
                order={focus && index < 3 ? index : ``}
                top={top}
                addBig={addBig && (index - 2) % 11 === 0 ? true : false}
              />
            )
          })}
        </ul>
      </>
    )
  }
  if (type === "card") {
    return (
      <>
        <ul className="my-4 mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:my-6 xl:grid-cols-6">
          {items.map((item, index) => {
            let game = item.node || item
            return (
              <ListItem
                key={game.slug}
                item={game}
                type={type}
                lazy={lazy}
                focus={focus}
                order={focus && index < 3 ? index : ``}
              />
            )
          })}
        </ul>
      </>
    )
  } else return <>Loading...</>
}
