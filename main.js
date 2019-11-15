var dadicpu = Math.floor(Math.random() * 6) + 1;
var dadiutente = prompt('Inserisci un numero da 1 a 6')

if (dadiutente > dadicpu) {
    document.getElementById('risultato').innerHTML = ('Hai vinto');
    console.log('Hai vinto!');
} else if (dadiutente = dadicpu) {
    document.getElementById('risultato').innerHTML = ('Pareggio');
    console.log('Parità');
} else {
    document.getElementById('risultato').innerHTML = ('Hai perso');
    console.log('Hai perso');
}
