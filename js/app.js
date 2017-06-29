console.log("hello world");

var newMenu = [{pizzaName: "The Main Event",description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", price: 39.99},{pizzaName: "My Subways",description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",price: 21.99},{pizzaName: "Panda Express",description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",price: 16.88},
{pizzaName: "Tex Mex",description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",price: 21.21}];


var nameBox = document.getElementsByClassName("pizzaName");
var descriptionBox = document.getElementsByClassName("description");
var priceBox = document.getElementsByClassName("price");

for(var i=0; i<newMenu.length; i++){
nameBox[i].innerHTML = newMenu[i].pizzaName;
descriptionBox[i].innerHTML = newMenu[i].description;
priceBox[i].innerHTML = newMenu[i].price;
}









