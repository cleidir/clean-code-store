"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
test("Should be false to all equal numbers", function () {
    expect(() => new Cpf_1.default("00000000000")).toThrow(new Error("Invalid CPF"));
});
test("Should be false to invalid cpf numbers", function () {
    expect(() => new Cpf_1.default("86446422799")).toThrow(new Error("Invalid CPF"));
});
test("Should be true to valid to unformated cpf numbers", function () {
    expect(new Cpf_1.default("86446422784")).toBeTruthy();
});
test("Should be true to valid to formated cpf numbers", function () {
    expect(new Cpf_1.default("864.464.227-84")).toBeTruthy();
});
test("Should be true to valid to unformated cpf numbers", function () {
    expect(new Cpf_1.default("91720489726")).toBeTruthy();
});
test("Should be false to invalid characters", function () {
    expect(() => new Cpf_1.default("a1720489726")).toThrow(new Error("Invalid CPF"));
});
