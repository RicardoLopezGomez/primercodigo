
// para afectar estilos con css se utiliza DOM 

var numeros;
var aux;
var auxletra;
var letras;

numeros = document.getElementById("numeros");
letras = document.getElementById("letras")



function boton1() {
    aux = numeros.innerText;
    
    if (aux == "1 2 3 4 5 6 7 8 9 0") {
        letras.innerHTML="A";   
    } else{

    }if (aux == "") {
        numeros.innerHTML = "1";
    }
    
    
}

function boton2() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A") {

       letras.innerHTML = "A B" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }

    if (aux == "1") {
        numeros.innerHTML = "1 2";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

function boton3() {

    aux = numeros.innerText;

    auxletra = letras.innerText

    if (auxletra == "A B") {

       letras.innerHTML = "A B C" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }

    if (aux == "1 2") {
        numeros.innerHTML = "1 2 3";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

function boton4() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C") {

       letras.innerHTML = "A B C D" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }






    if (aux == "1 2 3") {
        numeros.innerHTML = "1 2 3 4";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

function boton5() {

   
    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C D") {

       letras.innerHTML = "A B C D E" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }







    if (aux == "1 2 3 4") {
        numeros.innerHTML = "1 2 3 4 5";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}
function boton6() {

    aux = numeros.innerText;
    
    auxletra = letras.innerText

    if (auxletra == "A B C D E") {

       letras.innerHTML = "A B C D E F" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }





    if (aux == "1 2 3 4 5") {
        numeros.innerHTML = "1 2 3 4 5 6";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

function boton7() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C D E F") {

       letras.innerHTML = "A B C D E F G" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }







    if (aux == "1 2 3 4 5 6") {
        numeros.innerHTML = "1 2 3 4 5 6 7";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

function boton8() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C D E F G") {

       letras.innerHTML = "A B C D E F G H" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }









    if (aux == "1 2 3 4 5 6 7") {
        numeros.innerHTML = "1 2 3 4 5 6 7 8";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}
function boton9() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C D E F G H") {

       letras.innerHTML = "A B C D E F G H I" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }





    if (aux == "1 2 3 4 5 6 7 8") {
        numeros.innerHTML = "1 2 3 4 5 6 7 8 9";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}
function boton0() {

    aux = numeros.innerText;
    auxletra = letras.innerText

    if (auxletra == "A B C D E F G H I") {

       letras.innerHTML = "A B C D E F G H I J" 

    } else {

        if(auxletra == "" && aux == "1 2 3 4 5 6 7 8 9 0"){

            alert("Falta una Letra");

        }
    }




    if (aux == "1 2 3 4 5 6 7 8 9") {
        numeros.innerHTML = "1 2 3 4 5 6 7 8 9 0";        
    } else {
        if (aux == "") {
            alert("Falta un Número");  
        }
        
    } 
    
    
}

  
