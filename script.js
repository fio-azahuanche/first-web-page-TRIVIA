 function jugar(){
    let usuario = document.getElementById("nombreUsuario").value;

    document.getElementById("saludo").innerHTML="¡Hola " + usuario+"! Bienvenidx a la TRIVIA escoge un tema para jugar";

    document.getElementById("saludoEntrada").style.display='block';
    
    document.getElementById("bienvenida").style.display='none';
}

function jugarTema(e){
    if(e==="tema1"){
        document.getElementById("preguntasTema1").style.display='block';
        document.getElementById("saludoEntrada").style.display='none';
    }
    else{
        document.getElementById("preguntasTema2").style.display='block';
        document.getElementById("saludoEntrada").style.display='none';
    }
}

function resultados(){
    let correctas1=0;

    if(piura.checked==true){
     alert("La primera es correcta ganaste 10 puntos!") 
     correctas1=correctas1+10;  
    }else {
      if(piura.checked==false){
        alert("La primera es incorrecta perdiste 2 puntos :(")
        correctas1=correctas1-2;
        }
    }

    if(piuraTumbes.checked==true){
        alert("La segunda es correcta ganaste 10 puntos!")
        correctas1=correctas1+10;
    }else{
      if(piuraTumbes.checked==false){
        alert("La segunda es incorrecta perdiste 2 puntos :(")
        correctas1=correctas1-2;
        }  
    }

    if(todasLasAnteriores.checked==true){
        alert("La tercera es correcta ganaste 10 puntos!")
        correctas1=correctas1+10;
    }else{
      if(todasLasAnteriores.checked==false){
        alert("La tercera es incorrecta perdiste 2 puntos :(")
        correctas1=correctas1-2;
        }
    }
  document.getElementById("resultadoFinal1").innerHTML="Obtuviste un puntaje de " + correctas1 +" de 30.";  
  document.getElementById("resultados_1").style.display='block'; 
  document.getElementById("preguntasTema1").style.display='none';  
}

function resultado(){
  let correctas2=0;
   
   if(arequipa.checked==true){
     alert("La primera es correcta ganaste 10 puntos!")   
     correctas2=correctas2+10; 
    }else {
      if(arequipa.checked==false){
        alert("La primera es incorrecta perdiste 2 puntos :(")
        correctas2=correctas2-2;
        }
    }

    if(oceanoPacifico.checked==true){
        alert("La segunda es correcta ganaste 10 puntos!")
        correctas2=correctas2+10; 
    }else{
      if(oceanoPacifico.checked==false){
        alert("La segunda es incorrecta perdiste 2 puntos :(")
        correctas2=correctas2-2;
        }  
    }

    if(cordilleraAndes.checked==true){
        alert("La tercera es correcta ganaste 10 puntos!")
        correctas2=correctas2+10; 
    }else{
      if(cordilleraAndes.checked==false){
        alert("La tercera es incorrecta perdiste 2 puntos :(")
        correctas2=correctas2-2;
        }
    }
  document.getElementById("resultadoFinal2").innerHTML="Obtuviste un puntaje de " + correctas2+" de 30.";
  document.getElementById("resultados_2").style.display='block';
  document.getElementById("preguntasTema2").style.display='none'; 
}