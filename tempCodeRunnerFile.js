function checkSelect(){
    var select = document.getElementById("Result");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "5") {
        window.location.href = "tasks.html";
    } else {
        if (selectedValue === "0") {
            document.getElementById("Number").innerHTML = "Вы ещё не выбрали номер задания";
        } else {
            document.getElementById("Number").innerHTML = "Генерация данного задания пока не доступна";
        }
    }
    
}
var actB = 0;
var act1 = 0;
var gen1 = 0;
var genB = 0;
var b = 0;
var n = 0
var numPrint = 0;
var D;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var p5 = 0;
var Prim = 0;
var Primer = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; }
    function getP(){
        p1 = 0;
        p2 = 0;
        p3 = 0;
        p4 = 0;
        p5 = 0;
        while (((p1+p2+p3+p4+p5) < 7) || ((p1+p2+p3+p4+p5) >= 9)){
        p1 = getRandomInt(1, 2);
        p2 = getRandomInt(1, 2);
        p3 = getRandomInt(1, 2);
        p4 = getRandomInt(1, 2);
        p5 = getRandomInt(1, 2);}
        return "" + p1 + p2 + p3 + p4 + p5;
        }
    function Task_5(){
  genB = getRandomInt(1, 4)
  if (genB == 1) actB = "прибавь";
  if (genB == 2) actB = "вычти";
  if (genB == 3) actB = "умножь на";
  if (genB == 4) actB = "раздели на";
  if(genB == 1 || genB == 2){
    gen1 = getRandomInt(3, 4);
    }else{
    gen1 = getRandomInt(1, 2);
    }
  if (gen1 == 1) act1 = "прибавь";
  if (gen1 == 2) act1 = "вычти";
  if (gen1 == 3) act1 = "умножь на";
  if (gen1 == 4) act1 = "раздели на";
  if (genB >= 3){
    b = getRandomInt(2,5);
  }else{
    b = getRandomInt(1,12);
  }
  if (gen1 >= 3){
    n = getRandomInt(2,5);
  }else{
    n = getRandomInt(1,12);
  }
  numPrint = 1
D = getP();
Primer = getRandomInt(1,8);
Prim = Primer;
console.log(D);
    }
    Task_5()
function decod(digit){
    if (numPrint === 1){
        if (digit === "1"){
            if (genB == 1) Primer = Primer + b;
            if (genB == 2) Primer = Primer - b;
            if (genB == 3) Primer = Primer * b;
            if (genB == 4) Primer = Primer / b;
            }else{
            if (gen1 == 1) Primer = Primer + n;
            if (gen1 == 2) Primer = Primer - n;
            if (gen1 == 3) Primer = Primer * n;
            if (gen1 == 4) Primer = Primer / n;
            }
    }else{
        if (digit === "2"){
            if (genB == 1) Primer = Primer + b;
            if (genB == 2) Primer = Primer - b;
            if (genB == 3) Primer = Primer * b;
            if (genB == 4) Primer = Primer / b;
            }
        if (digit === "1"){
            if (gen1 == 1) Primer = Primer + n;
            if (gen1 == 2) Primer = Primer - n;
            if (gen1 == 3) Primer = Primer * n;
            if (gen1 == 4) Primer = Primer / n;
            }
     }
    }
    var digit = 0;
    var rez = 0
    for (let i = 0; i < 5;){
        digit = D[i];
        decod(digit);
        if (Primer % 1 === 0 && Primer > 0 && Primer < 100){
            //console.log(Primer, i, digit, D, b, n, numPrint, gen1);
            i = i + 1
        }else{
            i = 0;
            Task_5();
            
        }
    }
console.log(Prim, Primer, b);
console.log(D);
 if (numPrint == 1){
    console.log("1.", actB, "b","\n2.", act1, n);
 }else{
    console.log("1.", act1, n,"\n2.", actB, "b");
 }
 for (let i = 0; i < 5;){
    digit = D[i];
    decod(digit);
    if (Primer % 1 === 0 && Primer > 0 && Primer < 100){
        //console.log(Primer, i, digit, D, b, n, numPrint, gen1);
        i = i + 1
    }else{
        i = 0;
        Task_5();
        
    }
 }
if (numPrint == 1){
    console.log("1.", actB, "b","\n2.", act1, n);
}else{
   console.log("1.", act1, n,"\n2.", actB, "b");
}