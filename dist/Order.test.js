"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("./Coupon"));
const Order_1 = __importDefault(require("./Order"));
test("Não deve criar um pedido com CPF inválido", function () {
    const cpf = "111.111.111-11";
    expect(() => new Order_1.default(cpf)).toThrow(new Error("Invalid CPF"));
});
test("Deve criar um pedido com 3 itens", function () {
    const cpf = "778.278.412-36";
    const order = new Order_1.default(cpf);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});
test("Deve criar um pedido com cupom de desconto", function () {
    const cpf = "778.278.412-36";
    const order = new Order_1.default(cpf);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    order.addCoupon(new Coupon_1.default("VALE20", 20, new Date("2022-10-10")));
    const total = order.getTotal();
    expect(total).toBe(5672);
});
test("Deve criar um pedido com cupom de desconto expirado", function () {
    const cpf = "778.278.412-36";
    const order = new Order_1.default(cpf);
    order.addItem("1", 1000, 2);
    order.addItem("2", 5000, 1);
    order.addItem("3", 30, 3);
    order.addCoupon(new Coupon_1.default("VALE20", 20, new Date("2020-10-10")));
    const total = order.getTotal();
    expect(total).toBe(7090);
});
