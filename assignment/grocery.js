var Grocery = /** @class */ (function () {
    function Grocery(name, description, quantity, price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.subTotal = quantity * price;
    }
    return Grocery;
}());
var item_milk = new Grocery("Milk", "Freshest Milk from local farms.", 3, 3.50);
var item_eggs = new Grocery("Eggs", "Organic eggs.", 5, 2.50);
var item_bread = new Grocery("Bread", "Classic white bread.", 8, 1.99);
var item_cheese = new Grocery("Cheese", "Cheddar cheese slices.", 6, 5.49);
var groceries = [];
groceries.push(item_milk);
groceries.push(item_eggs);
groceries.push(item_bread);
groceries.push(item_cheese);
var table = document.getElementById('grocery');
groceries.map(function (grocery) {
    var name = grocery.name, description = grocery.description, quantity = grocery.quantity, price = grocery.price, subTotal = grocery.subTotal;
    var row = table.insertRow();
    row.innerHTML = "\n            <td id=\"name\">" + name + "</td>\n            <td id=\"desc\">" + description + "</td>\n            <td id=\"qty\">" + quantity + "</td>\n            <td id=\"price\">" + price + "</td>\n            <td id=\"subtotal\">" + subTotal + "</td>";
});
