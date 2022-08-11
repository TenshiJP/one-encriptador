
function encryptText(){
    let inputText = document.querySelector("#texto");//Seleccionar el input.
    let texto = inputText.value;                    //Capturar texto del input.
    if(texto==""){
        showResult(texto);
    }else{
        let encrypt = "";								//Variable para guardar el texto encriptado.
        let igualdad = false;                           //Varible booleana para informar la encriptación.
        for(let i=0; i<texto.length; i++){              //Bucle para recorrer el texto del input letra por letra.
            for(let j=0; j<encriptar.length; j++){      //Bucle para recorrer el array con las vocales.
                if(texto[i] == encriptar[j]){           //Condicional para cambio de carácteres.
                    encrypt=encrypt+desincriptar[j];
                    igualdad=true;                      //Hubo encriptación.
                }else{}
            }
            if(igualdad==false){                        //Condicional para ir copiando caracteres que no se encriptan.
                    encrypt=encrypt+texto[i];                   
            }else{}
            igualdad=false;                               
        }
        showResult(texto);
        showText(encrypt);
    }
}

function decryptText(){
    let inputText = document.querySelector("#texto");       //Seleccionar el input.
    let texto = inputText.value;                            //Capturar texto del input.    
    if(texto==""){
        showResult(texto);
    }else{
        for(let i=0; i<encriptar.length; i++){              //Bucle para recorrer el array con las vocales.
            texto = texto.replaceAll(desincriptar[i],encriptar[i]);
        }
        showResult(texto);                       
        showText(texto);
    }
}

function showText(texto){
    let inputText = document.querySelector("#vista");
    inputText.value = texto;                           //Mostrar texto en la web.
    inputText.focus();
}

function copyText(){
    let inputText = document.querySelector("#vista");
    let inputVista = document.querySelector("#texto");
    inputText.select();
    document.execCommand("copy");
    inputVista.select();
}

function showResult(texto){
    let a = document.getElementById("part1");
    let b = document.getElementById("part2");
    let c = document.getElementById("part3");
    let d = document.getElementById("part4");
    let e = document.getElementById("man");

    if((c.style.display==='none') && (d.style.display==='none') && (texto!="")) {
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'block';
        d.style.display = 'block';
    }else if((c.style.display==='none') && (d.style.display==='none') && (texto=="")){
        d.style.display = 'none';
        c.style.display = 'none';
        a.style.display = 'block';
        b.style.display = 'block';
        e.style.padding = '5px';
        e.style.padding = '0px';
    }else if((c.style.display==='block') && (d.style.display==='block') && (texto=="")){
        d.style.display = 'none';
        c.style.display = 'none';
        a.style.display = 'block';
        b.style.display = 'block';
        e.style.padding = '5px';
        e.style.padding = '0px';
    }
}

const encriptar      = ["a", "e", "i", "o", "u"];						// Array con los valores que sufriran cambios.
const desincriptar   = ["ai", "enter", "imes", "ober", "ufat"];	        // Array con los valores que sufrirarn cambios.
