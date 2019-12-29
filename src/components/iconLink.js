import React from "react"
import styles from "./iconLink.module.css"

export default props => {
  const Icon = props.icon
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} target="_blank" rel="noopener noreferrer" href={props.link}>
        <Icon size={42} />
        <div className={styles.text}>{props.text}</div>
      </a>
    </div>
  )
}
