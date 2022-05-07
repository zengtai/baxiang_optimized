import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function home({ pageContext: games }) {
  return (
    <Layout>
      <Seo title={``} />
      <h2>All Games</h2>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-8">
        {games.map(game => {
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
