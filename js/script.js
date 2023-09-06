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
let name, lastname, favoritecolor;
//Prendo l'elemento dove stamperò nomecognomecolorepreferito23
const outputTag = document.getElementById('output');
name = prompt('Inserisci il tuo nome:');
//2. Chiedo all'utente il suo cognome
lastname = prompt('Inserisci il tuo cognome:');
//3. Chiedo all'utente il suo colore preferito
favoritecolor = prompt('Inserisci il tuo colore preferito');
