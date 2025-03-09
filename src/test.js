// // // // // // // const matrix = [
// // // // // // // 	[1, 2, 3],
// // // // // // // 	[4, 5, 6],
// // // // // // // 	[7, 8, 9],
// // // // // // // ]

// // // // // // // console.log(matrix[0][0]) // 1

// // // // // // // const arr = ['a', 100, true, { name: 'John' }, [1, 2, 3]]

// // // // // // // console.log('arr before:', arr) // a  100  true

// // // // // // // arr[0] = 'b'
// // // // // // // arr[1] = 200
// // // // // // // arr[2] = false
// // // // // // // arr[3] = 'new value' // add new value
// // // // // // // arr[100] = 1000 // add new value

// // // // // // // console.log('arr after:', arr) // b  200  false

// // // // // // // console.log(arr.length) // 101

// // // // // // // console.log(arr(arr.length - 1)) // 1000
// // // // // // // console.log(arr.at(-1)) //1000

// // // // // // // console.log(arr[3].name) // John

// // // // // // // const letters = ['a', 'b', 'c']

// // // // // // // console.log('Letters before: ', letters) // a b c

// // // // // // // letters.push('d, e') // add to the end

// // // // // // // console.log('Letters after: ', letters) // a b c d, e

// // // // // // // letters.unshift('x', 'y') // add to the beginning

// // // // // // // console.log('Letters after: ', letters) // x y a b c d, e

// // // // // // // letters.pop() // remove from the end
// // // // // // // letters.shift() // remove from the beginning

// // // // // // // const arrToString = ['Hello', 100,  true]

// // // // // // // console.log( arr.toString(, )) // Hello, 100, true преобразует массив в строку с разделителем
// // // // // // // console.log(arr.join(, )) // Hello, 100, true склеивает все элементы массива в строку с разделителем

// // // // // // // const massege = 'One, two, three, four, five'

// // // // // // // console.log(massege.split(, ).join(, )) // One, two, three, four, five

// // // // // // // function createNewArray() {
// // // // // // // 	const arr1 = ['a', 'b', 'c']
// // // // // // // 	const arr2 = [...arr1] // копирует массив

// // // // // // // for(let i = 0; i < arr1.length; i++) {
// // // // // // // 	arr2.push(arr1[i])
// // // // // // // }
// // // // // // // }

// // // // // // //const arr3 = arr1.slice() // копирует массив

// // // // // // // const arr4 = ['a', 'b', 'c', 'd', 'e']
// // // // // // // const arr5 = ['f', 'g', 'h', 'i', 'j']

// // // // // // // const totalArr = [...arr4, ...arr5] // объединяет массивы
// // // // // // // const totalArr2 = arr4.concat(arr5) // объединяет массивы

// // // // // // // array cannot be compared with ===, ==, !==, !=

// // // // // // // const arr6 = ['a', 'b', 'c']
// // // // // // // const arr7 = ['a', 'b', 'c']

// // // // // // const areArraysEquals = (array1, array2) => {
// // // // // // 	if (array1.length !== array2.length) {
// // // // // // 		return false
// // // // // // 	}

// // // // // // 	for (let i = 0; i < array1.length; i++) {
// // // // // // 		const areValuesArrays = Array.isArray(array1[i]) && Array.isArray(array2[i])

// // // // // // 		if (areValuesArrays && !areArraysEquals(array1[i], array2[i])) {
// // // // // // 			return false
// // // // // // 		} else {
// // // // // // 			continue
// // // // // // 		}

// // // // // // 		if (array1[i] !== array2[i]) {
// // // // // // 			return false
// // // // // // 		}
// // // // // // 	}

// // // // // // 	return true
// // // // // // }

// // // // // const camel = ['Andriy', 18]

// // // // // const [names, age] = camel

// // // // // console.log(names) // Andriy
// // // // // console.log(age) // 18

// // // // function getStatus(isBusy) {
// // // // 	var msg = isBusy ? 'busy' : 'available'
// // // // 	const checkStatus = {
// // // // 		status: msg,
// // // // 	}
// // // // 	return checkStatus
// // // // }

// // // // const letters = ['a', 'b', 'c']

// // // // for (let i = 0; i < letters.length; i++) {
// // // // 	console.log(letters[i])
// // // // }

// // // const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// // // letters.forEach((letter, i, array) => {
// // // 	console.log(letter, i, array)
// // // })

// const prices = [100, 200, 300, 400, 500, 400]

// console.log(prices.indexOf(400)) // 3
// console.log(prices.indexOf(600)) // -1
// console.log(prices.indexOf(400, 4)) // 5
// console.log(prices.lastIndexOf(400)) // 5

// const users = [
// 	{
// 		names: 'John',
// 		age: 25,
// 	},
// 	{
// 		names: 'Anton',
// 		age: 30,
// 	},
// 	{
// 		names: 'Vasya',
// 		age: 40,
// 	},
// ]

// console.log(
//   users.findIndex((user) => user.name === 'Vasya')
// ) // 2

// console.log(
//   users.findLastIndex((user) => user.name === 'Vasya')
// )

// console.log(
// 	users.findIndex((element, index, array) => {
// 		if (element.name === 'Vasya') {
// 			return true
// 		}
// 	})
// ) // 2

// function buildFun(n) {
// 	let res = []
// 	for (let i = 0; i < n; i++) {
// 		res.push(function () {
// 			return i
// 		})
// 	}
// 	return res
// }

// const prices = [100, 200, 300, 400, 500, 400]
// console.log(prices.includes(400)) // true проверяет наличие элемента в массиве

// const users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 	},
// ]

// console.log(users.some(user => user.age > 30)) // true проверяет, есть ли хотя бы один элемент, который удовлетворяет условию

// const users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 	},
// ]

// console.log(users.every(user => user.age >= 18)) // true проверяет, удовлетворяют ли все элементы условию, в данном случае, возраст больше 18

// console.log(users.find(user => user.name === 'Anton')) // {name: 'Anton', age: 30} возвращает первый элемент, который удовлетворяет условию

// console.log(users.filter(user => user.name === 'Anton')) // {name: 'Anton', age: 30} возвращает первый элемент, который удовлетворяет условию

// const users = [
// 	{
// 		names: 'John',
// 		age: 25,
// 		city: 'New York',
// 	},
// 	{
// 		names: 'Anton',
// 		age: 45,
// 		city: 'Chicago',
// 	},
// 	{
// 		names: 'Vasya',
// 		age: 50,
// 		city: 'Los Angeles',
// 	},
// ]

// const filteredUsers = users.filter(({ city, age }) => {
// 	return city === 'New York' || age < 45
// }) // возвращает массив элементов, которые удовлетворяют условию

// function semicolonSeparationToCommaSeparation(input) {
// 	return input.split(';').join(',')
// }

// console.log(semicolonSeparationToCommaSeparation('a;b;c;d;e')) // a,b,c,d,e

// const users = [ 'John', 'Anton', 'Vasya' ]

// console.log(users.map(user => user.toUpperCase())) // ['JOHN', 'ANTON', 'VASYA'] преобразует каждый элемент массива

// function collatz(n, count) {
//   if (n < 1){
//     n = (n % 2 === 0) ? n / 2 : n * 3 + 1;
//     collatz(n, count + 1);
//     return count;
//   }
// }

// let users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 	},
// ]

// users = users.map(user => {
// 	return `${user.name}, ${user.age} years old`
// })

// console.log(users) // ['user John - 25 years old', 'user Anton - 30 years old', 'user Peter - 40 years old']

// const users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 		city: 'New York',
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 		city: 'Chicago',
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 		city: 'Los Angeles',
// 	},
// 	{
// 		name: 'Vasya',
// 		age: 50,
// 		city: 'New York',
// 	},
// ]

// let ageSum = 0

// for (let i = 0; i < users.length; i++) {
// 	ageSum += users[i].age
// }

// return ageSum.floor(ageSum)

// console.log(`Середній вік користувачів: ${ageSum / users.length}`) // Середній вік користувачів: 36.25

// const users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 		city: 'New York',
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 		city: 'Chicago',
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 		city: 'Los Angeles',
// 	},
// 	{
// 		name: 'Vasya',
// 		age: 50,
// 		city: 'New York',
// 	},
// ]

// let ageSum = users.reduce(
// 	(sum /*зберігає результат попереднього виклику функції*/, { age }) =>
// 		sum + age,
// 	0
// )

// console.log('Середній вік користувачів:', ageSum / users.length) // Середній вік користувачів: 36.25

// const users = [
// 	{
// 		name: 'John',
// 		age: 25,
// 		city: 'New York',
// 	},
// 	{
// 		name: 'Anton',
// 		age: 30,
// 		city: 'Chicago',
// 	},
// 	{
// 		name: 'Peter',
// 		age: 40,
// 		city: 'Los Angeles',
// 	},
// 	{
// 		name: 'Vasya',
// 		age: 50,
// 		city: 'New York',
// 	},
// ]

// const reversedUsers = users.reverse() // мутуючий метод, змінює початковий масив

// const reversedUsers = [...users].reverse() // не мутуючий метод, не змінює початковий масив

// console.log('Перевернутий масив:', reversedUsers) // Перевернутий масив: [{name: 'Vasya', age: 50, city: 'New York'}, {name: 'Peter', age: 40, city: 'Los Angeles'}, {name: 'Anton', age: 30, city: 'Chicago'}, {name: 'John', age: 25, city: 'New York'}]

// const users = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
// }

// const userKeys = Object.keys(users) // повертає масив ключів об'єкта

// console.log('userKeys: ', userKeys) // userKeys: ['name', 'age', 'city']

// const users = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
// }

// const userKeys = Object.values(users) // повертає масив ключів об'єкта

// console.log('userKeys: ', userKeys) // userKeys: ['name', 'age', 'city']

// const users = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
// }

// const userKeys = Object.entries(users) // повертає масив ключів об'єкта

// console.log('userKeys: ', userKeys) // userKeys: [['name', 'John'], ['age', 25], ['city', 'New York']]

// const users = {
//   name: 'John',
//   age: 25,
//   city: 'New York',
// }

// const userEntries = Object.entries(users) // повертає масив ключів об'єкта

// const userEntriesFormatted = userEntries.map(([key, value]) => {
//   return [key.toUpperCase(), `~~${value}~~`]
// })

// console.log('userEntriesFormatted: ', userEntriesFormatted) // userEntriesFormatted: [['NAME', '~~John~~'], ['AGE', '~~25~~'], ['CITY', '~~New York~~']]

// const data = new Map(
//   [
//     [1, 'one'],
//     ['2', 'two'],
//   ]
// ) // створюємо новий об'єкт Map

// const data = new Map()

// data.set('name', undefined) // додаємо новий ключ та значення
// data.delete('name') // видаляємо ключ та значення
// data.clear() // видаляє всі ключі та значення

// console.log(data.has('name')) // false

// data.set(1, 'one') // додаємо новий ключ та значення
// data.set('2', 'two') // додаємо новий ключ та значення

// console.log(data.get(1)) // one
// console.log(data.get('2')) // two

// let data = (function returnSomeData(time = Date.now()) {
// 	return {
// 		name: '__B00013',
// 		timeStamp: time || 'unknown',
// 		type: 'raw',
// 		tep: 0x041451,
// 		tup: 0x00,
// 		tap: 0x00040,
// 	}
// })()

// const user = {
// 	name: 'John',
// 	age: 25,
// 	city: 'New York',
// }

// const userEntries = Object.entries(user) // повертає масив ключів об'єкта

// userEntries.forEach(([key, value]) => {
// 	console.log(`${key}: ${value}`)
// }) // name: John, age: 25, city: New York

// const userFormatted = Object.fromEntries(userEntries) // повертає об'єкт з масиву ключів

// class Student {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// const firstStudent = new Student('John', 23) // створюємо новий екземпляр класу Student

// function spEng(sentence) {
// 	let word = "english"
// 	if (sentence.toLowerCase().includes(word)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// let v1 = 50,
//     v2 = 100,
//     v3 = 150,
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;

// function equal1(){
//   let a = v1,
//       b = v1;
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2(){
//   let a =  v4, //set number value to a
//       b =  v2; //set number value to b
//   return a - b;
// }

// function equal3(){
//   let a =  v1, //set number value to a
//       b =  v5; //set number value to b
//   return a * b;
// }

// function equal4(){
//   let a =  v4, //set number value to a
//       b =  v5; //set number value to b
//   return a / b;
// }

// function equal5(){
//   let a =  v6, //set number value to a
//       b =  v3; //set number value to b
//   return a % b;
// }

// function getDrinkByProfession(param) {
// 	param = param.toLowerCase()
// 	if (param === 'Jabroni') {
// 		return 'Patron Tequila'
// 	} else if (param === 'School Counselor') {
// 		return 'Anything with Alcohol'
// 	} else if (param === 'Programmer') {
// 		return 'Hipster Craft Beer'
// 	} else if (param === 'Bike Gang Member') {
// 		return 'Moonshine'
// 	} else if (param === 'Politician') {
// 		return 'Your tax dollars'
// 	} else if (param === 'Rapper') {
// 		return 'Cristal'
// 	} else {
// 		return 'Beer'
// 	}
// }

// function getLength(arr) {
// 	//return length of arr
// 	return arr.length
// }
// function getFirst(arr) {
// 	//return the first element of arr
// 	return arr[0]
// }
// function getLast(arr) {
// 	//return the last element of arr
// 	return arr[arr.length - 1]
// }
// function pushElement(arr) {
// 	var el = 1
// 	arr.push(el)

// 	return arr
// }
// function popElement(arr) {
// 	arr.pop()
// 	return arr
// }

// function grabDoll(dolls) {
// 	var bag = []
// 	for (let i = 0; dolls.length; i++) {
// 		if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
// 			bag.push(dolls[i])
// 		} else {
// 			continue
// 		}
// 		if (bag.length === 3) {
// 			break
// 		}
// 	}
// 	return bag
// }
