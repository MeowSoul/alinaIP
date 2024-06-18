import React, { FC } from "react"
import styles from "./eyeBrowPage.module.css"
import Course from "@/_pages/CoursePage/UI/Course/Course"
import Credit from "@/_pages/CoursePage/UI/Credit/Credit"
import MakeAnAppointment from "@/_pages/MainPage/UI/makeAnAppountment/MakeAnAppointment"
import Contacts from "@/_pages/MainPage/UI/contacts/Contacts"
import { CourseApi } from "@/enitities/course/api/courseApi"

interface IParams {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const result = await CourseApi.getCourses()

    if (result.hasError()) {
        return
    }

    return result.unwrap().map((item) => ({
        id: item.id,
    }))
}

const EyeBrowPage: FC<IParams> = async ({ params: { id } }) => {
    const getCourseResult = await CourseApi.getCourse(parseInt(id))

    if (getCourseResult.hasError()) {
        return <p>{getCourseResult.getError().toString()}</p>
    }

    const result = getCourseResult.unwrap()

    return (
        <div className={styles.main}>
            <Course course={result} />
            <Credit />
            <div className={styles.infoBlock}>
                <MakeAnAppointment />
                <div className={styles.contactsBlock}>
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default EyeBrowPage
