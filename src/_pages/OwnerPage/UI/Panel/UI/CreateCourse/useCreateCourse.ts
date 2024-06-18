import {FormEvent, useRef, useState} from "react";
import {CourseApi} from "@/enitities/course/api/courseApi";
import {FileApi} from "@/enitities/file/fileApi/FileApi";
import {AlertService} from "@/services/AlertService";
import {RedirectService} from "@/services/RedirectService";

export const useCreateCourse = () => {
    const [courseName, setCourseName] = useState("")
    const [courseDescription, setCourseDescription] = useState("")

    const [uploadedFile, setUploadedFile] = useState<string>("")

    const inputRef = useRef<HTMLInputElement | null>(null)

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()

        let createResult = await CourseApi.createCourses(courseName, courseDescription, uploadedFile)

        if (createResult.hasError()) {
            return AlertService.error(createResult.getError())
        }

        RedirectService.reload()
    }

    const UploadFileHandler = async (file: FileList | null) => {

        if (file) {
            const formData = new FormData()
            formData.append("file", file[0])

            const uploadFileResult = await FileApi.uploadFile(formData)

            if (uploadFileResult.hasError()) {
                return AlertService.error(uploadFileResult.getError())
            } else {
                setUploadedFile(uploadFileResult.unwrap().id)
            }
        }
    }

    return {
        setCourseName,
        setCourseDescription,
        inputRef,
        UploadFileHandler,
        uploadedFile,
        setUploadedFile,
        SubmitHandler
    }
}