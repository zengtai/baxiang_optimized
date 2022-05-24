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
    <footer className="mt-4">
      <nav className="flex justify-center gap-4 bg-black/10 p-2 text-white/50 ">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
      </nav>
      <div className="py-6 text-center text-sm opacity-40">
        Copyright © {new Date().getFullYear()} &middot;{" "}
        {data.site.siteMetadata.title}
      </div>
    </footer>
  )
}
