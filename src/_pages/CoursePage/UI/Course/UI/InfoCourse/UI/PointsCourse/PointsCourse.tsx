import React, { FC } from "react"
import PointsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/PointsCourse/PointsCourseItem/PointsCourseItem"
import styles from "./pointsCourse.module.css"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const PointsCourse: FC<IProps> = ({ course }) => {
    if (!course.content) {
        return <div>Not found</div>
    }

    return (
        <div className={styles.main}>
            {course.content.map((item) =>
                item.points.map((point, index) => (
                    <PointsCourseItem key={index} number={`0${index + 1}`} text={point.description} />
                )),
            )}
        </div>
    )
}

export default PointsCourse
