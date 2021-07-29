import Cpf from "./Cpf";

test("Should be false to all equal numbers", function () {
    expect(() => new Cpf("00000000000")).toThrow(new Error("Invalid CPF"));
});

test("Should be false to invalid cpf numbers", function () {
    expect(() => new Cpf("86446422799")).toThrow(new Error("Invalid CPF"));
});

test("Should be true to valid to unformated cpf numbers", function () {
    expect(new Cpf("86446422784")).toBeTruthy();
});

test("Should be true to valid to formated cpf numbers", function () {
    expect(new Cpf("864.464.227-84")).toBeTruthy();
});

test("Should be true to valid to unformated cpf numbers", function () {
    expect(new Cpf("91720489726")).toBeTruthy();
});

test("Should be false to invalid characters", function () {
    expect(() => new Cpf("a1720489726")).toThrow(new Error("Invalid CPF"));
});