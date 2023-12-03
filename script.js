console.log("Hello World, please print this in the console")
console.warn("Yes, it worked.")
console.error("At least, some grade it counts. Hopefully.")

var varVariable = 'Changes'
console.log(varVariable)

const constVar = {name: 'Richard'}
constVar.name = 'Juan'
console.log(constVar)

if(true){
    let letVar = 'True'

console.log(letVar)
}


let person = 
{
    name:"Joe Doe",
    age:26,
    country:"Peru",
    weight:230

}
console.log(person["name"])
console.log(person.age);

var burger = 5;
burger += 1
console.log(burger)
var burgerS = burger * 2
console.log(burgerS)

x = 20
if (x==20) {
    console.log('True')
}
if (x<=20){
    console.log('false')
}

var theAge = 20;
if (theAge < 18 || theAge > 40 || theAge=== 20) {
    console.log("it is possible");
} else{
    console.log("no travel allow");
}

let z = 3.5
z = Math.round(z);
y = Math.pow(z, 2);
console.log(z)
console.log(y)

let today = new Date();
console.log(today)