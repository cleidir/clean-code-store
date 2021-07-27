const order = require("./Order");
test("Should be false - do not create a new order to invalid cpf", function () {
    expect(order.creatOrder("00000000000")).toBeFalsy();
});
test("Should be true - create a new order to valid cpf", function () {
    expect(order.creatOrder("864.464.227-84")).toBeTruthy();
});
