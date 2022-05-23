import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className="mt-4 flex flex-col justify-center bg-emerald-700/80">
      <nav className="block bg-emerald-800 p-2">
        <Link to="/privacy-policy">Privacy Policy</Link>
      </nav>
      <div className="container text-center text-sm opacity-40">
        Copyright © {new Date().getFullYear()} &middot;{" "}
        {data.site.siteMetadata.title}
      </div>
    </footer>
  )
}
