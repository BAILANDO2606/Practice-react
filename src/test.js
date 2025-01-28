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

// // const prices = [100, 200, 300, 400, 500, 400]

// // console.log(prices.indexOf(400)) // 3
// // console.log(prices.indexOf(600)) // -1
// // console.log(prices.indexOf(400, 4)) // 5
// // console.log(prices.lastindexOf(400)) // 3

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
// 	users.findIndex((element, index, array) => {
// 		if (element.name === 'Vasya') {
// 			return true
// 		}
// 	})
// ) // 2

//
