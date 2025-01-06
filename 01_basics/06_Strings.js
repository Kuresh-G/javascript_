let id= "23dce032"
let degree = "btech"
console.log(`i am studying ${degree} and my id is ${id}`)
const name = new String("Kuresh garbada")
console.log(name)
console.log(name.length)  // length
console.log (name.__prototype__)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))    // char at position
console.log(name.indexOf('K'))    // index of any char
let first_name = name.substring(0,7)    // not obeyss negative starting
console.log(first_name)
let first__name = name.slice(-2,4)   // obeys negaative starting
console.log(first__name)
let spaces = "    i  lovee  you   "
console.log(spaces.trim())                // trim removes trailing and after spaces

const url = "https://kuresh.com/kuresh%20//hello"
const url_1 = url.replace('%20','-')    // replace
console.log(url_1) 
console.log(url.includes('hatim'))   // includes
const f_name = name.split(' ')
console.log(f_name)


