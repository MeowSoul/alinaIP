import React from "react"
import styles from "./course.module.css"
import ChooseCourse from "@/_pages/CoursePage/UI/Course/UI/ChooseCourse/ChooseCourse"
import InfoCourse from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/InfoCourse"

const Course = () => {
    return (
        <div className={styles.main}>
            <div className={styles.emptyBlock}>
                <ChooseCourse />
            </div>
            <div className={styles.infoCourseBlock}>
                <InfoCourse />
            </div>
        </div>
    )
}

export default Course
