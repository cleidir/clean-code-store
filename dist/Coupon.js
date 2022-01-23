"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coupon {
    constructor(code, percentage, expireDate) {
        this.code = code;
        this.percentage = percentage;
        this.expireDate = expireDate;
    }
    isExpired() {
        const today = new Date();
        return (this.expireDate.getTime() < today.getTime());
    }
}
exports.default = Coupon;
