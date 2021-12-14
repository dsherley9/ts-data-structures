export default class InvalidOperationError extends Error {
    constructor(message: string) {
        super(message);
        return this;
    }
}