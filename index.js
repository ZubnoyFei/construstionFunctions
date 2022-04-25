'use strict'

function User(name, id) {
    this.name = name; // Для каждого отдельного пользователя мы указываем отдельные параметры
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello, ${this.name}`);
    }
}


User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`)
}

const oleksii = new User('Oleksii', 30);
const max = new User('Max', 28);

oleksii.exit();

oleksii.hello();
max.hello();

// console.log(oleksii);
// console.log(max);