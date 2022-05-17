import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"

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
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-emerald-700 to-emerald-900 text-sm text-white/80">
      <Navbar
        siteTitle={data.site.siteMetadata.title || `Title`}
        items={navItems}
        menuOpen={menuOpen}
      />

      <main className="flex grow flex-col">{children}</main>
      <footer className="mt-4 flex justify-center bg-emerald-700/80 py-7">
        <div className="container scale-90 text-center">
          Copyright © {new Date().getFullYear()} &middot;{" "}
          {data.site.siteMetadata.title}
        </div>
      </footer>
    </div>
  )
}
