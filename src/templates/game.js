import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function Game({ pageContext: { game } }) {
  return (
    <Layout>
      <Seo title={game.title} />
      <div>
        <img src={game.icon_url} alt={game.title} />
      </div>
      <h1>{game.title}</h1>
      <div>
        <Link to={`/category/${game.category.slug}`}>{game.category.name}</Link>
      </div>
      <div>{game.description}</div>
      <button>
        <a href={game.game_url}>Play now</a>
      </button>
    </Layout>
  )
}
