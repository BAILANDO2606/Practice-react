const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

console.log(matrix[0][0]) // 1

const arr = ['a', 100, true, { name: 'John' }, [1, 2, 3]]

console.log('arr before:', arr) // a  100  true

arr[0] = 'b'
arr[1] = 200
arr[2] = false
arr[3] = 'new value' // add new value
arr[100] = 1000 // add new value

console.log('arr after:', arr) // b  200  false

console.log(arr.length) // 101

console.log(arr(arr.length - 1)) // 1000
console.log(arr.at(-1)) //1000

console.log(arr[3].name) // John
