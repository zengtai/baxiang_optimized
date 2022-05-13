import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"

import { FEATURED_GAMES } from "../lib/constants"
import { ADS_SLOT_ID } from "../lib/constants"
import getIcon from "../components/icons"

const Home = ({ pageContext: data }) => {
  // console.log(data)
  // console.log(data.categories)
  const categories = data.categories
  const allGames = data.games
  const topGames = allGames.filter(game => FEATURED_GAMES.includes(game.title))
  const normalGames = allGames.filter(
    game => !FEATURED_GAMES.includes(game.title)
  )

  // console.log(topGames)
  return (
    <Layout navItems={categories}>
      <Seo title="Home" />

      <h2
        id="pos_1"
        className="mt-5 flex items-center space-x-2 px-4 font-bold md:text-xl"
      >
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
        <span className="text-cyan-500">{getIcon(`new`)}</span>
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
        <span className="text-cyan-500">{getIcon(`game`)}</span>
        <span>All Games</span>
      </h2>
      <List items={allGames} type="grid" cols="4" addBig />
      <Banner
        className={`banner rectangle`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.home}
        responsive="false"
      />
      <h2 className="flex items-center space-x-2 px-4 font-bold md:text-xl">
        <span className="text-cyan-500">{getIcon(`category`)}</span>
        <span>Categories</span>
      </h2>
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
    </Layout>
  )
}

export default Home
