function Ans(){
 window.location.href = "index.html";
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let A = 0
function Task_10(){
    A = getRandomInt(20,180)
    B = A.toString(2)
    Condition = "Переведите двоичное число " + B + " в десятичную систему счисления."
    document.getElementById("Rezult").innerHTML = Condition;
    document.getElementById("Otvet").innerHTML = A
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
