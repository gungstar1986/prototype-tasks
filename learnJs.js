// ------------------------------- class method

// class Example {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   move() {
//     return `${this.name} can walk`;
//   }
// }
// const manager = new Example("David", 25);

// class ExampleProto {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   cantMove() {
//     `${this.name} can\`t walk`;
//   }
// }
// const user = new ExampleProto("John", 24);
// user.__proto__ = Example.prototype;

// console.log(user.move());

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


// user.isBoss = null
console.log(user.isBoss());
console.log(user.boss);