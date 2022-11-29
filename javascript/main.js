// Sistema local para taller de reparación de bicicletas

let bike = "🚴 01 → Bicicleta"
let bmx = "🚲 02 → BMX"
let skate = "🛹 03 → Skate" 
let figure = "⛸️ 04 → Patín artístico" 
let rollers = "🎢 05 → Rollers"
let scooter = "🛴 06 → Monopatín"   

let bikeN = 1
let bmxN = 2
let skateN = 3
let figureN = 4
let rollersN = 5
let scooterN = 6  

let bikeFix = parseInt(prompt("Bienvenido 🚲 BICICLETERÍA SCARANO 🚲\n\nPor favor, indique la cantidad de 🛠️ REPARACIONES 🛠️ que ingresaron en el día de hoy:"));

// Algoritmo utilizando un CICLO por conteo (estructura FOR) + algoritmo utilizando un CONDICIONAL (estructura IF ELSE)

for (let repair = 0; repair < bikeFix; repair++){
    let client = prompt("• Ingrese APELLIDO y/o NOMBRE del cliente N° " + (repair + 1));
    console.log("Cliente: " + client.trim().toUpperCase()); 
    alert("🧍 El cliente N° " + (repair + 1) + " es: " + client.trim().toUpperCase()); 
    let type = parseInt(prompt("• Indique el número del TIPO de rodado:\n\n" + bike + "\n" + bmx + "\n" + skate + "\n" +  figure + "\n" + rollers + "\n" +  scooter));               
    if (type == 1) {
        console.log("• Rodado: " + bike);  
        alert("• El rodado es: " + bike); 
    } else if (type == 2) {
        console.log("• Rodado: " + bmx);  
        alert("• El rodado es: " + bmx); 
    } else if (type == 3) { 
        console.log("• Rodado: " + skate);  
        alert("• El rodado es: " + skate); 
    } else if (type == 4) { 
        console.log("• Rodado: " + figure);  
        alert("• El rodado es: " + figure); 
    } else if (type == 5) { 
        console.log("• Rodado: " + rollers);  
        alert("• El rodado es: " + rollers); 
    } else if (type == 6) { 
        console.log("• Rodado: " + scooter);  
        alert("• El rodado es: " + scooter); 
    } else {
        console.log("• Rodado: ❓ 07 → Otro");  
        alert("• El rodado es: ❓ 07 → Otro");  
    }
}