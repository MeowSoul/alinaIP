import React, { FC } from "react"
import ChooseCourseItem from "@/_pages/CoursePage/UI/Course/UI/ChooseCourse/ChooseCourseItem/ChooseCourseItem"
import styles from "./chooseCourse.module.css"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const ChooseCourse: FC<IProps> = ({ course }) => {
    return (
        <div className={styles.main}>
            {course.content.map((item) => (
                <ChooseCourseItem
                    key={item.name}
                    name={item.name}
                    url={`http://files.projectmeow.ru/get/${item.icon}`}
                />
            ))}
        </div>
    )
}

export default ChooseCourse
