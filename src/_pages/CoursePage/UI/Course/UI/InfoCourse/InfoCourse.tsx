import React from "react"
import styles from "./infoCourse.module.css"
import ProsCourseItem from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/ProsCourse/ProsCourseItem/ProsCourseItem"
import ProsCourse from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/ProsCourse/ProsCourse"
import PointsCourse from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/PointsCourse/PointsCourse"
import BlocksCourse from "@/_pages/CoursePage/UI/Course/UI/InfoCourse/UI/BlocksCourse/BlocksCourse"

const InfoCourse = () => {
    return (
        <div className={styles.main}>
            <p className={styles.title}>Теория</p>
            <p className={styles.description}>
                Теория в онлайн формате (доступ откроется в телеграмм канале за неделю до начала практики) - это
                небольшие видео уроки, к которым вы всегда сможете вернуться и освежить в памяти.
            </p>
            <p className={styles.description}>
                Теория в онлайне - это отличная возможность экономии целого дня (не надо отпрашиваться с работы, думать
                с кем оставить детей). Вы сможете изучить ее в удобном для вас месте и в удобное время.
            </p>
            <ProsCourse />
            <p className={styles.title}>Программа базового курса по оформлению бровей</p>
            <p className={styles.description}>В тарифах, советую обратить внимание на ПРЕМИУМ.</p>
            <p className={styles.description}>
                Именно в этом тарифе есть все необходимое для успешного начала ведения деятельностиа именно:
            </p>
            <PointsCourse />
            <p className={styles.description}>Но еще этот тариф включает такие блоки как:</p>
            <BlocksCourse />
        </div>
    )
}

export default InfoCourse
