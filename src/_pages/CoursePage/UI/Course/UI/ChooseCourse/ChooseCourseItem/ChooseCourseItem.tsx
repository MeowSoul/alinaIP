import React from "react"
import styles from "./chooseCourseItem.module.css"

interface ChooseCourseItemProps {
    name: string
    url: string
}

const ChooseCourseItem: React.FC<ChooseCourseItemProps> = ({ name, url }) => {
    return (
        <div className={styles.main}>
            <img className={styles.iconCourse} src={url} alt="" />
            <p className={styles.nameCourse}>{name}</p>
        </div>
    )
}

export default ChooseCourseItem
