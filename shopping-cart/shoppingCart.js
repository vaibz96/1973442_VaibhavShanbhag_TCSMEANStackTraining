var cartItems = [];
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(product, price) {
        this.product = product;
        this.price = price;
    }
    ShoppingCart.prototype.addProduct = function () {
        var cart = { product: this.product, price: this.price }; //object literal style
        var storage = sessionStorage.getItem("shoppingCartItems");
        if (storage != null) {
            cartItems = JSON.parse(storage);
        }
        cartItems.push(cart);
        sessionStorage.setItem("shoppingCartItems", JSON.stringify(cartItems));
        console.log(cartItems);
        var cartItemsLength = cartItems.length;
        document.getElementById("size").innerHTML = cartItemsLength.toString();
        insertNewRecord(cart);
    };
    return ShoppingCart;
}());
function add_pencil() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function add_bodywash() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function add_cloth() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function add_wood() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function add_food() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function add_book() {
    var data = new ShoppingCart(document.getElementById("pencil").innerHTML, document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}
function insertNewRecord(data) {
    var table = document.getElementById("budget");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); // row created 
    var cell1 = newRow.insertCell(0); // cell created 
    cell1.innerHTML = data.product; // value placed 
    var cell2 = newRow.insertCell(1); // cell created 
    cell2.innerHTML = data.price; // value placed
}
