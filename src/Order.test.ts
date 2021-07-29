import Coupon from "./Coupon";
import Order from "./Order";

test("Do not create a new order with invalid cpf", function () {
    const cpf = "111.111.111.-11";
    expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});

test("Should be create a new order using a valid cpf and 3 itens", function () {
    const cpf = "864.464.227-84";
    const order = new Order(cpf);
    order.addItem("Guitarra", 1000, 2);
    order.addItem("Amplficador", 5000, 1);
    order.addItem("Cabo", 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test("Should be create a new order using a discount coupon", function () {
    const cpf = "864.464.227-84";
    const order = new Order(cpf);
    order.addItem("Guitarra", 1000, 2);
    order.addItem("Amplficador", 5000, 1);
    order.addItem("Cabo", 30, 3);
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(5672);
});