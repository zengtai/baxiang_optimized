import React, { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import List from "./list"

export default function ScrollList({
  items,
  init = 9,
  step = 6,
  type,
  addBig,
  cols,
}) {
  const allGames = items

  // const initGames = data.slice(0, init)
  const [games, setGames] = useState(allGames.slice(0, init)) // 设置初始/当前游戏
  const [hasMore, setHasMore] = useState(allGames.length > init) // 是否有更多
  const getMoreGames = () => {
    const moreGames = allGames.slice(games.length, games.length + step)
    setGames(games => [...games, ...moreGames])
    // console.log(games)
    if (games.length >= allGames.length) {
      setHasMore(!hasMore)
    }
  }

  return (
    <InfiniteScroll
      style={{ overflow: "auto" }}
      dataLength={games.length}
      next={getMoreGames}
      hasMore={hasMore}
      loader={
        <div
          role="button"
          onClick={getMoreGames}
          className="text-md m-3 mx-auto w-auto animate-pulse p-4 text-center"
        >
          <span className="cursor-pointer rounded-lg bg-black/10 p-4">
            Click to load more
          </span>
        </div>
      }
    >
      <List items={games} type={type} cols={cols} addBig={addBig} />
    </InfiniteScroll>
  )
}
