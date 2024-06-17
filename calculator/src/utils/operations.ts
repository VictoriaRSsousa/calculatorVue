// export enum operator{
//     add = '+',
//     sub = '-',
//     division = '/',
//     mult = '*'
// }

export default class Calculator {
    public add(a: number, b: number): number {
        return a + b;
    }

    public sub(a: number, b: number): number {
        return a - b;
    }

    public division(a: number, b: number): number {
        if (b === 0) {
            alert("Divisão por 0 não permitida!")
            return 0
        }
        return a / b;
    }

    public mult(a: number, b: number): number {
        return a * b;
    }
}