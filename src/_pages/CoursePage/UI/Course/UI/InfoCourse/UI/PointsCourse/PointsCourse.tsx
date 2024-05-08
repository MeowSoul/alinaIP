import React from "react"
import PointsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/PointsCourse/PointsCourseItem/PointsCourseItem"
import styles from "./pointsCourse.module.css"

const PointsCourse = () => {
    return (
        <div className={styles.main}>
            <PointsCourseItem number={"01"} text={"Максимальное количество практических отработок."} />
            <PointsCourseItem
                number={"02"}
                text={"Информация о том, где найти первых клиентов и психологию работы с ними."}
                styles={{
                    backgroundColor: "white",
                    color: "black",
                }}
            />
            <PointsCourseItem
                number={"03"}
                text={"Оформление самозанятости, что позволит тебе работать спокойно."}
                styles={{
                    backgroundColor: "white",
                    color: "black",
                }}
            />
        </div>
    )
}

export default PointsCourse
