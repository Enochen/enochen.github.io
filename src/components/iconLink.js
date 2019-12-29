import React from "react"
import styles from "./iconLink.module.css"

export default props => {
  const Icon = props.icon
  const ext = props.external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {}
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href={props.link} {...ext}>
        <Icon size={42} />
        <div className={styles.text}>{props.text}</div>
      </a>
    </div>
  )
}
