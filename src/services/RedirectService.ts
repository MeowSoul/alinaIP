export class RedirectService {
    public static reload(): never {
        window.location.reload()
        throw new Error("RedirectService reload failed.")
    }

    public static redirectToPrevPage(): never {
        window.history.back()
        throw new Error("RedirectService back failed.")
    }
}
