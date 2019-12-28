import React from "react"
import styles from "./section.module.css"

export default ({ children }) => (
  <div className={styles.section}>
    <div className={styles.wrapper}>{children}</div>
  </div>
)
