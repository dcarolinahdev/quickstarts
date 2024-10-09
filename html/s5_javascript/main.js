// alerts
// alert("Hi, I'm dcarolinahdev");

// variables
let firstname = "Diana Carolina";
let lastname = "Hernandez";
let est = 172;

// show in console
// console.log(firstname);

// constant
const fnac = 25;

// concatenate
let name_alt = firstname + " " + lastname;
// console.log(name_alt)

// DOM selector
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h2>My name is ${name_alt}</h2>
    <p>I'm ${est} cm</p>
`;

// conditions
if(est >= 168) {
    datos.innerHTML += "<small>I am a tall person in Colombia</small>";
} else {
    datos.innerHTML += "<small>I am a short person in Colombia</small>";
}

// loops
for(let year = 2020; year<=2023; year++){
    datos.innerHTML += `<p>We're in ${year}</p>`;
}

// arrays
let dishes = ["Hornado", "Cuy", "Helado de paila"];

let divdishes = document.querySelector("#dishes");

// divdishes.innerHTML = dishes[0];
divdishes.innerHTML = "<h2>Typical dishes in Nariño Colombia</h2><ul>";

/*dishes.forEach(dish => {
    divdishes.innerHTML += "<li>"+dish+"</li>";
});*/

for(let dish of dishes) {
    divdishes.innerHTML += "<li>"+dish+"</li>";
}

divdishes.innerHTML += "</ul>";

// functions

const myinfo = (name, stature) => {
    let mydata = `
    <h2>My name is ${name}</h2>
    <p>I'm ${stature} cm</p>
    `;

    return mydata;
}

const printp = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML = myinfo("Franco Lopez", 112);
}

printp();