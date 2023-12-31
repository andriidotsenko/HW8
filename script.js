

// Всі завдання HW8 Краще виконувати окремо, оскільки вони 
// виконують асинхронний код, та можуть заплутати в консолі,
// а також використовують однакові назви змінних

console.log('start');

const promise1 = new Promise((resolve, reject) => {
	console.log(1)
	resolve(2)
})

promise1.then(res => {
	console.log(res)
})

console.log('end');

//==================

// Результат
// start
// script.js:4 1
// script.js:12 end
// script.js:9 2

//==================

// Пояснення:
// Виводить синхронний "start"
// Створюється проміс в який передається функція
// (resolve, reject) => {
// 	console.log(1)
// 	resolve(2)
// }
// Ця функція виконується негайно (синхронно),
// одже console.log(1) виводить 1
// Далі виконується "resolve(2)"  -
// встановлює проміс promise1 в стан resolve (виконаний) і
// передає значення 2 як результат виконання

// Далі викликається .then на promise1
// Цей .then містить колбек-функцію res => {
// console.log(res)
// },
// яка буде виконана після завершення проміса
// Тобто коли поточний стек виконання буде порожнім.
// Тим часом, виконається рядок console.log('end'), і виводиться "end"
// Коли виконання стека буде завершено, проміс promise1 буде перевірений
// на наявність .then(), і його колбек-функція буде викликана.
// В результаті виведеться "2",
// яке є значенням, яке було передано через resolve(2).

// ----------------------------------------------------------
// Promise.resolve(1)
// 	.then((x) => x + 1)
// 	.then((x) => { throw new Error('My Error') })
// 	.catch(() => 1)
// 	.then((x) => x + 1)
// 	.then((x) => console.log(x))
// 	.catch(console.error)

// Пояснення:
//Повертає новий проміс, який вирішується синхронно (resolve) значенням 1
Promise.resolve(1)
	// Приймає в (x) значення з вирішеного проміса  та викликає  стрілкову функцію,
	// яка повертає новий проміс,який вирішується значенням 2
	.then((x) => x + 1)
	// Приймає в (x) значення 2 з вирішеного проміса  та викликає  стрілкову функцію,
	// яка повертає новий проміс,який вирішується значенням throw new Error('My Error')
	// помилка з повідомленням "My Error".
	.then((x) => { throw new Error('My Error') })
	// Після генерації помилки, обробник .catch перехоплює 
	// цю помилку і повертає новий проміс, який вирішується значенням 1
	.catch(() => 1)
	// Приймає в (x) значення 1 з вирішеного проміса  та викликає  стрілкову функцію,
	// яка повертає новий проміс,який вирішується значенням 2
	.then((x) => x + 1)
	// Приймає в (x) значення 2 з вирішеного проміса  та викликає  стрілкову функцію,
	// яка повертає новий проміс, який виконує синхронно console.log(x)
	.then((x) => console.log(x))
	// Всі помилки (точніше одна: Error('My Error')) були оброблені раніше тому метод catch 
	// не буде викликано. Він призначений для перехоплення помилок, які не перехопили раніше.
	.catch(console.error)
// В результаті в консоль потрапить значення 2 з рядка 6 (.then((x) => console.log(x)))
// ==================

// Результат
// 2

//==================

// ----------------------------------------------------------

// const promise = new Promise(res => res(2));
// promise.then(v => {
// 	console.log(v);
// 	return v * 2;
// })
// 	.then(v => {
// 		console.log(v);
// 		return v * 2;
// 	})
// 	.finally(v => {
// 		console.log(v);
// 		return v * 2;
// 	})
// 	.then(v => {
// 		console.log(v);
// 	});


// Створює новий проміс, який вирішується (res) значенням 2
const promise = new Promise(res => res(2));
// Викликає метод .then, який приймає значення 2
promise.then(v => {
	// Виводить значення 2 в консоль
	console.log(v);
	// Повертає нове значення 2*2=4
	return v * 2;
})
	//Викликає метод .then, який приймає значення 4
	.then(v => {
		// Виводить значення 4 в консоль
		console.log(v);
		// Повертає нове значення 2*4=8
		return v * 2;
	})
	// метод .finally не приймає значення або аргументи, 
	// це специфікація стандарту JavaScript
	.finally(v => {
		// Оскільки значень він не приймав - 
		// то його значення  undefined, що він і виведе в консоль
		console.log(v);
		// не спрацює, .finally не повертає значення, 
		// це теж специфікація стандарту JavaScript
		// Він може лише виконати, зазвичай дії завершення 
		return v * 2;
	})
	// Викликає метод .then, який приймає значення 8 з попереднього .then, 
	// оскільки метод .finally не повертає значень.
	.then(v => {
		// виводить 8 в консоль
		console.log(v);
	});

//==================


// Результат
// 2
// 4
// undefined
// 8

//==================

