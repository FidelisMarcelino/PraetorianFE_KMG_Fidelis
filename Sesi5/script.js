// Array
const myList = [1, 2, 3, 5, 7, 9, 0];

console.log(myList);
console.log(myList.length);
console.log(myList.toString());
console.log(myList.join(" - "));
console.log(myList.at(5));
console.log(myList[5]);

myList.push(4);
console.log(myList);

myList.pop();
console.log(myList);

console.log(myList.includes(11));
console.log(myList.reverse());

// Object : kumpulan tipe data
const person = {
    name: {
        first: "Budi",
        last: "Santoso",
    }, //string
    age: 20, //number
    courses: "Front-End Development", //string
    isBinusian: true, //boolean
    skills: ["HTML", "CSS", "JavaScript"], //array
};

console.log(person.age);
console.log(person.name.last);
console.log(person["age"]);

person.age += 5;
console.log(person.age);

console.log(person.nationality);
person.nationality = "Indonesian";
console.log(person.nationality);

const inputChangeHandler = (e) => {
    console.log("Input berubah");
}

const submitHandler = (e) => {
    console.log("Submit!");
    document.getElementById("text-2").innerHTML = document.getElementById("input-name").value;
}