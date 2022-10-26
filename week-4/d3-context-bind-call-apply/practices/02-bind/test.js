const Employee = require('./employee')

const john = new Employee('John Wick', 'Dog Lover')

// setTimeout(john.sayName, 2000) // undefined says hello

const sayName = john.sayName.bind(john);
// setTimeout(bound, 2000)

setTimeout(sayName, 2000)


setTimeout(john.sayOccupation.bind(john), 3000)
