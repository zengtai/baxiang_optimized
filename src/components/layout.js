import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"

export default function Layout({ navItems, children }) {
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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-800 to-blue-900 text-sm text-white/80">
      <Navbar
        siteTitle={data.site.siteMetadata.title || `Title`}
        items={navItems}
      />

      <main className="grow">{children}</main>
      <footer className="flex justify-center bg-sky-600/50 py-7">
        <div className="container scale-90 text-center">
          © {new Date().getFullYear()} &middot; {data.site.siteMetadata.title}
        </div>
      </footer>
    </div>
  )
}
