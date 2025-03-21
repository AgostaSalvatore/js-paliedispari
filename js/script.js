console.log('----------Palindroma----------');

// Chiedere all'utente di inserire una parola
let world = prompt('Inserisci una parola');
//inizializzo la variabile di conforto per capire se la parola è palindroma
let worldReverse ='';
//iniziallizzo la funzione per capire se la parola è palindroma
function palindroma(world){
    worldReverse = world.split('').reverse().join('');
    if(world == worldReverse){
        return 'La parola è palindroma';
    }
    else{
        return 'La parola non è palindroma';
    }
}

//Risultato
console.log(palindroma(world));


console.log('----------Pari-Dispari----------');

// Chiedere all'utente di scegliere tra pari e dispari
let choise = prompt('Scegli tra pari e dispari');
// Chiedere all'utente di inserire un numero tra 1 e 5
let userNum = parseInt(prompt('Inserisci un numero tra 1 e 5'));
//Stampo la scelta dell'utente
console.log('Hai scelto: ' + choise);
//Stampo il numero dell'utente
console.log('Il tuo numero è: ' + userNum);

function randomNumber(min, max){
    let min = 1;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}