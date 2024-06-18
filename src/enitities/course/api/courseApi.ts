import axios from "axios"
import { API_URL } from "../../../../globalConts"
import { HttpResult } from "@/utils/result"
import { CourseEntity } from "@/enitities/course/courseEntity"

import { error } from "ts-result-meow"

export class CourseApi {
    static async getCourses(): Promise<HttpResult<CourseEntity[]>> {
        try {
            let result = await axios.get<CourseEntity[]>(API_URL + "/course")

            return HttpResult.withOk(result.data)
        } catch (err: any) {
            return error(err)
        }
    }

    static async getCourse(id: number): Promise<HttpResult<CourseEntity>> {
        try {
            let result = await axios.get<CourseEntity>(API_URL + "/course" + id)

            return HttpResult.withOk(result.data)
        } catch (err: any) {
            return error(err)
        }
    }

    static async createCourses(name: string, description: string, linkImage: string): Promise<HttpResult<void>> {
        try {
            let result = await axios.post<void>(API_URL + "/course", { name, description, linkImage })

            return HttpResult.withOk(result.data)
        } catch (err: any) {
            return error(err)
        }
    }

    static async updateCourses(
        id: number,
        name: string,
        description: string,
        linkImage: string,
    ): Promise<HttpResult<void>> {
        try {
            let result = await axios.patch(API_URL + "/course/" + id, { name, description, linkImage })

            return HttpResult.withOk(result.data)
        } catch (err: any) {
            return error(err)
        }
    }

    static async deleteCourses(id: number): Promise<HttpResult<void>> {
        try {
            let result = await axios.delete(API_URL + "/course/" + id)

            return HttpResult.withOk(result.data)
        } catch (err: any) {
            return error(err)
        }
    }
}
