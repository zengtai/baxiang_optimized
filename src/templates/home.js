import * as React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Banner from "../components/banner"

const Home = ({ pageContext: data }) => {
  console.log(data.categories)
  const categories = data.categories
  return (
    <Layout navItems={categories}>
      <Seo title="Home" />
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
        <h2 className="px-4 text-lg font-bold">All Games</h2>
        <List items={data.dataHome} type="grid" />
      </div>
    </Layout>
  )
}

export default Home
