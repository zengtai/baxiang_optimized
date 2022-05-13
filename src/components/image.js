import React from "react"
import { EXPORT_PATH } from "../lib/constants"

export default function Image({ className, src, alt, width, height, lazy }) {
  const path = EXPORT_PATH.length ? EXPORT_PATH : ``
  // const path = ``s
  return (
    <>
      <picture className={className}>
        <source type="image/avif" src={`${path}/avif/${src}.avif`} />
        <source type="image/webp" src={`${path}/webp/${src}.webp`} />
        <img
          width={width}
          height={height}
          src={`${path}/mozjpeg/${src}.jpg`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
