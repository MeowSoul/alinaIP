import React from "react"
import styles from "./outputCourse.module.css"
import { CourseApi } from "@/enitities/course/api/courseApi"
import ButtonFun from "@/сomponents/ButtonFun/ButtonFun"
import {RedirectService} from "@/services/RedirectService";
import {AlertService} from "@/services/AlertService";

const deleteHeader = async (id: number) => {
    let deleteResult = await CourseApi.deleteCourses(id)

    if (deleteResult.hasError()) {
        return AlertService.error(deleteResult.getError())
    }

    RedirectService.reload()
}

const OutputCourse = async () => {
    let courses = await CourseApi.getCourses()

    if (courses.hasError()) {
        return (
            <p>{courses.getError()}</p>
        )
    }

    let result = courses.unwrap()

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainCaption}>
                <p>id</p>
                <p>Название курса</p>
                <p className={styles.descriptionCaption}>Описание</p>
                <p>Ссылка на картинку</p>
            </div>
            {result.map((course) => (
                <div className={styles.main} key={course.id}>
                    <p>{course.id}</p>
                    <p>{course.name}</p>
                    <p className={styles.description}>{course.description}</p>
                    <p>{course.linkImage}</p>
                    <ButtonFun onClick={() => deleteHeader(course.id)}>Удалить</ButtonFun>
                </div>
            ))}
        </div>
    )
}

export default OutputCourse
