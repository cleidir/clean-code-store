export default class Cpf {
    value: string;
    constructor(value: string) {
        if(!this.validate(value)) throw new Error("Invalid CPF");
        this.value = value;
    }

    CALC_FACTOR_FIRST_DIGIT = 10;
    CALC_FACTOR_SECOND_DIGIT = 11;
    DEFAULT_LENGTH_CPF = 11;
    MAX_DIGIT_9 = 9;
    MAX_DIGIT_10 = 10;

    validate(cpf) {
        if (!cpf) return false;
        cpf = this.removeAllNotDigits(cpf);
        if (this.isInvalidLength(cpf)) return false;
        if (this.isAllElementEquals(cpf)) return false;
        const firstCheckerDigit = this.calculate(cpf, this.CALC_FACTOR_FIRST_DIGIT, this.MAX_DIGIT_9);
        const secondCheckerDigit = this.calculate(cpf, this.CALC_FACTOR_SECOND_DIGIT, this.MAX_DIGIT_10);
        let checkerDigit = this.getCheckerDigit(cpf);
        let calculatedDigit = `${firstCheckerDigit}${secondCheckerDigit}`;
        return checkerDigit == calculatedDigit;
    }
    removeAllNotDigits(cpf) {
        return cpf.replace(/\D/g, "");
    }
    isInvalidLength(cpf) {
        return cpf.length !== this.DEFAULT_LENGTH_CPF;
    }
    isAllElementEquals(cpf) {
        const [firstElement] = cpf;
        return cpf.split("").every(element => element === firstElement);
    }
    getCheckerDigit(cpf) {
        return cpf.slice(9);
    }
    calculate(cpf, factor, max) {
        let total = 0;
        for (const digit of cpf.split("").slice(0, max)) {
            total += parseInt(digit) * factor--;
        }
        const rest = total%this.DEFAULT_LENGTH_CPF;
        return (rest < 2) ? 0 : (this.DEFAULT_LENGTH_CPF - rest);
    }
}