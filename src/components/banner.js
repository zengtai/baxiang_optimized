import React, { useEffect } from "react"

const Banner = ({
  className,
  style,
  layout,
  format,
  client = "ca-pub-9209477879340784",
  slot,
  responsive,
  layoutKey,
}) => {
  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div
      className={`${className} AdContainer relative z-0 mx-auto mb-3 flex justify-center overflow-hidden bg-black/10 after:absolute after:bottom-0 after:left-1/2 after:-z-10 after:-translate-x-1/2 after:text-xs after:text-white/20 after:content-['ADVERTISEMENT']`}
    >
      <ins
        className={`adsbygoogle AdContainer`}
        style={style}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
      />
    </div>
  )
}

export default Banner
