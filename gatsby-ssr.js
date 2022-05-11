/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

// const headComponents = [
//   <script
//     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9209477879340784"
//     crossOrigin="anonymous"
//     async
//   />,
// ]

// exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
//   setHeadComponents(headComponents)
// }

const postBodyComponents = [
  <script
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9209477879340784"
    crossOrigin="anonymous"
    async
  />,
]

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(postBodyComponents)
}
