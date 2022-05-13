import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"
import { ADS_SLOT_ID } from "../lib/constants"

export default function CategoryTemplate({
  pageContext: { category, games, categories },
}) {
  const allGames = games.filter(game => game.category.name === category.name)

  return (
    <Layout navItems={categories} menuOpen>
      <Seo title={`${category.name} Games`} />

      <Banner
        className={`banner`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.category}
        responsive="false"
      />

      <div className="container mx-auto grow">
        <h2 className="px-4 text-center text-xl font-bold md:mt-4 md:text-3xl">
          {category.name} {allGames.length > 1 ? `Games` : `Game`}
        </h2>
        {allGames.length > 3 ? (
          <>
            <List items={allGames} type="grid" lazy={true} cols="4" />
          </>
        ) : (
          <List items={allGames} type="card" />
        )}
      </div>
      {/* {allGames.length > 6 ? (
        <Banner
          className={`banner mb-6`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.category}
          responsive="false"
        />
      ) : null} */}
    </Layout>
  )
}
