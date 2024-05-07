import React from "react"
import ChooseCourseItem from "@/_pages/CoursePage/UI/Course/UI/ChooseCourse/ChooseCourseItem/ChooseCourseItem"
import styles from "./chooseCourse.module.css"

const ChooseCourse = () => {
    return (
        <div className={styles.main}>
            <ChooseCourseItem name={"Базовый курс"} url={"./img/based.png"} />
            <ChooseCourseItem name={"Повышение квалификации"} url={"./img/based.png"} />
            <ChooseCourseItem name={"Работа над ошибками"} url={"./img/based.png"} />
        </div>
    )
}

export default ChooseCourse
