import React, { FC } from "react"
import styles from "./course.module.css"
import ChooseCourse from "@/_pages/CoursePage/UI/Course/UI/ChooseCourse/ChooseCourse"
import InfoCourse from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/InfoCourse"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const Course: FC<IProps> = ({ course }) => {
    return (
        <div className={styles.main}>
            <div className={styles.emptyBlock}>
                <ChooseCourse course={course} />
            </div>
            <div className={styles.infoCourseBlock}>
                <InfoCourse course={course} />
            </div>
        </div>
    )
}

export default Course
