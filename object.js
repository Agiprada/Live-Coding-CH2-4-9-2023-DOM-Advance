// let student1 = {
//     name: "mr.nothing",
//     age: 20,
//     skill : ["php", "c++", "c#"]
// }

// let student2 = {
//     name: "mr.cloud",
//     age: 20,
//     skill : ["perl", "c", "python"]
// }

let student3 = {
    name: "mr.bluesky",
    age: 20,
    skill : ["css", "html", "c#"]
}

//constructor Function ->huruf depanya besar
function StudenFSW(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}
//inisialisasi object
var student1 = new StudenFSW('justgin', 21, ["PHP"]);
var student2 = new StudenFSW('punpun', 20, ["css"]);

console.log(student2)