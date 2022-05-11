import React from "react"
import { lazy, Suspense } from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"

import { FEATURED_GAMES } from "../lib/constants"
import { ADS_SLOT_ID } from "../lib/constants"

const Banner = lazy(() => import("../components/banner"))
const renderLoader = () => (
  <div className="AdContainer banner bg-black/10 text-center opacity-20">
    Loading...
  </div>
)

const Home = ({ pageContext: data }) => {
  console.log(data)
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
      <Suspense fallback={renderLoader()}>
        <Banner
          className={`banner`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        />
      </Suspense>
      <div className="container mx-auto">
        <h2 className="px-4 text-center text-lg font-bold">
          All Games ({allGames.length})
        </h2>
        <List items={topGames} type="grid" focus />
        <List items={normalGames.slice(0, 6)} type="card" />
        <List items={normalGames.slice(6, 42)} type="grid" lazy={true} />
        <Suspense fallback={renderLoader()}>
          <Banner
            className={`banner`}
            style={{ display: "block" }}
            slot={ADS_SLOT_ID.home}
            responsive="false"
          />
        </Suspense>
        <List items={normalGames.slice(42, 48)} type="card" lazy={true} />
        <List items={normalGames.slice(48, 72)} type="grid" lazy={true} />
        <List items={normalGames.slice(72)} type="card" lazy={true} />
      </div>
    </Layout>
  )
}

export default Home
