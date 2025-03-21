console.log('----------Palindroma----------');

// Chiedere all'utente di inserire una parola
let world = prompt('Inserisci una parola');
//inizializzo la variabile di conforto per capire se la parola è palindroma
let worldReverse ='';
//iniziallizzo la funzione per capire se la parola è palindroma
function palindroma(world){
    worldReverse = world.split('').reverse().join('');
}

console.log(palindroma(world));







console.log('----------Pari-Dispari----------');