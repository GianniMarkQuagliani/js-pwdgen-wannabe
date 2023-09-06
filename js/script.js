/* 
(Pseudo codice)
Inizia
1. Chiedo all'utente il suo nome
2. Chiedo all'utente il suo cognome
3. Chiedo all'utente il suo colore preferito 
4. Combino le informazioni: nome + cognome + colore preferito + numero (in questo caso è 23)
5. Stampo il tutto sulla pagina
Fine
*/

//1. Chiedo all'utente il suo nome
//Dichiaro tutte le mie variabili
let name, lastname, favoritecolor, message, number23;
//Prendo l'elemento dove stamperò nomecognomecolorepreferito23
const outputTag = document.getElementById('output');
name = prompt('Inserisci il tuo nome:');
//2. Chiedo all'utente il suo cognome
lastname = prompt('Inserisci il tuo cognome:');
//3. Chiedo all'utente il suo colore preferito
favoritecolor = prompt('Inserisci il tuo colore preferito');
//number23
number23 = 23;
//4. Combino le informazioni: nome + cognome + colore preferito + numero (in questo caso è 23)
message = name + lastname + favoritecolor + number23;
//5. Stampo il tutto sulla pagina
outputTag.innerHTML = message;

// 6. Stampo tutte le variabili e il messaggio completo nella console
console.log('Nome:', name);
console.log('Cognome:', lastname);
console.log('Colore Preferito:', favoritecolor);
console.log('Numero 23:', number23);
console.log('Messaggio completo:', message);