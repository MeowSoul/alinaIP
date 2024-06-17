import {useRef, useState} from "react";
import {CourseApi} from "@/enitities/course/api/courseApi";
import {FileApi} from "@/enitities/file/fileApi/FileApi";

export const useCreateCourse = () => {
    const [nameCourse, setNameCourse] = useState("")
    const [descriptionCourse, setDescriptionCourse] = useState("")

    const [uploadedFile, setUploadedFile] = useState<string>("")

    const inputRef = useRef<HTMLInputElement | null>(null)

    const SubmitHandler = async (name: string, description: string, link: string) => {
        let createResult = await CourseApi.createCourses(name, description, link)

        if (createResult.hasError()) {
            console.log(createResult.getError())
        }

        window.location.reload()
    }

    const UploadFileHandler = async (file: FileList | null) => {

        if (file && file[0]) {

            const formData = new FormData()
            formData.append("file", file[0])

            const uploadFileResult = await FileApi.uploadFile(formData)

            if (uploadFileResult.hasError()) {
                console.log(uploadFileResult.getError())
            } else {
                setUploadedFile(uploadFileResult.unwrap().id)
            }
        }
    }

    return {
        setNameCourse,
        setDescriptionCourse,
        inputRef,
        UploadFileHandler,
        uploadedFile
    }
}