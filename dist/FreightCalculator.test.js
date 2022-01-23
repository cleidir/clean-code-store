"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FreightCalculator_1 = __importDefault(require("./FreightCalculator"));
const Item_1 = __importDefault(require("./Item"));
test("Deve calcular o frete do amplificador", function () {
    const item = new Item_1.default("1", "Guitarra", 1000, 100, 50, 15, 3);
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate(distance, item);
    expect(price).toBe(30);
});
test("Deve calcular o frete do amplificador", function () {
    const item = new Item_1.default("2", "Amplificador", 5000, 50, 50, 50, 22);
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate(distance, item);
    expect(price).toBe(220);
});
test("Deve calcular o frete do cabo", function () {
    const item = new Item_1.default("3", "Cabo", 30, 9, 9, 9, 0.1);
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate(distance, item);
    expect(price).toBe(10);
});
