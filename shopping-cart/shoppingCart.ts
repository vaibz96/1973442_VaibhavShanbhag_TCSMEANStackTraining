var cartItems:Array<any>= [];

interface CartItem {
    product:string;
    price:string;
}

class ShoppingCart {
    product: string;
    price: string;
    constructor(product:string,price:string) {
            this.product = product;
            this.price = price;
    }
    addProduct() : void {
        let cart:CartItem={product:this.product, price:this.price}; //object literal style

        let storage = sessionStorage.getItem("shoppingCartItems");
        if (storage != null) {
            cartItems = JSON.parse(storage);
        }
        cartItems.push(cart)
        sessionStorage.setItem("shoppingCartItems", JSON.stringify(cartItems));
        console.log(cartItems);

        let cartItemsLength:number = cartItems.length;
        document.getElementById("size").innerHTML= cartItemsLength.toString();
        insertNewRecord(cart)
    }
}

function add_pencil(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function add_bodywash(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function add_cloth(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function add_wood(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function add_food(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function add_book(){
    let data = new ShoppingCart(document.getElementById("pencil").innerHTML,document.getElementById("pencilPrice").innerHTML);
    data.addProduct();
}

function insertNewRecord(data){
    var table = document.getElementById("budget")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow();  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.product;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.price;                 // value placed
   
}