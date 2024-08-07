'use strict';

const myChart = document.getElementById("mychart");
const barChart = new Chart(myChart, {
    type: "polarArea", //chart, pie, doughnut, line, polarArea
    data: {
        labels:["rojo", "amarillo", "azul", "verde", "morado"],
        datasets:[{
            label:"cantidad de colores",
            data:[10,25,15,50,8],
            backgroundColor:["#FF6443","yellow","blue","green","purple"]
        }]
    }
})


const persona={
    nombre:"jessica",
    edad:"25",
    ciudad:"madrid"
};

const jsonPersona=JSON.stringify(persona);
console.log(jsonPersona);
localStorage.setItem('persona',jsonPersona);

const jsonPersonaRecuperado=localStorage.getItem('persona');
const personaRecuperada=JSON.parse(jsonPersonaRecuperado);
console.log(personaRecuperada);
