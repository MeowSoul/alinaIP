"use client"

import React from "react"
import styles from "./CreateCourse.module.css"
import ButtonFun from "@/сomponents/ButtonFun/ButtonFun"
import {useCreateCourse} from "@/_pages/OwnerPage/UI/Panel/UI/CreateCourse/useCreateCourse";


const CreateCourse = () => {

    const {setDescriptionCourse, setNameCourse, inputRef, uploadedFile, UploadFileHandler} = useCreateCourse()

    return (
        <form className={styles.create}>
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
                onChange={(event) => UploadFileHandler(event.target.files)}
                className={styles.input_file}
                type="file"
                placeholder={"Ссылка на картинку"}
                ref={inputRef}
            />
            <p onClick={() => inputRef.current?.click()} className={styles.upload_file_button}>Загрузить файл</p>

            {uploadedFile.length !== 0 && <img src={`http://files.projectmeow.ru/get/${uploadedFile}`} alt=""/>}

            <ButtonFun>Добавить</ButtonFun>
        </form>
    )
}

export default CreateCourse
