function ToyFactory() {
  this.toy = ToyCar;
  this.createToy = function(toyObj) {
    if (toyObj.toyType === "car") {
      this.toy = ToyCar;
    } else if (toyObj.toyType === "duck") {
      this.toy = ToyDuck;
    }
    return new this.toy(toyObj);
  }
}
function ToyCar(toyObj) {
  this.name = toyObj.name;
  this.color = toyObj.color;
  this.price = toyObj.price;
}

function ToyDuck(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
}

const toyFactory = new ToyFactory();
const car = toyFactory.createToy({
  toyType : "car",
  color: "blue",
  price : 12,
  name : "honda"
});
const duck = toyFactory.createToy({
  toyType: "duck",
  color: "red",
  price: 5
});
