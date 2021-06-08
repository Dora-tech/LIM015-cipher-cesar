import cipher from './cipher.js';

let btncifrado= document.getElementById("btncifrado").addEventListener("click",micifrado);
let btndescifrado= document.getElementById("btndescifrado").addEventListener("click",midescifrado);
function micifrado(){
    let nombre = document.getElementById("mensaje").value;
    let pos = +document.getElementById("desplazamiento").value;
/*     console.log(cipher.cifrar(nombre,pos)); */
    document.getElementById("resultado").innerHTML=cipher.cifrar(nombre,pos);
}

function midescifrado(){
    let nombre = document.getElementById("mensaje").value;
    let pos = +document.getElementById("desplazamiento").value;
/*     console.log(cipher.cifrar(nombre,pos)); */
    document.getElementById("resultado").innerHTML=cipher.descifrar(nombre,pos);
}
