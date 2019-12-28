import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    margin: 0
  }
})
const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography