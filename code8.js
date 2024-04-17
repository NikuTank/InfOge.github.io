function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let A = 0;
let B = 0;
let C = 0;
function Task_8(){
    const poet = ["Пушкин", "Чехов", "Толстой", "Лермонтов", "Есенин", "Гоголь", "Маяковский"];
    let a = Math.floor(Math.random() * poet.length);
    let b = Math.floor(Math.random() * poet.length);
    // // let c = a+"|"+b;
    while (a === b) {
        b = Math.floor(Math.random() * poet.length);}
    a = poet[a];
    b = poet[b];
    A = getRandomInt(5,40);
    B = getRandomInt(5,40);
    if(A<B){
         let min = A;
    }else{
         let min = B;
    }
    // let a = "Пушкин";
    // let b = "Толстой";
    let c = a+"|"+b;
    A = A * 100;
    B = B * 100;
    min = min * 100;
    C = getRandomInt(2,(min-2));
    Condition = "В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И»  — символ «&». <br> В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет."
    document.getElementById("Part_3").innerHTML = Condition;
    document.getElementById("1t").innerHTML = a;
    document.getElementById("2t").innerHTML = b;
    document.getElementById("3t").innerHTML = c;
    document.getElementById("1").innerHTML = A;
    document.getElementById("2").innerHTML = B;
    document.getElementById("3").innerHTML = C;
    // document.getElementById("Otvet").innerHTML = A;
}
function Answer() {
    if (document.getElementById("InpOtvet").value == document.getElementById('Otvet').innerHTML) {
        YesNo.textContent = "Верно";
        YesNo.classList.remove('incorrect');
        YesNo.classList.add('correct');
    } else if (document.getElementById("InpOtvet").value == "") {
        YesNo.textContent = "Необходимо ввести ответ";
        YesNo.classList.remove('correct');
        YesNo.classList.add('incorrect');
    } else {
        YesNo.textContent = "Неверно";
        YesNo.classList.remove('correct');
        YesNo.classList.add('incorrect');
    }
}
