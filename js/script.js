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

//funzione per generare un numero random che verra' assegnato al computer
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Stampo il numero generato dal computer
let computerNum = randomNumber(1,5);
console.log('Il numero del computer è: ' + computerNum);

//funzione per sommare i due numeri
function sum(computerNum, userNum){
    return computerNum + userNum;
}

if(sum(randomNumber, userNum) % 2 == 0 && choise == 'pari'){
    console.log('Hai vinto!');
}
else if(sum(randomNumber, userNum) % 2 != 0 && choise == 'dispari'){
    console.log('Hai vinto!');
}
else{
    console.log('Hai perso!');
}