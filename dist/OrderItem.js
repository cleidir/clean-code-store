"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(description, price, quantity) {
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    getTotal() {
        return this.price * this.quantity;
    }
}
exports.default = OrderItem;
