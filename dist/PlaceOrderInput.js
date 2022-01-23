"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaceOrderInput {
    constructor({ cpf, zipcode, items, coupon }) {
        this.cpf = cpf;
        this.zipcode = zipcode;
        this.items = items;
        this.coupon = coupon;
    }
}
exports.default = PlaceOrderInput;
