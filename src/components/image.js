import React from "react"

export default function Image({ className, src, alt, width, height, lazy }) {
  return (
    <>
      <picture className={className}>
        <source
          type="image/avif"
          srcSet={`/avif/${src}.avif 1x, /avif/${src}.2x.avif 2x,`}
        />
        <source
          type="image/webp"
          srcSet={`/webp/${src}.webp 1x, /webp/${src}.2x.webp 2x,`}
        />
        <img
          width={width}
          height={height}
          src={`/mozjpeg/${src}.jpg`}
          srcSet={`/mozjpeg/${src}.jpg 1x, /mozjpeg/${src}.2x.jpg 2x`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
