import React from "react"
import styles from "./Panel.module.css"
import OutputCourse from "@/_pages/OwnerPage/UI/Panel/UI/OutputCourse/OutputCourse"
import CreateCourse from "@/_pages/OwnerPage/UI/Panel/UI/CreateCourse/CreateCourse"

const Panel = () => {
    return (
        <div className={styles.wrapper}>
            <OutputCourse />
            <CreateCourse />
        </div>
    )
}

export default Panel
