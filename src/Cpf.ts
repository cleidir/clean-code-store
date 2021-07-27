const CALC_FACTOR_FIRST_DIGIT = 10;
const CALC_FACTOR_SECOND_DIGIT = 11;
const DEFAULT_LENGTH_CPF = 11;
const MAX_DIGIT_9 = 9;
const MAX_DIGIT_10 = 10;

function validate(cpf) {
    if (!cpf) return false;
    cpf = removeAllNotDigits(cpf);
    if (isInvalidLength(cpf)) return false;
    if (isAllElementEquals(cpf)) return false;

    const firstCheckerDigit = calculate(cpf, CALC_FACTOR_FIRST_DIGIT, MAX_DIGIT_9);
    const secondCheckerDigit = calculate(cpf, CALC_FACTOR_SECOND_DIGIT, MAX_DIGIT_10);

    let checkerDigit = getCheckerDigit(cpf);
    let calculatedDigit = `${firstCheckerDigit}${secondCheckerDigit}`;
    return checkerDigit == calculatedDigit;
}

function removeAllNotDigits(cpf) {
    return cpf.replace(/\D/g, "");
}

function isInvalidLength(cpf) {
    return cpf.length !== DEFAULT_LENGTH_CPF;
}

function isAllElementEquals(cpf) {
    const [firstElement] = cpf;
    return cpf.split("").every(element => element === firstElement);
}

function getCheckerDigit(cpf) {
    return cpf.slice(9);
}

function calculate(cpf, factor, max) {
    let total = 0;
    for (const digit of cpf.split("").slice(0, max)) {
        total += parseInt(digit) * factor--;
    }
    const rest = total%DEFAULT_LENGTH_CPF;
    return (rest < 2) ? 0 : (DEFAULT_LENGTH_CPF - rest);
}

module.exports = {
    validate
};