### 安装 TailwindCSS

```shell
npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss

npx tailwindcss init -p
```

### 修改 `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    // ...
  ],
}
```

### 修改 `tailwind.config.js`

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 创建 `./src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 根目录创建 `gatsby-browser.js`

```javascript
import "./src/styles/global.css"
```

### 安装格式化插件

```shell
npm install -D prettier prettier-plugin-tailwindcss
```

### 安装插件

```shell
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
```

写入配置文件`gatsby-config.js`

```javascript
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp"],
}
```

Strapi

```shell
npm install --save gatsby-source-strapi gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-remark gatsby-transformer-sharp
```

配置环境变量 `.env.development`

```shell
STRAPI_TOKEN=<strapi-api-token-you-created-earlier>
STRAPI_API_URL=http://localhost:1337
```

Helmet

```shell
npm install gatsby-plugin-react-helmet react-helmet
```

配置`gatsby-config.js`

```javascript
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
  ],
}
```

安装 GA

```shell
npm install gatsby-plugin-google-gtag
```

配置

```javascript
{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
```

安装 nprogress

```shell
npm install gatsby-plugin-nprogress
```

配置

```javascript
{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },

```
