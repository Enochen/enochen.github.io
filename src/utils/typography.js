import Typography from "typography"
import moraga from "typography-theme-moraga"
moraga.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2": {
    marginBottom: rhythm(1 / 3),
  },
  a: {
    color: "hsla(0,0%,0%,0.7)",
  },
  "a:hover": {
    color: "#8c89cc",
    textDecoration: "none",
  },
})
const typography = new Typography(moraga)
export const { scale, rhythm, options } = typography
export default typography
