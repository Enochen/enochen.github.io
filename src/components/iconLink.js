import React from "react"
import styles from "./iconLink.module.css"

export default props => (
  <div className={styles.user}>
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <img src={props.icon} className={styles.icon} alt="" />
      <div className={styles.text}>{props.text}</div>
    </a>
  </div>
)
