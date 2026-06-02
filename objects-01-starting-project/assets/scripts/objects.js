const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

let person = {
    'first-name': 'Dario',
    age: 41,
    hobbies: ["Sports", "Cookin"],
    greet: function () {
        console.log('hi there!')
    },
    1.5: 'hello'
};

// person = {
//     name: 'Dario',
//     age: 41,
//     hobbies: ["Sports", "Cookin"],
//     greet: function () {
//         console.log('hi there!')
//     },
//     isAdmin: true
// }

// person.age = 31;
// delete person.age;
person.age = undefined;
person.isAdmin = true;
console.log(person[1.5]);
console.log(person)
