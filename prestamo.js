
let tasa_interes3 = 21;
let tasa_interes6 = 30; 
let tasa_interes9 = 40; 
let tasa_interes12 = 60; 
let tasa_interes18 = 90; 
let tasa_interes24 = 120; 
let tasa_interes36 = 180; 


function calcular_monto_total (capital, numero_cuotas){

    if(capital < 250000 && numero_cuotas == 3){
        
        let valor_total_prestamo = capital + (interes_total3); 
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas3()
    }
    else if(capital < 250000 && numero_cuotas == 6){

        let valor_total_prestamo = capital + (interes_total6); 
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas6()
    }
    else if(capital < 250000 && numero_cuotas == 9){
        
        let valor_total_prestamo = capital + (interes_total9);
        console.log("Devolverías:", valor_total_prestamo, "en", numero_cuotas); 
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas9()  
    }
    else if(capital < 250000 && numero_cuotas == 12){

        let valor_total_prestamo = capital + (interes_total12);
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas12()
    }
    else if(capital < 250000 && numero_cuotas == 18){

        let valor_total_prestamo = capital + (interes_total18);
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas18()

    }
    else if(capital < 250000 && numero_cuotas == 24){

        let valor_total_prestamo = capital + (interes_total24);
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas24()
    }
    else if(capital < 250000 && numero_cuotas == 36){

        let valor_total_prestamo = capital + (interes_total36);
        console.log("Devolverías:", valor_total_prestamo);
        console.log("Mirá el detalle de tus cuotas");
        console.log("Devolvés", numero_cuotas,"cuotas de:");
        detallar_cuotas36()
    }

    else{
        console.log("Algunos de los datos ingresados no es correcto, inténtalo de nuevo!!");
        
    }

}



let capital = parseInt(prompt("¿Cuánto necesitas?"));
let numero_cuotas = parseInt(prompt("¿En cuántas cuotas lo devolvés?: 3, 6, 9, 12, 18, 24, 36"));

let interes_total3 = (capital* tasa_interes3)/100;
let interes_total6 = (capital* tasa_interes6)/100;
let interes_total9 = (capital* tasa_interes9)/100;
let interes_total12 = (capital* tasa_interes12)/100;
let interes_total18 = (capital* tasa_interes18)/100;
let interes_total24 = (capital* tasa_interes24)/100;
let interes_total36 = (capital* tasa_interes36)/100;

let cuota_mes3 = (capital + interes_total3)/ numero_cuotas;
let cuota_mes6 = (capital + interes_total6)/ numero_cuotas;
let cuota_mes9 = (capital + interes_total9)/ numero_cuotas;
let cuota_mes12 = (capital + interes_total12)/ numero_cuotas;
let cuota_mes18 = (capital + interes_total18)/ numero_cuotas;
let cuota_mes24 = (capital + interes_total24)/ numero_cuotas;
let cuota_mes36 = (capital + interes_total36)/ numero_cuotas;

calcular_monto_total(capital, numero_cuotas);


function detallar_cuotas3(){
    for(i = 0; i < 3; i++){
        let cuota = cuota_mes3; 
        console.log(cuota);
    }
}


function detallar_cuotas6(){
    for(i = 0; i < 6; i++){
        let cuota = cuota_mes6; 
        console.log(cuota);
    }
}

function detallar_cuotas9(){
    for(i = 0; i < 9; i++){
        let cuota = cuota_mes9; 
        console.log(cuota);
    }
}

function detallar_cuotas12(){
    for(i = 0; i < 12; i++){
        let cuota = cuota_mes12; 
        console.log(cuota);
    }
}

function detallar_cuotas18(){
    for(i = 0; i < 18; i++){
        let cuota = cuota_mes18; 
        console.log(cuota);
    }
}

function detallar_cuotas24(){
    for(i = 0; i < 24; i++){
        let cuota = cuota_mes24; 
        console.log(cuota);
    }
}

function detallar_cuotas36(){
    for(i = 0; i < 36; i++){
        let cuota = cuota_mes36; 
        console.log(cuota);
    }
}

console.log("Gracias por elegirnos!!");


//Creo array de objetos, contiene los préstamos otorgados a nuestros clientes. 

/*class Clientes{
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
console.log("Total de préstamos solicitados en el dia:", prestamos_total_dia);*/

//Ver porque no suma


function simular(){
    let cantidad = document.getElementById("prestamo");
console.log("Simule su préstamo", cantidad.value);

}


