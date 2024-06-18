import React, { FC } from "react"
import ProsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/ProsCourse/ProsCourseItem/ProsCourseItem"
import styles from "./prosCourse.module.css"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const ProsCourse: FC<IProps> = ({ course }) => {
    if (!course.content) {
        return <div>Not found</div>
    }

    return (
        <div className={styles.main}>
            {course.content.map((item) =>
                item.pros.map((pros, index) => <ProsCourseItem numberPros={`0${index + 1}`} text={pros.description} />),
            )}
        </div>
    )
}

export default ProsCourse
