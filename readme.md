
## HW8 — Проміси

1. Є наступний код:
``` javascript
console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})

promise1.then(res => {
console.log(res)
})

console.log('end');
```
Яким буде результат його виклику? Чому? Опишіть як працює цей код.

---

2. Є наступний код:

``` javascript
Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)
```
Яким буде результат його виклику? Чому? Опишіть як працює цей код.

---


3. Є наступний код:

``` javascript
const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });
```
Яким буде результат його виклику? Чому? Опишіть як працює цей код.