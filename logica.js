const promedio = () => {
     document.addEventListener("DOMContentLoaded", () => { 
        
        notaPromedios = document.addEventListener("input", function () {

            var notaTaller1 = 0;
            var notaTaller2 = 0;
            var notaTaller3 = 0;
            var notaParcial = 0;
            var notaTrabajo = 0;

            /* CALCULO DE 3 NOTAS DE "TALLERES"  --------------------------------------*/

            notaTaller1 = Number(document.getElementById("NotaTaller1").value);
            notaTaller2 = Number(document.getElementById("NotaTaller2").value);
            notaTaller3 = Number(document.getElementById("NotaTaller3").value);

            notaTaller = ((notaTaller1 + notaTaller2 + notaTaller3) / 3).toFixed(2);

            var totalTalleres = Number((notaTaller * 0.55).toFixed(2));
            console.log(`La nota de los talleres es ${totalTalleres}`);


            /* CALCULO NOTA DEL PARCIAL --------------------------------------------------*/

            var notaParcial = Number(document.getElementById("NotaPacial").value);

            var totalParcial = Number((notaParcial * 0.30).toFixed(2));
            console.log(`La nota del Parcial es ${totalParcial}`);


            /* CALCULO NOTA DEL TRABAJO FINAL -----------------------------------------*/

            var notaTrabajo = Number(document.getElementById("TrabajoFinal").value);

            var totalTrab =  Number((notaTrabajo * 0.15).toFixed(2));
            console.log(`La nota del Trabajo Final es ${totalTrab}`);


            /* CALCULO NOTA DEFINITIVA  ------------------------------------------------*/
            var notaDefinitiva = Number(totalTalleres + totalParcial + totalTrab).toFixed(2); 

            document.getElementById("Promedio").value = notaDefinitiva;
            console.log(`Nota Final ---- ${notaDefinitiva} -----`); 
        });
     }); 
}

promedio();