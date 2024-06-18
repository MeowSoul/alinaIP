import { Result } from "ts-result-meow"

export class HttpResult<T> extends Result<T, string> {}
