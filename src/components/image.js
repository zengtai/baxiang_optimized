import React from "react"
import { EXPORT_PATH } from "../lib/constants"

export default function Image({ className, src, alt, width, height, lazy }) {
  const path = EXPORT_PATH.length ? EXPORT_PATH : ``
  // const path = ``
  return (
    <>
      <picture className={className}>
        <source
          type="image/avif"
          srcSet={`${path}/avif/${src}.avif 1x, ${path}/avif/2x/${src}.avif 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${path}/webp/${src}.webp 1x, ${path}/webp/2x/${src}.webp 2x`}
        />
        <img
          width={width}
          height={height}
          src={`${path}/mozjpeg/${src}.jpg`}
          srcSet={`${path}/webp/${src}.jpg 1x, ${path}/webp/2x/${src}.jpg 2x`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
