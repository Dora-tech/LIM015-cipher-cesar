const cipher = {
  // ...
  //funcion de cifrar
  cifrar(nombre,pos){
    let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let posexc=0;
    let cifra={};
    let mensajecifrado="";
    // nombre= prompt("escribe tu palabra: ");
    // pos=+prompt("Ingrese tu nro de desplazamiento: ");
/*     
     console.log(typeof nombre);
     console.log(typeof pos); */
    
    console.log(nombre);
    console.log(pos);
    
    console.log(abc.length);
    
    // for(let j=0;j<nombre.length;j++){
    //     cifra[j]=nombre[j];
    //     console.log(cifra[j]);
       
    // }
    for(let j=0;j<nombre.length;j++){
      for(let i=0; i<26; i++){
    
        if(nombre[j]==abc[i]){
            if(i+pos+1>abc.length){
                posexc=(i+pos+1)%abc.length-1;
                cifra[j]=abc[posexc];
            }else{
                cifra[j]=abc[i+pos];
            }
        }
      }   
     }
    for(let j=0;j<nombre.length;j++){
        console.log(cifra[j]);
        mensajecifrado=mensajecifrado+cifra[j]
    }
    return mensajecifrado;
  },
  //funcion de descifrar
  descifrar(nombre,pos){
    let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let posexc=0;
    let cifra={};
    let mensajedescifrado="";
    // nombre= prompt("escribe tu palabra: ");
    // pos=+prompt("Ingrese tu nro de desplazamiento: ");
/*     
     console.log(typeof nombre);
     console.log(typeof pos); */
    
    console.log(nombre);
    console.log(pos);
    
    console.log(abc.length);
    
   
    for(let j=0;j<nombre.length;j++){
      for(let i=0; i<26; i++){
    
        if(nombre[j]==abc[i]){
            if(i-pos<0){
                posexc=(i-pos+1)%abc.length-1;
                cifra[j]=abc[abc.length+posexc];
            }else{
                cifra[j]=abc[i-pos];
            }
        }
      }   
     }
    for(let j=0;j<nombre.length;j++){
        console.log(cifra[j]);
        mensajedescifrado=mensajedescifrado+cifra[j]
    }
    return mensajedescifrado;
  }
};

export default cipher;
