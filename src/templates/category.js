import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"

export default function CategoryTemplate({
  pageContext: { category, games, categories },
}) {
  const allGames = games.filter(game => game.category.name === category.name)

  return (
    <Layout navItems={categories}>
      <Seo title={category.name} />
      <div className="mb-3 h-[100px] w-[360px] bg-black/10">
        <Banner
          className="adsbygoogle"
          style={{ display: "block" }}
          slot="1977361307"
          format=""
          responsive="true"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="px-4 text-lg font-bold">
          All {category.name} {allGames.length > 1 ? `Games` : `Game`} (
          {allGames.length})
        </h2>
        <List items={allGames} type="grid" />
      </div>
    </Layout>
  )
}
