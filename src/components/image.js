import React from "react"

export default function Image({ className, src, alt, width, height, lazy }) {
  return (
    <>
      <picture className={className}>
        <source type="image/avif" srcSet={`/avif/${src}.avif`} />
        <source type="image/webp" srcSet={`/webp/${src}.webp`} />
        <img
          width={width}
          height={height}
          src={`/games/${src}.png`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
