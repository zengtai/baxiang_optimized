import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => {
  let games = useStaticQuery(graphql`
    query {
      allStrapiGame {
        edges {
          node {
            title
            icon_url
            game_url
            slug
            id
          }
        }
      }
    }
  `)
  games = games.allStrapiGame.edges
  console.log(games)
  return (
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        height={64}
        quality={85}
        formats={["auto", "webp", "avif"]}
        alt="SuperEasyGame"
      />
      <main>
        <h2>All Games</h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-8">
          {games.map(e => {
            let game = e.node
            return (
              <li key={game.gid}>
                <Link to={`/game/${game.slug}`}>
                  <img src={game.icon_url} alt={game.title} />
                  {game.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </Layout>
  )
}

export default Home
