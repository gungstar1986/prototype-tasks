// ------------------------------- class method

class Example {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  move() {
    return `${this.name} can walk`;
  }
}
const manager = new Example("David", 25);

class ExampleProto {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  cantMove() {
    `${this.name} can\`t walk`;
  }
}
const user = new ExampleProto("John", 24);
user.__proto__ = Example.prototype;

console.log(user.move()); // Юзер научился ходить

// ------------------------------- class X Exteds class XX 

class Example {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  move() {
    return `${this.name} can walk`;
  }
}
const manager = new Example("David", 25);

class ExampleProto extends Example {
  cantMove() {
    `${this.name} can\`t walk`;
  }
}
const user = new ExampleProto("John", 24);

console.log(user.move()); // Юзер научился ходить

// ---------------------------------- тоже самое через super()

class Example {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  move() {
    return `${this.name} can walk`;
  }
}
const manager = new Example("David", 25);

class ExampleProto extends Example {
  constructor(name, age) { // наследываение одного объекта конструктора от другого
    super(name);
    this.age = age;
  }
  cantMove() {
    return `${this.name} can\`t walk`;
  }
}
const user = new ExampleProto("John", 24);

console.log(user.move()); // Юзер научился ходить
console.log(user.cantMove()); // Юзер разучился ходить

// ------------------------------- object method

const manager = {
  name: "admin",
  isBoss: function(){return `${this.name} is Boss`},
  boss: true
};

const user = {
  name: "Dan",
  __proto__: manager
};

console.log(user.isBoss()); // Юзер стал Боссом ))
console.log(user.boss);

// -------------------------------- Object.setPrototypeOf method

function Manager(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function() {
    return `${this.name} can walk`;
  };
}
const manager = new Manager("Tima", "unknow ;-)");

const user = {
  name: "Dan",
  age: 33
};

Object.setPrototypeOf(user, manager);
console.log(user.walk());
