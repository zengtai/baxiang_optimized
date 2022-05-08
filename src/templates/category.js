import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Adsense from "../components/Adsense"

export default function CategoryTemplate({
  pageContext: { category, games, categories },
}) {
  console.log(category)
  console.log(categories)
  console.log(games)
  const allGames = games.filter(game => game.category.name === category.name)
  console.log(allGames)

  return (
    <Layout navItems={categories}>
      <Seo title={category.name} />
      <div className="container mx-auto">
        <div className="mb-3 h-[100px] w-full bg-black/10">
          <Adsense
            slot={`1977361307`}
            client={`ca-pub-9209477879340784`}
            format="auto"
          />
        </div>
        <h2 className="px-4 text-lg font-bold">
          All {category.name} {allGames.length > 1 ? `Games` : `Game`} (
          {allGames.length})
        </h2>
        <List items={allGames} type="grid" />
      </div>
    </Layout>
  )
}
