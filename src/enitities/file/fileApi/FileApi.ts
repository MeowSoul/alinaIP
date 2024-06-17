import {HttpResult} from "@/utils/result";
import axios from "axios";
import {IUploadFileResponse} from "@/enitities/file/models/responses/IUploadFileResponse";

export class FileApi {

    static async uploadFile(file: FormData): Promise<HttpResult<IUploadFileResponse>> {
        try {
            const result = await axios.post<IUploadFileResponse>("http://files.projectmeow.ru/upload", file)

            return HttpResult.withOk(result.data)
        }
        catch (err: any) {
            return HttpResult.withError(err)
        }
    }
}