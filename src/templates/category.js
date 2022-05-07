import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function Category({ pageContext: { category } }) {
  console.log(category)
  return (
    <Layout>
      <Seo title={category.name} />
      <h2>All {category.name} Games</h2>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-8">
        {category.games.map(game => {
          return (
            <li key={game.gid}>
              <Link to={`/game/${game.slug}`} title={game.title}>
                <img src={game.icon_url} alt={game.title} />
                {game.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
