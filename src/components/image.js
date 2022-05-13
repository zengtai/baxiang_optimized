import React from "react"
import { EXPORT_PATH } from "../lib/constants"

export default function Image({ className, src, alt, width, height, lazy }) {
  // const path = EXPORT_PATH || ``
  const path = ``
  return (
    <>
      <picture className={className}>
        <source type="image/avif" src={`${path}/avif/${src}.2x.avif 2x`} />
        <source type="image/webp" src={`${path}/webp/${src}.2x.webp 2x`} />
        <img
          width={width}
          height={height}
          src={`${path}/mozjpeg/${src}.2x.jpg`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
