import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./Footer"

export default function Layout({ navItems, children, menuOpen }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // console.log(navItems)

  return (
    <div className="relative flex min-h-screen flex-col text-sm text-white/80">
      <Navbar
        siteTitle={data.site.siteMetadata.title || `Title`}
        items={navItems}
        menuOpen={menuOpen}
      />

      <main className="flex grow flex-col">{children}</main>

      <Footer />
    </div>
  )
}
