function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let A = 0
let B = 0
function Task_8(){
    // const poet = ["Пушкин", "Чехов", "Толстой", "Лермонтов", "Есенин", "Гоголь", "Маяковский"];
    // let a = Math.floor(Math.random() * poet.length);
    // let b = Math.floor(Math.random() * poet.length);
    // // let c = a+"|"+b;
    // while (a === b) {
    // randomIndex2 = Math.floor(Math.random() * poet.length);
    A = getRandomInt(100,4000);
    B = getRandomInt(100,4000);
    A = getRandomInt(100,4000);
    Condition = "В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И»  — символ «&». <br> В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет."
    // document.getElementById("Part_3").innerHTML = Condition;
    // document.getElementById("1t").innerHTML = a;
    // document.getElementById("2t").innerHTML = b;
    // document.getElementById("3t").innerHTML = c;
    document.getElementById("2").innerHTML = B;
    // document.getElementById("3").innerHTML = C;
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
