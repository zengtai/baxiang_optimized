import React from "react"

export default function Image({ className, src, alt, width, height, lazy }) {
  const path = `/`
  // const path = `/webs/baxiang/baxiang_main_new_4/`
  return (
    <>
      <picture className={className ? className : ``}>
        <source
          type="image/avif"
          srcSet={`${path}avif/${src}.2x.avif 1x, ${path}avif/${src}.2x.avif 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${path}webp/${src}.2x.webp 1x, ${path}webp/${src}.2x.webp 2x`}
        />
        <img
          width={width}
          height={height}
          className={`bg-black/5`}
          src={`${path}mozjpeg/${src}.2x.jpg`}
          alt={alt}
          loading={lazy ? `lazy` : `eager`}
          decoding="async"
        />
      </picture>
    </>
  )
}
