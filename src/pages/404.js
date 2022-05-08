import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Adsense from "../components/Adsense"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container mx-auto p-3">
      <div className="p-6">
        <h1 className="mb-2 text-xl font-bold">404 : Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
    <div className="h-[300px] w-full">
      <Adsense
        slot={`1977361307`}
        client={`ca-pub-9209477879340784`}
        format="auto"
      />
    </div>
  </Layout>
)

export default NotFoundPage
