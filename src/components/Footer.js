import React from "react"
import { Link } from "gatsby"
import { SITE_META } from "../lib/constants"

export default function Footer() {
  return (
    <footer className="mt-4 text-xs">
      <nav className="flex justify-center gap-4 bg-black/10 p-2 text-white/50 ">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
      </nav>
      <div className="py-6 text-center text-sm opacity-40">
        Copyright © {new Date().getFullYear()} &middot; {SITE_META.name}
      </div>
    </footer>
  )
}
