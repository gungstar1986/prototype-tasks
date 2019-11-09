const usersDataBase = new Map();

function addUser(userName, userAge) {
  try {
    const user = {
      name: userName,
      age: userAge
    };
    if (usersDataBase.has(user.name)) throw new Error("Такой юзер существует!");
    if (user.age < 6) throw new Error("Пользователь слишком молод!");
    usersDataBase.set(user.name, user.age);
  } catch (error) {
    console.log(error);
  }
}

addUser("Денис", 33);
addUser("Яна", 34);
addUser("Денис", 18);
addUser("Женя", 6);
addUser("Андрей", 4);

console.log(usersDataBase);
