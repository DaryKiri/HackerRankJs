/* Interaccion para la calculadora en binario */
/*    <div id="res">
      <button id="btn0" class="buttons">0</button>
      <button id="btn1" class="buttons">1</button>
      <button id="btnClr" class="buttons">C</button>
      <button id="btnEql" class="buttons">=</button>
      <button id="btnSum" class="buttons">+</button>
      <button id="btnSub" class="buttons">-</button>
      <button id="btnMul" class="buttons">*</button>
      <button id="btnDiv" class="buttons">/</button> */

/* Guardamos en una variable cada elemento boton para despues asignarle un event listener */
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var a = [];
var b = [];
var second = false;
var op = "";
var res = document.getElementById("res");
var pos = 0;

/* Funciones de funcionamiento */

//Funcion que construye los numeros y muestra en pantalla
function number(n){
  var innerRes = res.innerHTML;
  //Comprobar si estamos construyendo el primer op o segundo op
  if(!second){
    a.push(Number(n));
    res.innerHTML = innerRes + n;
  }else{
    b.push(Number(n));
    res.innerHTML = innerRes + n;
  }
  ++pos;
}

//Funcion que limpia el contenedor del cuadro de resultado
function clear(){
  res.innerHTML = "";
  a = [];
  b = [];
  pos = 0;
  second = false;
}

//Funcion para obtener el numero en decimal
function numero(n){
  var j = 0;
  var sal = 0;
  var i;
  var z = 0;
  for(i = n.length-1; i >= j; --i){
    sal = sal + Math.pow(2,i)*n[z];
    ++z;
  }
  return sal;
}

//Funciones de suma, resta, multiplicacion y division
function suma(){
  var x = numero(a);
  var y = numero(b);
  var intRes = x+y;
  var divid;
  var rest;
  var coc;
  var result = "";
  if(intRes < 0){
    intRes = intRes * -1;
  }
  //Convertir el resultado en binario
  do{
    divid = intRes;
    rest = divid % 2;
    coc = Math.floor(divid / 2);
    intRes = coc;
    result = rest + result;
  }while(coc != 0);

  return result;
}

function resta(){
  var x = numero(a);
  var y = numero(b);
  var intRes = x-y;
  var divid;
  var rest;
  var coc;
  var result = "";
  if(intRes < 0){
    intRes = intRes * -1;
  }
  //Convertir el resultado en binario
  do{
    divid = intRes;
    rest = divid % 2;
    coc = Math.floor(divid / 2);
    intRes = coc;
    result = rest + result;
  }while(coc != 0);

  return result;
}

function multiplica(){
  var x = numero(a);
  var y = numero(b);
  var intRes = x*y;
  var divid;
  var rest;
  var coc;
  var result = "";
  if(intRes < 0){
    intRes = intRes * -1;
  }
  //Convertir el resultado en binario
  do{
    divid = intRes;
    rest = divid % 2;
    coc = Math.floor(divid / 2);
    intRes = coc;
    result = rest + result;
  }while(coc != 0);

  return result;
}

function divide(){
  var x = numero(a);
  var y = numero(b);
  var intRes = Math.floor(x/y);
  var divid;
  var rest;
  var coc;
  var result = "";
  if(intRes < 0){
    intRes = intRes * -1;
  }
  //Convertir el resultado en binario
  do{
    divid = intRes;
    rest = divid % 2;
    coc = Math.floor(divid / 2);
    intRes = coc;
    result = rest + result;
  }while(coc != 0);

  return result;
}


// Funcion que muestra el resultado y pasa el resultado a binario
function result(){
  switch(op){
    case "+":
      res.innerHTML = suma();
      break;
    case "-":
      res.innerHTML = resta();
      break;
    case "*":
      res.innerHTML = multiplica();
      break;
    case "/":
      res.innerHTML = divide();
      break;
    default:
      res.innerHTML = numero(a);
      break;
  }
  a = [];
  b = [];
  pos = 0;
  op = "";
}



/* Anadir event listeners */
btn0.addEventListener("click",function(){
  number(0);
});
btn1.addEventListener("click",function(){
  number(1);
});
btnClr.addEventListener('click',function(){
  clear();
});
btnEql.addEventListener('click',function(){
  result();
});
btnSum.addEventListener('click',function(){
  op = this.innerHTML;
  second = true;
  pos = 0;
  var innerRes = res.innerHTML;
  res.innerHTML = innerRes + op;
});
btnSub.addEventListener('click',function(){
  op = this.innerHTML;
  second = true;
  pos = 0;
  var innerRes = res.innerHTML;
  res.innerHTML = innerRes + op;
});
btnMul.addEventListener('click',function(){
  op = this.innerHTML;
  second = true;
  pos = 0;
  var innerRes = res.innerHTML;
  res.innerHTML = innerRes + op;
});
btnDiv.addEventListener('click',function(){
  op = this.innerHTML;
  second = true;
  pos = 0;
  var innerRes = res.innerHTML;
  res.innerHTML = innerRes + op;
});
