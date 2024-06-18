import React, { FC } from "react"
import ProsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/ProsCourse/ProsCourseItem/ProsCourseItem"
import styles from "./prosCourse.module.css"
import { CourseEntity } from "@/enitities/course/courseEntity"

interface IProps {
    course: CourseEntity
}

const ProsCourse: FC<IProps> = ({ course }) => {
    return (
        <div className={styles.main}>
            {course.content.map((item) =>
                item.pros.map((pros, index) => <ProsCourseItem numberPros={index + 1} text={pros.description} />),
            )}

            <div className={styles.row}>
                <ProsCourseItem
                    numberPros={"01"}
                    text={"Отработка на практике 1-2 модели, в зависимости от выбранного тарифа."}
                />
                <ProsCourseItem numberPros={"02"} text={"Перед практикой разбираем оставшиеся вопросы по теории."} />
                <ProsCourseItem numberPros={"03"} text={"Тестирование по теории."} />
            </div>
            <div className={styles.row}>
                <ProsCourseItem
                    numberPros={"04"}
                    text={"Далее практика, которая включает в себя отработку на манекенах, тренажёрах, моделях."}
                />
                <ProsCourseItem
                    numberPros={"05"}
                    text={"По итогу проводим анализ проделанной работы, работу над ошибками."}
                />
                <ProsCourseItem numberPros={"06"} text={"Здоровье сбережение мастера"} />
            </div>
        </div>
    )
}

export default ProsCourse
