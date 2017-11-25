var cadena = "";
var cadena2 = "";
var suma = 0;
var resta=0;
var mp=0;
var div=0;
var sim = "";
var n1 = "";
var n2 = "";
var repetir=0;
var bandera= true;
var bpunto=true;
document.addEventListener('click', function (e) {

    valor = (e.target.value);
    if(valor=='.' && bpunto){
        cadena+=valor;
        document.calculadora.texto.value=cadena; 
        bpunto=false;
    }
    if (valor >= 0 && valor <= 9) {
        cadena+=valor;
        document.calculadora.texto.value=cadena;
    
    
        
      /*  var ex =/.{1}/;
        if(ex.test(document.calculadora.texto.value)){
            bandera=true;
        }else{
            bandera=false;
            cadena += valor;
        document.calculadora.texto.value = cadena;
        }
        if(bandera==true){
            alert("Mierda");
        }*/


    } else if (valor == '+' || valor == "-" || valor == '*' || valor == '/') {
        bpunto=true;
       if (document.calculadora.texto.value == "") {
            alert("Ingrese un número primero.");
        } else {
            if (n1 == "") { 
                n1 = cadena; 
                document.calculadora.texto.value = "";
                document.calculadora.texto2.value = valor;
                sim = document.calculadora.texto2.value; 
                cadena = "";
            } else if(valor=="+/-") {
                
            }
        }
    }
    else if (valor == "=") {
        bpunto=true;
        inversa(n1, sim);
        raiz(n1, sim);
        cuadrado(n1,sim);
        if(document.calculadora.texto.value == ""){
            alert("Ingrese un numero seguido de un simbolo seguido de otro número");
        }
        else {
            n2 = cadena;
            operacion(n1, sim, n2);
            opresta(n1, sim, n2);
            opmulti(n1, sim, n2);
            opdiv(n1, sim, n2);
            residuo(n1, sim, n2);
            
            
            
            n1 = "";
            n2 = "";
            sim = "";
            cadena = "";
        }
    }
    if(valor=='CE'){
        bpunto=true;
        cadena="";
    document.calculadora.texto.value="";
         document.calculadora.texto2.value="";
}else if(valor=="C"){
    cadena= cadena.substring(0,cadena.length-1);
    document.calculadora.texto.value=cadena;
}else if(valor=='Erase'){
    bpunto=true;
    cadena= cadena.substring(0,cadena.length-1);
    document.calculadora.texto.value=cadena;
}

});

function operacion(N1, SIM, N2) {
    if (SIM == '+') {
        suma = (parseFloat(N1) + parseFloat(N2));
        document.calculadora.texto.value = suma;
    }
}
function opresta(N1, SIM, N2){
    if(SIM=='-'){
        resta=(parseFloat(N1) - parseFloat(N2));
        document.calculadora.texto.value=resta;
    }
}
function opmulti(N1, SIM, N2){
    if(SIM=='*'){
        mp=(parseFloat(N1) * parseFloat(N2));
        document.calculadora.texto.value=mp;
    }
}
function opdiv(N1, SIM, N2){
    if(SIM=='/'){
        div=(parseFloat(N1) / parseFloat(N2));
        document.calculadora.texto.value=div;
    
    }
}

function residuo(N1, SIM, N2){
    if(SIM=='%'){
        mod=(parseFloat(N1) % parseFloat(N2));
        document.calculadora.texto.value=mod;
    
    }
}

function cuadrado(N1,SIM){
    if(SIM=='^'){
        exponente=(Math.pow(parseInt(N1), 2));
        document.calculadora.texto.value=exponente;
    }
}

function inversa(N1, SIM){
    if(SIM=='1/X'){
        inv=(Math.pow(parseInt(N1), -1));
        document.calculadora.texto.value=inv;
    
    }
}

function raiz(N1,SIM){
    if(SIM=='sqrt'){
        raizc=(Math.sqrt(parseFloat(N1)));
        document.calculadora.texto.value=raizc;
    }
}
