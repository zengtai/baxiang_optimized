import React from "react"
import { EXPORT_PATH } from "../lib/constants"

export default function Image({ className, src, alt, width, height, lazy }) {
  // const path = EXPORT_PATH.length ? EXPORT_PATH : ``
  // const path = ``
  return (
    <>
      <picture className={`${className}`}>
        <source
          type="image/avif"
          srcSet={`https://cdn.iwantalipstick.com/gameicon2/avif/${src}.avif`}
        />
        <source
          type="image/webp"
          srcSet={`https://cdn.iwantalipstick.com/gameicon2/webp/${src}.webp`}
        />
        <img
          className="bg-black/5"
          width={width}
          height={height}
          src={`https://cdn.iwantalipstick.com/gameicon2/jpg/${src}.jpg`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
