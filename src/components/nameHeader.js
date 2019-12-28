import React from "react"
import styles from "./nameHeader.module.css"

export default props => (
  <div className={styles.wrapper}>
    <h1 className={styles.heading}>{props.heading}</h1>
    <h2 className={styles.subHeading}>{props.subHeading}</h2>
  </div>
)