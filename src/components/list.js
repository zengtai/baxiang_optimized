import * as React from "react"

import ListItem from "./listItem"

export default function List({ items, type, lazy, focus, top }) {
  let luckyNum = items.length >= 3 ? parseInt(Math.random() * 3) : 0

  let shimNum = parseInt(Math.random() * 3)

  if (type === "grid") {
    if (top) {
      return (
        <>
          {/* <ul className="mx-3 mb-5 grid grid-cols-3 gap-3 md:grid-cols-6 lg:my-6 xl:grid-cols-12"> */}
          <ul className="mx-3 mb-5 grid grid-cols-3 gap-3 md:flex md:justify-center md:space-x-4">
            {items.map((item, index) => {
              let game = item.node || item
              console.log(index)
              return (
                <ListItem
                  index={index}
                  key={game.slug}
                  item={game}
                  type={type}
                  lazy={lazy}
                  focus={focus && index === luckyNum ? true : false}
                  shime={index === shimNum ? true : false}
                  top={top}
                />
              )
            })}
          </ul>
        </>
      )
    } else {
      return (
        <>
          <ul className="my-4 mx-3 grid grid-cols-3 gap-4 md:grid-cols-6 lg:my-6 xl:grid-cols-12">
            {items.map((item, index) => {
              let game = item.node || item
              return (
                <ListItem
                  index={index}
                  key={game.slug}
                  item={game}
                  type={type}
                  lazy={lazy}
                  focus={focus && index === luckyNum ? true : false}
                  top={top}
                />
              )
            })}
          </ul>
        </>
      )
    }
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
                focus={focus && index === luckyNum ? true : false}
              />
            )
          })}
        </ul>
      </>
    )
  } else return <>Loading...</>
}
