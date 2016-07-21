// 2016 07 20 miércoles 
//fondo verde 
// funcion setup se ejecuta una vez al principio

//Para usar la variable se debe declarar con var  ejemplo: var algo


var diametro;
// solo despues de declarar la variable podemos asignar un valor
 diametro = 50;
 
 // hay 2 tipo de variables las  locales (viven dentro de una funcion )y 
 //las globales (viven fuera de una funcion)
 // las funciones se declaran con function nombre de la funcion {}
 function nombreFuncion()
 {
   
 }


function setup() {
  // crea el lienzo (dim horizontal, dim vertical)
  createCanvas(400, 300);
  background(0, 255, 0);
}

// se ejecuta 60 veces por segundo despues de setup
function draw() {
  
  //ancho del borde variable local
  //var anchoBorde;
  //anchoBorde = 10;
  
  var anchoBorde =10;
  // sin estela cuando muevo el mouse 
    background(0, 255, 0);
  estilo1();
  
  //elipse (posX posY width heightmedidas en pixeles)
  ellipse(mouseX, mouseY, diametro, diametro);
  //asignacion nueva a la variable global
  diametro = diametro + 1;
  ellipse(100, 200, 20, 20);

}

//declaracion de funcion de estilos de elipse
function estilo1()
{

  // sin estela cuando muevo el mouse 
    background(0, 255, 0);
  //lo deja vacio
  //noFill()
  fill(210, 20, 10);
  
  //definir tamaño de borde
  //strikeWeight la cantidad de pixeles 
  strokeWeight(5);
  
  //color del borde
  stroke(20, 100, 20)
  
  
}