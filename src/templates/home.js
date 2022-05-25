import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"
import CategoryList from "../components/categoryList"
import ScrollList from "../components/scrollList"

import { FEATURED_GAMES } from "../lib/constants"
import { ADS_SLOT_ID } from "../lib/constants"
import getIcon from "../components/icons"

const Home = ({ pageContext: data }) => {
  // console.log(data)
  // console.log(data.categories)

  const categories = data.categories.slice()
  const allGames = data.games.slice()

  let topGames = allGames.filter(game => FEATURED_GAMES.includes(game.title))

  const normalGames = allGames.filter(
    game => !FEATURED_GAMES.includes(game.title)
  )
  // console.log(topGames)

  return (
    <Layout navItems={categories}>
      <Seo title="Home" />
      <div className="container mx-auto">
        <h2 className="mt-3 flex items-center space-x-2 px-4 font-bold md:text-xl">
          <span className="text-orange-500">{getIcon(`hot`)}</span>
          <span>Popular This Week</span>
        </h2>
        <List items={topGames} type="grid" />
        <Banner
          className={`banner`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        />
        <h2 className="flex items-center space-x-2 px-4 font-bold md:text-xl">
          <span className="text-green-500">{getIcon(`new`)}</span>
          <span>New Games</span>
        </h2>
        <List items={normalGames.slice(0, 20)} type="grid" cols="5" />
        <Banner
          className={`banner rectangle`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        />
        <h2 className="flex items-center space-x-2 px-4 font-bold md:text-xl">
          <span className="text-yellow-500">{getIcon(`game`)}</span>
          <span>
            All Games <b className="text-sm">({allGames.length})</b>
          </span>
        </h2>
        <div>
          <ScrollList
            items={allGames.reverse()}
            type="grid"
            cols="4"
            init="5"
            addBig
          />
        </div>
        {/* <Banner
          className={`banner rectangle`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        /> */}
        <h2 className="flex items-center space-x-2 px-4 font-bold md:text-xl">
          <span className="text-lime-500">{getIcon(`category`)}</span>
          <span>Categories</span>
        </h2>
        <CategoryList categories={categories} />
      </div>
    </Layout>
  )
}

export default Home
