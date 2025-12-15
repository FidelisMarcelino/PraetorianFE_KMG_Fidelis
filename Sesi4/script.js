function haloExternal(){
    alert("Halo saya dari external JS");
}

// Var --> dapat di redeclare, nilai dapat diubah
var a = 10;
console.log(a);

var a = 20;
console.log(a);

// Let --> Tidak dapat di re-declare dalam scope yang sama
let b = 15;
console.log(b)

b = 30;
console.log(b)

// Const --> tidak dapat di re-declare sama sekali, sangat aman untuk digunakan
const c = 35;
console.log(c)
// c = 40;
// console.log(c-10)

let name = "Budi"; //String
let age = 20; //Integer/Number
let dob = new Date("2005-05-29"); //Date
let isMale = true; //boolean 
// Boolean -> true/false

// Object
let information = {
    hobby: ["Playing games", "Reading"],
    nationality: "Indonesian",
};

// Arithmetic --> operasi dasar + - * / ** %
console.log(3+3);
console.log(3-3);
console.log(3*3);
console.log(12/5);
console.log(27%4);
// 27 / 4 --> 4 * 6 = 24
console.log(3**3);

// Assignment --> memberi nilai ke variabel
let x = 5;
console.log(x += 3); //5 + 3 = 8
console.log(x -= 3); //8 - 3 = 5

//Comparison --> untuk membandingkan nilai dan menghasilkan true/false
1 == "1";   //true
1 === "1"   //false
5 > 3       //true
5 < 3       //false

// String --> operator khusus pada string
let message = "Hello" + " Worlds";
console.log(message);
let s = "Hi, ";
s += "you";
console.log(s)

let num = 1 + "5";
console.log(num);

// Logical --> &&, ||, !
console.log(true && false); //false
console.log(true || false); //true
console.log(!true) //false

// Bitwise  --> 0101010
// &, |, ^, -, >>, << , >>>
5 & 3 //0101 & 0011 = 0001 --> 1
5 | 3 //0101 | 0011 = 0111 --> 7

// Ternary
let ages = 10;

if(ages < 17){
    console.log("Belum Dewasa");
} else {
    console.log("Dewasa");
}

let status = ages >= 18 ? "Dewasa" : "Belum Dewasa";

// Type -->
typeof 1 //number
typeof "a" //string


// Selection
let nilai = 10;

if(nilai > 10){
    console.log("Lebih besar dari 10");
} else if(x > 4){
    console.log("Lebih besar dari 4, kurang dari 10");
} else {
    console.log("Kurang dari 4");
}

let z = "b";
switch(z){
    case "a":
        console.log("Bad");
        break; //supaya ga nembus ke case selanjutnya

    case "b":
        console.log("Medium");
        break;

    case "c":
        console.log("Good");
        break;

    default:
        console.log("Error");
        break;
}


// Looping
// While
let nums = 1;
while(nums < 5){
    console.log(nums);
    nums += 1;
}

// Do-while
let d = 1;
do {
    console.log(d);
    d += 1;
} while (d < 10);

// For Loop
//++ --> increment --> +1
//-- --> decrement --> -1
for (let index = 10; index < 20; index++) {
    console.log(index);
}

const fruit = ["Apple", "Orange", "Cherry"]

fruit.forEach(function(buah) {
    console.log(buah);
});

fruit.forEach(element => {
    console.log(fruit);
});


// Function
function printName(name){
    console.log(name);
    console.log("Halo " + name);
}

printName("Hamra");
printName("William");

const printNames = (name) => {
    console.log(name);
}

printNames("Fidelis");