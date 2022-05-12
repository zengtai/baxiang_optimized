import * as React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"

import { FEATURED_GAMES, HOT_GAMES } from "../lib/constants"
import { ADS_SLOT_ID } from "../lib/constants"

const Home = ({ pageContext: data }) => {
  // console.log(data)
  // console.log(data.categories)

  console.log({ __dirname })

  const categories = data.categories
  const allGames = data.games
  const topGames = allGames.filter(game => FEATURED_GAMES.includes(game.title))
  const hotGames = allGames
    .filter(game => HOT_GAMES.includes(game.title))
    .reverse()
  const normalGames = allGames.filter(
    game =>
      !FEATURED_GAMES.includes(game.title) && !HOT_GAMES.includes(game.title)
  )

  // console.log(topGames)
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
        <h2 className="sr-only px-4 text-center text-lg font-bold">
          All Games ({allGames.length})
        </h2>
        <List items={topGames} type="grid" top />
        <List items={hotGames.slice(0, 6)} type="card" focus />
        <List items={hotGames.slice(6)} type="grid" lazy={true} focus />
        <List items={normalGames.slice(0, 6)} type="card" lazy={true} />
        <List items={normalGames.slice(6, 42)} type="grid" lazy={true} />

        <Banner
          className={`banner`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        />

        <List items={normalGames.slice(42, 54)} type="grid" lazy={true} />
        <List items={normalGames.slice(54)} type="card" lazy={true} />
      </div>
    </Layout>
  )
}

export default Home
