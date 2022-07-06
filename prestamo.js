


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
        console.log("Devolvés:", valor_total_prestamo);
    }
    else if(capital < 250000 && numero_cuotas == 6){

        let valor_total_prestamo = capital + (interes_total6); 
        console.log("Devolvés:", valor_total_prestamo);
    }
    else if(capital < 250000 && numero_cuotas == 9){
        
        let valor_total_prestamo = capital + (interes_total9);
        console.log("Devolvés:", valor_total_prestamo, "en", numero_cuotas);

        
    }
    else if(capital < 250000 && numero_cuotas == 12){

        let valor_total_prestamo = capital + (interes_total12);
        console.log("Devolvés:", valor_total_prestamo);
    }
    else if(capital < 250000 && numero_cuotas == 18){

        let valor_total_prestamo = capital + (interes_total18);
        console.log("Devolvés:", valor_total_prestamo);
    }
    else if(capital < 250000 && numero_cuotas == 24){

        let valor_total_prestamo = capital + (interes_total24);
        console.log("Devolvés:", valor_total_prestamo);
    }
    else if(capital < 250000 && numero_cuotas == 36){

        let valor_total_prestamo = capital + (interes_total36);
        console.log("Devolvés:", valor_total_prestamo);
    }

    else{
        console.log("Algunos de los datos ingresados no es correcto, inténtalo de nuevo!!")
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

console.log("Mirá el detalle de tus cuotas");

console.log("Devolvés en 3 cuotas");
    for(i = 0; i < 3; i++){
        console.log("Pagás por mes: $", cuota_mes3);
    }

    console.log("Devolvés en 6 cuotas")
    for(i = 0; i < 6; i++){
        console.log("Pagás por mes: $", cuota_mes6);
    }

    console.log("Devolvés en 9 cuotas")
    for(i = 0; i < 9; i++){
        console.log("Pagás por mes: $", cuota_mes9);
    }

    console.log("Devolvés en 12 cuotas")
    for(i = 0; i < 12; i++){
        console.log("Pagás por mes: $", cuota_mes12);
    }

    console.log("Devolvés en 18 cuotas")
    for(i = 0; i < 18; i++){
        console.log("Pagás por mes: $", cuota_mes18);
    }

    console.log("Devolvés en 24 cuotas")
    for(i = 0; i < 24; i++){
        console.log("Pagás por mes: $", cuota_mes24);
    }

    console.log("Devolvés en 36 cuotas")
    for(i = 0; i < 36; i++){
        console.log("Pagás por mes: $", cuota_mes36);
    }

console.log("Gracias por elegirnos!!")





    


