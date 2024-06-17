"use client"

import React, { useState } from "react"
import styles from "./CreateCourse.module.css"
import ButtonFun from "@/сomponents/ButtonFun/ButtonFun"
import { CourseApi } from "@/enitities/course/api/courseApi"

const createHeader = async (name: string, description: string, link: string) => {
    let createResult = await CourseApi.createCourses(name, description, link)

    if (createResult.hasError()) {
        console.log(createResult.getError())
    }

    window.location.reload()
}

const CreateCourse = () => {
    const [nameCourse, setNameCourse] = useState("")
    const [descriptionCourse, setDescriptionCourse] = useState("")
    const [imageFile, setImageFile] = useState("")

    return (
        <div className={styles.create}>
            <input
                type="text"
                placeholder={"Название курса"}
                className={styles.fieldAddCourse}
                onChange={(event) => setNameCourse(event.target.value)}
            />
            <input
                type="text"
                placeholder={"Описание"}
                className={styles.fieldAddCourse}
                onChange={(event) => setDescriptionCourse(event.target.value)}
            />
            <input
                type="file"
                placeholder={"Ссылка на картинку"}
                className={styles.fieldAddCourse}
                onChange={(event) => setImageFile(event.target.value)}
            />
            <ButtonFun onClick={() => createHeader(nameCourse, descriptionCourse, imageFile)}>Добавить</ButtonFun>
        </div>
    )
}

export default CreateCourse
