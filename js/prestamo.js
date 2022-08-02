
//Empieza la parte donde se realiza el simulador de prestamo

let miInput = document.getElementById("prestamo");
let devuelve = document.getElementById("devuelve");
let selector = document.getElementById("selector");
let container_detalle = document.getElementById("container_detalle");
let monto_interes = 0;
let monto_cuota = 0;
let cantidad_cuotas = 0;


//Apliqué operador ternario
document.getElementById("simulador").addEventListener("click", () =>{
    parseInt(miInput.value) < 1000 ? alert("El monto mínimo es $1000") : miInput.value = "1000"
        
    switch (selector.value) {
        case "3":
            monto_interes = parseFloat(miInput.value) * 1.21;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 3;
        break;

        case "6":
            monto_interes = parseFloat(miInput.value) * 1.3;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 6;
        break;

        case "9":
            monto_interes = parseFloat(miInput.value) * 1.4;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 9;
        break;

        case "12":
            monto_interes = parseFloat(miInput.value) * 1.6;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 12;
        break;

        case "18":
            monto_interes = parseFloat(miInput.value) * 1.9;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 18;
        break;

        case "24":
            monto_interes = parseFloat(miInput.value) * 2.2;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 24;
        break;

        case "36":
            monto_interes = parseFloat(miInput.value) * 2.8;
            monto_interes = monto_interes.toFixed(2)
            cantidad_cuotas = 36;
        break;
    }

    devuelve.value = monto_interes;
});


document.getElementById("ver").addEventListener("click", ()=>{

    monto_cuota = monto_interes/parseInt(selector.value);
    monto_cuota = monto_cuota.toFixed(2);
    console.log(monto_cuota);
    const valor = document.createElement("div");
    valor.innerText = `Devolvés ${cantidad_cuotas} cuotas de $ ${monto_cuota} cada una.`;
    container_detalle.appendChild(valor);
})


let lista_clientes = [];

function traer_datos(){
    const main = document.getElementById("main");
    const formulario = document.createElement("form");
    formulario.innerHTML = `
            <label>Nombre <input type="text" id="nombre"></label>
            <label>Apellido <input type="text" id="apellido"></label>
            <label>DNI <input type="number" id="dni"></label>
            <button id="confirma">Confirmar</button>    
    `
    main.appendChild(formulario);

    document.getElementById("confirma").addEventListener("click", (e) =>{
        e.preventDefault(); //para evitar que se vaya el formulario porque al estar al final se tomo como un submit
        let nombre_usuario = document.getElementById("nombre");
        let apellido_usuario = document.getElementById("apellido");
        let dni_usuario = document.getElementById("dni");
        let usuario = {"nombre": nombre_usuario.value, "apellido": apellido_usuario.value, "dni": dni_usuario.value};
        
         //guardo datos en json
        lista_clientes.push(usuario);
        localStorage.setItem("clientes", JSON.stringify(lista_clientes));
        
    })
    
    //recupero los datos
    //localStorage.getItem("clientes"); 
    //console.log(JSON.parse(clientes));

}

let obtener = document.getElementById("obtener");
obtener.addEventListener("click", traer_datos);


function finalizar(){
    const main = document.getElementById("main");
    let despedir = document.createElement("p");
    despedir.innerHTML = `Te esperamos nuevamente. Gracias por tu consulta!!`
    main.appendChild(despedir);
}

let saludar = document.getElementById("terminar");
saludar.addEventListener("click", finalizar);


/*Creo array de objetos, contiene los préstamos otorgados a nuestros clientes. 

let lista_clientes = [];

class Clientes{
    constructor(nombre, apellido, capital, cuotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.capital = capital;
        this.cuotas = cuotas;
    }

    lista_clientes.push();
}

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


//Almaceno los datos del cliente que quiere el prestamo



