const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categories = await graphql(`
    {
      allStrapiCategory {
        nodes {
          name
          slug
          games {
            gid
            slug
            title
            icon_url
          }
        }
      }
    }
  `)

  const games = await graphql(`
    {
      allStrapiGame {
        edges {
          node {
            slug
            title
            game_url
            icon_url
            description
            category {
              name
              slug
            }
          }
        }
      }
    }
  `)

  const homeTemplatePath = path.resolve(`./src/templates/home.js`)
  const gameTemplatePath = path.resolve(`./src/templates/game.js`)
  const categoryTemplatePath = path.resolve(`./src/templates/category.js`)

  createPage({
    path: `/`,
    component: homeTemplatePath,
    context: {
      games: games.data.allStrapiGame.edges,
    },
  })

  games.data.allStrapiGame.edges.map(game => {
    createPage({
      path: `/game/${game.node.slug}`,
      component: gameTemplatePath,
      context: {
        game: game.node,
      },
    })
  })

  categories.data.allStrapiCategory.nodes.map(category => {
    createPage({
      path: `/category/${category.slug}`,
      component: categoryTemplatePath,
      context: {
        category: category,
      },
    })
  })
}
