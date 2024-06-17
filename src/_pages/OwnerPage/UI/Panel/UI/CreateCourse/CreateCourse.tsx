"use client"

import React from "react"
import styles from "./CreateCourse.module.css"
import ButtonFun from "@/сomponents/ButtonFun/ButtonFun"
import {useCreateCourse} from "@/_pages/OwnerPage/UI/Panel/UI/CreateCourse/useCreateCourse";


const CreateCourse = () => {

    const {setCourseName, setCourseDescription, setUploadedFile, inputRef, SubmitHandler, uploadedFile, UploadFileHandler} = useCreateCourse()

    return (
        <form className={styles.create} onSubmit={SubmitHandler}>
            <input
                type="text"
                placeholder={"Название курса"}
                className={styles.fieldAddCourse}
                onChange={(event) => setCourseName(event.target.value)}
            />
            <input
                type="text"
                placeholder={"Описание"}
                className={styles.fieldAddCourse}
                onChange={(event) => setCourseDescription(event.target.value)}
            />
            <input
                onChange={(event) => UploadFileHandler(event.target.files)}
                className={styles.input_file}
                type="file"
                placeholder={"Ссылка на картинку"}
                ref={inputRef}
            />
            <p onClick={() => inputRef.current?.click()} className={styles.upload_file_button}>Загрузить файл</p>

            {uploadedFile.length !== 0 &&
                <div>
                    <p className={styles.cross} onClick={() => setUploadedFile("")}>X</p>
                    <img className={styles.uploaded_file} src={`http://files.projectmeow.ru/get/${uploadedFile}`} alt=""/>
                </div>
            }

            <ButtonFun>Добавить</ButtonFun>
        </form>
    )
}

export default CreateCourse
