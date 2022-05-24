const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("second", "&:nth-child(11n+3)")
      addVariant("third", "&:nth-child(11n+9)")
    }),
  ],
}
