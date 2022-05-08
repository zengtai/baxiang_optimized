import * as React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"

const Home = ({ pageContext: data }) => {
  console.log(data.categories)
  const categories = data.categories
  return (
    <Layout navItems={categories}>
      <Seo title="Home" />

      <div className="container mx-auto">
        <div className="h-[100px] w-[360px] bg-black/10"></div>
        <h2 className="px-4 text-lg font-bold">All Games</h2>
        <List items={data.dataHome} type="grid" />
      </div>
    </Layout>
  )
}

export default Home
