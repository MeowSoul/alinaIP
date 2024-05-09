import React, { FC } from "react"
import styles from "./blocksCourseItem.module.css"

interface BlocksCourseItemProps {
    title: string
    description: string
    url: string
}

const BlocksCourseItem: FC<BlocksCourseItemProps> = ({ description, title, url }) => {
    return (
        <div className={styles.main}>
            <img className={styles.img} src={url} alt="" />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default BlocksCourseItem
