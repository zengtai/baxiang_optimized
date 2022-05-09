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
      <Banner
        className={`banner`}
        style={{ display: "block" }}
        slot="1977361307"
        responsive="false"
      />

      <div className="container mx-auto">
        <h2 className="px-4 text-lg font-bold">
          All Games ({data.dataHome.length})
        </h2>
        <List items={data.dataHome.slice(0, 3)} type="grid" />
        <List items={data.dataHome.slice(3, 9)} type="card" />
        <List items={data.dataHome.slice(9, 21)} type="grid" />
        <List items={data.dataHome.slice(21, 71)} type="grid" />
        <List items={data.dataHome.slice(71)} type="card" />
      </div>
      <Banner
        className={`banner mb-6`}
        style={{ display: "block" }}
        slot="1977361307"
        format=""
        responsive="false"
      />
    </Layout>
  )
}

export default Home
