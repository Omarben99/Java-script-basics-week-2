/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//I principali datatype in JavaScript sono:
// 1. String: Sono come parole o frasi. Ad esempio: "hey" o "345".
// 2. Number: Sono numeri, sia interi che decimali. Ad esempio:8,2.5.
// 3. Boolean: Sono risposte semplici, "vero" o "falso". 
// 4. Null: È come dire "non c'è niente".
// 5. Undefined: È come una scatola vuota di cui non sappiamo ancora cosa ci sarà dentro.
// 6. Object: È una scatola più grande che può contenere diversi tipi di cose (dati).
// 7. Symbol: È un identificatore unico, come una chiave speciale.
// 8. BigInt: Serve per numeri davvero grandi, più grandi di quelli che il tipo Number può gestire.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// Un oggetto in JavaScript è come una scatola che contiene molte cose diverse, organizzate in coppie chiave-valore. Ad esempio, "nome: Omar" significa che nella scatola c'è il nome "Omar". 
//Gli oggetti possono contenere anche funzioni oltre a dati.

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 6 + 4;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Omar";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultato = 4 - x;
console.log(risultato);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); 
console.log(name1.toLowerCase() === name2.toLowerCase()); 
