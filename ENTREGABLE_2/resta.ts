export class Resta {
    private _num1: number;
    private _num2: number;

    constructor(num1: number, num2: number) {
        this._num1 = num1;
        this._num2 = num2;
    }
    public resultado(): number {
        return this._num1 - this._num2;
    }
}