function Calcular() {
    let n = document.getElementById("numero").value; 
    if (n<0) {
        document.getElementById("salida").innerHTML = "muy bajo :(" ;
    }
    else if (n<=10) {
        document.getElementById("salida").innerHTML = "correcto :)";
    }
    else  {
        document.getElementById("salida").innerHTML = "te has pasado :(";
    }
    
    
        

}