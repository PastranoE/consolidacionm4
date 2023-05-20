var gastoInicial = [];
var presupuestoIni = 0;

var saldoActual = "";

function presupuesto() {

    if (document.getElementById("presupuestoInicial").value != "") {
        presupuestoIni = document.getElementById("presupuestoInicial").value;
        document.getElementById("pre").innerHTML = Number(presupuestoIni).toLocaleString("es-CL");
        document.getElementById("gas").innerHTML = 0;
        document.getElementById("sal").innerHTML = Number(presupuestoIni).toLocaleString("es-CL");
    } else {
        alert("ingrese el presupuesto")
    }
}

function gastos() {
    if (presupuestoIni == 0) {
        alert("Ingrese el Presupuesto")
        return
    }
    var gastoTotal = 0;
    let gastosItem = document.getElementById("nombreDelGasto").value;
    let valorItem = document.getElementById("valorDelGasto").value;
    let id = gastoInicial.length + 1;
    let table = "";
    let tempo = {
        "id": id,
        "item": gastosItem,
        "monto": valorItem,
    }
    gastoInicial.push(tempo)
    gastoInicial.forEach(function (elemento) {

        table += `<tr>
            <td>${elemento.item}</td>
            <td>${Number(elemento.monto).toLocaleString("es-CL")}</td>
            <td><i onclick="eliminarItem(${elemento.id})" class="fa-solid fa-trash-can fa-xs" style="color: #465cc8;"></i></td>
        </tr>`;
        gastoTotal += parseInt(elemento.monto);

        document.getElementById("tablaGasto").innerHTML = table;

    })
    saldoActual = parseInt(presupuestoIni) - gastoTotal;
    document.getElementById("gas").innerHTML = Number(gastoTotal).toLocaleString("es-CL");
    document.getElementById("sal").innerHTML = Number(saldoActual).toLocaleString("es-CL");
    document.getElementById("nombreDelGasto").value = "";
    document.getElementById("valorDelGasto").value = "";
}

function eliminarItem(id) {


    let item= gastoInicial.findIndex((elemento)=>{
        return elemento.id==id
    })
    gastoInicial.splice(item,1);
    console.log(gastoInicial)
    recalculando()
}
function recalculando(){
    var gastoTotal = 0;
    let table = '';
    if (gastoInicial.length == 0){
        document.getElementById("tablaGasto").innerHTML = table;
    }else{

        gastoInicial.forEach(function (elemento) {
    
            table += `<tr>
                <td>${elemento.item}</td>
                <td>${Number(elemento.monto).toLocaleString("es-CL")}</td>
                <td><i onclick="eliminarItem(${elemento.id})" class="fa-solid fa-trash-can fa-xs" style="color: #465cc8;"></i></td>
            </tr>`;
            gastoTotal += parseInt(elemento.monto);
    
            document.getElementById("tablaGasto").innerHTML = table;
    
        })
    }
    saldoActual = parseInt(presupuestoIni) - gastoTotal;
    document.getElementById("gas").innerHTML = Number(gastoTotal).toLocaleString("es-CL");
    document.getElementById("sal").innerHTML = Number(saldoActual).toLocaleString("es-CL");

}
