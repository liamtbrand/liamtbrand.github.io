var money = 20;
var cookie_sell_price = 2;

function item(cost, sell_price, display_name){
    this._cost = cost;
    this._sell_price = sell_price;
    this._display_name = display_name;
    this._total_sold = 0;
}

var cookie = new item(1,2,"Cookie");
var painting = new item(20,50,"Painting");

function clickCookie(){
    sellItem(cookie);
    updateItemDisplay();
    updateMoneyDisplay();
}

function clickBobRoss(){
    sellItem(painting);
    updateItemDisplay();
    updateMoneyDisplay();
}

function sellItem(item){
    money = money - item._cost;
    money = money + item._sell_price;
    item._total_sold += 1;
}

function updateMoneyDisplay(){
    $("#money").html("Money: $"+money);
}

function updateItemDisplay(){
    var html = "";
    html += "Cookies Sold: " + cookie._total_sold + "<br>";
    html += "Paintings Sold: " + painting._total_sold + "<br>";
    $("#items_sold").html(html);
}

function updateAll(){
    updateMoneyDisplay();
    updateItemDisplay();
}

updateAll();
