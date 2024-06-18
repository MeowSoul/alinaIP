import React, { FC } from "react"
import styles from "./blocksCourse.module.css"
import BlocksCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/BlocksCourse/BlocksCourseItem/BlocksCourseItem"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const BlocksCourse: FC<IProps> = ({ course }) => {
    if (!course.content) {
        return <div>Not found</div>
    }

    return (
        <div className={styles.main}>
            {course.content.map((item) =>
                item.blocks.map((block) => (
                    <BlocksCourseItem
                        url={`http://files.projectmeow.ru/get/${block.image}`}
                        title={block.name}
                        description={block.description}
                    />
                )),
            )}
        </div>
    )
}

export default BlocksCourse
