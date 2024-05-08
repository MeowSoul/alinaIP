import React, { FC } from "react"
import styles from "./blocksCourse.module.css"
import BlocksCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/BlocksCourse/BlocksCourseItem/BlocksCourseItem"

const BlocksCourse = () => {
    return (
        <div className={styles.main}>
            <BlocksCourseItem
                url="/img/content.png"
                title={"ПЕРВИЧНЫЙ КОНТЕНТ"}
                description={
                    "Позволит будущему ученику выйти с обучения с готовыми фотографиями для своего блока (фото работ, фото мастера, фото с предметами). "
                }
            />
            <BlocksCourseItem
                url="/img/promotion.png"
                title={"БЛОК ПРОДВИЖЕНИЕ "}
                description={
                    "Необходим для того что бы узнать как правильно оформить свою страницу и какие есть бесплатные методы привлечения клиентов."
                }
            />
            <BlocksCourseItem
                url="/img/treatment.png"
                title={"БЛОК ОБРАБОТКИ"}
                description={
                    "Позволит научится правильно выставлять свет, делать красивые  фото/видео. Обрабатывать их в бесплатных приложениях."
                }
            />
        </div>
    )
}

export default BlocksCourse
