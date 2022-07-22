
let miInput = document.getElementById("prestamo");
let devuelve = document.getElementById("devuelve");
let selector = document.getElementById("selector");
let container_detalle = document.getElementById("container_detalle");
let monto_interes = 0;
let monto_cuota = 0;



document.getElementById("simulador").addEventListener("click", () =>{
    if(parseInt(miInput.value) < 1000 ){
        alert("El monto mínimo es $1000")
        miInput.value = "1000"
    }    
    
    switch (selector.value) {
        case "3":
            monto_interes = parseFloat(miInput.value) * 1.21;
        break;

        case "6":
            monto_interes = parseFloat(miInput.value) * 1.3;
        break;

        case "9":
            monto_interes = parseFloat(miInput.value) * 1.4;
        break;

        case "12":
            monto_interes = parseFloat(miInput.value) * 1.6;
        break;

        case "18":
            monto_interes = parseFloat(miInput.value) * 1.9;
        break;

        case "24":
            monto_interes = parseFloat(miInput.value) * 2.2;
        break;

        case "36":
            monto_interes = parseFloat(miInput.value) * 2.8;
        break;
    }

    devuelve.value = monto_interes;
});


document.getElementById("ver").addEventListener("click", () =>{
    
    monto_cuota = monto_interes/parseInt(selector.value);
    monto_cuota = monto_cuota.toFixed(2);
    const valor = document.createElement("div");
    valor.innerText = monto_cuota;
    container_detalle.appendChild(valor);
})

/*

//Creo array de objetos, contiene los préstamos otorgados a nuestros clientes. 

class Clientes{
    constructor(nombre, apellido, capital, cuotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.capital = capital;
        this.cuotas = cuotas;
    }
}

let lista_clientes = [];

for(let i = 0; i < 3; i++){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let capital = prompt("¿Cuánto sacaste?");
    let cuotas = prompt("En cuántas cuotas?");

    let cliente_nuevo = new Clientes (nombre, apellido, capital, cuotas);

    lista_clientes.push(cliente_nuevo);

}

console.log(lista_clientes);



//Utilizo el FOR OF para iterar cada uno de los clientes, puedo ver sus datos, capital que solicitó y cuotas

for(let solicitante of lista_clientes){
    console.log("Cliente:", solicitante.nombre, solicitante.apellido);
    console.log("Solicitó: $", solicitante.capital);
    console.log("en:", solicitante.cuotas, "cuotas");
    console.log("*********************************************")
}

// Utilizo Método FIND para buscar alguna dato sobre el cliente, en este caso el apellido

function buscar_clientes(cliente){
    return cliente.apellido == "Perez"
}

let resultado_busqueda = lista_clientes.find(buscar_clientes);
console.log("El cliente es:", resultado_busqueda);

//Utilizo método FILTER y busco los préstamos mayores a 10 mil

function buscar_monto(prestamo){
    return prestamo.capital >= 10000
}

let resultado_busqueda_capital = lista_clientes.filter(buscar_monto);
console.log("Los prestamos superiores a 10 mil son:", resultado_busqueda_capital);

//Utilizo metodo REDUCE, quiero calcular el total de prestamos que se sacaron

function calcular_total_prestamos( acumulador, monto){
    acumulador = acumulador + monto.capital;
    return acumulador 
}

let prestamos_total_dia = lista_clientes.reduce(calcular_total_prestamos, 0);
console.log("Total de préstamos solicitados en el dia:", prestamos_total_dia);

//Ver porque no suma*/


