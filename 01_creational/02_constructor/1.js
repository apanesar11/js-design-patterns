function Human(name, age, occupation){
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.describe = function(){
    console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}`);
  }
}

const person = new Human("Elle", "23", "Engineer");
person.describe();

const newPerson = new Human("Joe", "13","Painter");
newPerson.describe();
