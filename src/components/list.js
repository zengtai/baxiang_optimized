import * as React from "react"
import ListItem from "./listItem"

export default function List({ items, type, lazy, focus }) {
  // console.log(items)
  console.log(focus)

  if (type === "grid") {
    return (
      <>
        <ul className="my-4 mx-3 grid grid-cols-3 gap-4 md:grid-cols-6 lg:my-6 xl:grid-cols-12">
          {items.map((item, index) => {
            let game = item.node || item
            return (
              <ListItem
                item={game}
                key={index}
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
  }
  if (type === "card") {
    return (
      <>
        <ul className="my-4 mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:my-6 xl:grid-cols-6">
          {items.map((item, index) => {
            let game = item.node || item
            return (
              <ListItem
                item={game}
                key={index}
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
  } else return <>OK</>
}
