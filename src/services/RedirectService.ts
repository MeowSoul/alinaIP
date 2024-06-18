export class RedirectService {
    public static reload(): never {
        window.location.reload();
        throw new Error("RedirectService reload failed.");
    }

}