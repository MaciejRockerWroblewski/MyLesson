// const str = "lorem"

// const num = 5
// const bool = true
// const arr = ["ffff", 'kkkkk']
// const nu = null
// const und = undefined
// const obj = {
//     name: "Jan"
// }
// obj.val = "Adam"
// function toDo() {
//     console.log(456)
// }

// console.log(arr instanceof Object)
// if(typeof str === String) {
//     // 
// }

// const a = "w podwójnym"
// const b = 'w pojedyniczym'
// const c = "Jan Kochanowski powiedział: 'coś ciekawego' "
// console.log(a.concat(b))  // a + b

// const numLikeString = '456'
// const changeString = parseInt(numLikeString)
// // console.log(c.search('an'))
// // console.log(a.toUpperCase())
// // console.log(b.split(' '))

// // console.log(typeof numLikeString, numLikeString)
// // console.log(typeof changeString, changeString)





// function dodawanie() {
//     //
// }
// const odejmowanie = () => {

// }
// dodawanie()
// odejmowanie()

// const arra = [4554,52, 50, 1, 4, 90, 107, 2587 ]

// arra.forEach((item, index) => {
//     console.log(item, index)
//     // item += index 
// })

// const filtr = arra.filter(item => {
//     return item < 20
// })


// console.log(filtr)

// const newMap = arra.map(item => item *4)
// console.log(newMap)

// console.log(arra.includes(52))

// console.log(arra.every(item => item > 1))
// console.log(arra.some(item => item > 1))

// const poSortowane = arra.sort((a,b) => {
//     console.log(a,b)
//     return a - b
// })
// console.log(arra)
// console.log(poSortowane)

// const obje = {
//     name: 'Jan',
//     age: 50,
//     city: "Poznań",
// }
// const obje2 = {
//     name: 'Adam',
//     age: 70,
//     city: "Warszawy",
// }
// function Person (name, age, city) {
//     this.name = name
//     this.age = age
//     this.city = city
// }

// const person1 = new Person("Adam", 55, "Łódź")
// person1.phone = 4252525252



// obje.phoneNumber = 7258582654
// const key = Object.keys(obje)
// console.log(key)

// key.forEach(item => {
//     console.log(obje[item])
// })

// // console.log(obje.name)
// // console.log(obje['name'])

const paragraf = document.getElementsByTagName('p')
console.log(paragraf)

const paragrafClass = document.getElementsByClassName('paragraf')
console.log(paragrafClass)

const paragrafId = document.getElementById('id-paragraf')
console.log(paragrafId)