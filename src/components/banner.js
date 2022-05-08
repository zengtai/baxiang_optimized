import React, { useEffect } from "react"

const Banner = ({
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
    <div className="mb-3 bg-black/10">
      <ins
        className="adsbygoogle"
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
