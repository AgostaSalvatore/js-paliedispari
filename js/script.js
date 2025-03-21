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

console.log(palindroma(world));







console.log('----------Pari-Dispari----------');