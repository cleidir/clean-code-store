const Cpf = require("./Cpf");

function creatOrder(nuCpf) {
    if (!Cpf.validate(nuCpf)) return false;
    
    // 1 - Não deve fazer um pedido com cpf inválido - OK
    // 2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
    // 3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)

    return true; 
}
module.exports = {
    creatOrder
};

class Order {
    id : number;
    quantity : number;
    totalValue : number;

    constructor( quantity : number) {
        this.id += 1;
        this.quantity = quantity;
    }
}