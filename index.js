class User {
  constructor(name) {
    this.name = name;
  }
  say() {
    return "user";
  }
}

class Manager {
  constructor(role) {
    this.role = role;
  }
  say() {
    return "manager";
  }
}

Manager.prototype.walk = function() {
  return "He can walk!";
};

// ----------------------------------------------

{
  const user = new User("Ivan");
  const manager = new Manager("Admin");
  user.__proto__ = manager; // полноценный
}

// ----------------------------------------------

{
  const user = new User("Ivan");
  const manager = new Manager("Admin");
  Object.setPrototypeOf(user, manager); // полноценный
}

// -----------------------------------------------

{
  const user = new User("Ivan");
  const manager = new Manager("Admin");
  const userProps = Object.getOwnPropertyNames(user);
  const userProto = Object.getOwnPropertyNames(user.__proto__);
  const managerProto = Object.getOwnPropertyNames(manager.__proto__);

  // Копирование методов родителя User.prototype
  for (const i in userProto) {
    if (userProto[i] === "constructor") continue;
    else {
      if (!userProps.includes(userProto[i])) {
        user[userProto[i]] = user[userProto[i]];
      }
    }
  }

  // Копирование методов конструктора manager.__proto__
  for (const i in managerProto) {
    if (managerProto[i] === "constructor") continue;
    else {
      const userProps = Object.getOwnPropertyNames(user);
      if (!userProps.includes(managerProto[i])) {
        user[managerProto[i]] = manager[managerProto[i]];
      }
    }
  }

  console.log(user.walk());
  console.log(manager.walk());
}
