import * as React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"
import { FEATURED_GAMES, ADS_SLOT_ID } from "../lib/constants"

const Home = ({ pageContext: data }) => {
  // console.log(data.categories)
  const categories = data.categories
  const allGames = data.dataHome
  const topGames = allGames.filter(game => FEATURED_GAMES.includes(game.title))
  const normalGames = allGames.filter(
    game => !FEATURED_GAMES.includes(game.title)
  )

  console.log(topGames)
  return (
    <Layout navItems={categories}>
      <Seo title="Home" />
      <Banner
        className={`banner`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.home}
        responsive="false"
      />

      <div className="container mx-auto">
        <h2 className="px-4 text-lg font-bold">
          All Games ({allGames.length})
        </h2>
        <List items={topGames} type="grid" />
        <List items={normalGames.slice(0, 6)} type="card" />
        <List items={normalGames.slice(9, 68)} type="grid" />
        <List items={normalGames.slice(68)} type="card" />
      </div>
      <Banner
        className={`banner mb-6`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.home}
        format=""
        responsive="false"
      />
    </Layout>
  )
}

export default Home
