/*    -> primitive 
7
String,Number,Boolean,null,undefined,symbol(for making component unique),BigInt*/
const id = 1234
const name="kuresh"
const id_1 = Symbol('123')
const isloggedin = true
const orig_id = Symbol('123')
const another_id = Symbol('123')
console.log(orig_id===another_id)
const bigNumber = 1233494389839283982939218398n //  BigInt
     /* -> reference
Array , Objects , Functions*/

const heroes=["ironman","superman","captain america"]
let myobj = { name :"kuresh ", age : 20}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof heroes)
console.log(typeof myFunction)
console.log(typeof id_1)