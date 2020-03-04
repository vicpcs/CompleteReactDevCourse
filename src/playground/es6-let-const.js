var nameVar = 'Vic'; // function based scoped
console.log('nameVar', nameVar)

let nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Huhuh';
console.log('nameConst', nameConst);

function getPetName () {
    const petName = 'Hal';
    return petName;
}


var fullName = 'Victor Paz'
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)