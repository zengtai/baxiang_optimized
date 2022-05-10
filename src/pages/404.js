import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container mx-auto p-3">
      <div className="p-6">
        <h1 className="mb-2 text-xl font-bold">404 : Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
