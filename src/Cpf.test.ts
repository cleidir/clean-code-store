const cpf = require("./Cpf");

test("Should be false to all equal numbers", function () {
    expect(cpf.validate("00000000000")).toBeFalsy();
});

test("Should be false to invalid cpf numbers", function () {
    expect(cpf.validate("86446422799")).toBeFalsy();
});

test("Should be true to valid to unformated cpf numbers", function () {
    expect(cpf.validate("86446422784")).toBeTruthy();
});

test("Should be true to valid to formated cpf numbers", function () {
    expect(cpf.validate("864.464.227-84")).toBeTruthy();
});

test("Should be true to valid to unformated cpf numbers", function () {
    expect(cpf.validate("91720489726")).toBeTruthy();
});

test("Should be false to invalid characters", function () {
    expect(cpf.validate("a1720489726")).toBeFalsy();
});