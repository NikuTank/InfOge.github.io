function checkSelect() {
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
function teest() {
    var Text1 = 0;
    var TextB = 0;
    var alfa = 0;
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
    Task_5();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getP() {
        p1 = 0;
        p2 = 0;
        p3 = 0;
        p4 = 0;
        p5 = 0;
        while (((p1 + p2 + p3 + p4 + p5) < 7) || ((p1 + p2 + p3 + p4 + p5) >= 9)) {
            p1 = getRandomInt(1, 2);
            p2 = getRandomInt(1, 2);
            p3 = getRandomInt(1, 2);
            p4 = getRandomInt(1, 2);
            p5 = getRandomInt(1, 2);
        }
        return "" + p1 + p2 + p3 + p4 + p5;
    }
    function Task_5() {
        const CondMass = ["Прибавь", "Вычти", "Умножь на", "Раздели на"];
        const CondText = ["увеличивает", "уменьшает", "умножает", "делит"];
        genB = getRandomInt(0, 3);
        actB = CondMass[genB];
        TextB = CondText[genB];
        gen1 = genB;
        while (gen1 == genB) {
            if (genB == 1 || genB == 2) {
                gen1 = getRandomInt(2, 3);
            } else {
                gen1 = getRandomInt(0, 1);
            }
            act1 = CondMass[gen1];
            Text1 = CondText[gen1];
            if (genB >= 3) {
                b = getRandomInt(2, 5);
            } else {
                b = getRandomInt(2, 14);
            }
            if (gen1 >= 3) {
                n = getRandomInt(2, 5);
            } else {
                n = getRandomInt(2, 14);
            }
        }
        numPrint = getRandomInt(1, 2);
        D = getP();
        Primer = getRandomInt(1, 8);
        Prim = Primer;
        alfa = getRandomInt(1, 3)
        if (alfa == 1) alfa = "Альфа";
        if (alfa == 2) alfa = "Бета";
        if (alfa == 3) alfa = "Омега";
        First = "У исполнителя " + alfa + " две команды, которым присвоены номера:"
        document.getElementById("Part_1").innerHTML = First;
        // document.getElementById("Rezult").innerHTML = "Тест"
    }
    // Task_5()
    function decod(digit) {
        if (numPrint === 1) {
            if (digit === "1") {
                if (genB == 0) Primer = Primer + b;
                if (genB == 1) Primer = Primer - b;
                if (genB == 2) Primer = Primer * b;
                if (genB == 3) Primer = Primer / b;
            } else {
                if (gen1 == 0) Primer = Primer + n;
                if (gen1 == 1) Primer = Primer - n;
                if (gen1 == 2) Primer = Primer * n;
                if (gen1 == 3) Primer = Primer / n;
            }
        } else {
            if (digit === "2") {
                if (genB == 0) Primer = Primer + b;
                if (genB == 1) Primer = Primer - b;
                if (genB == 2) Primer = Primer * b;
                if (genB == 3) Primer = Primer / b;
            }
            if (digit === "1") {
                if (gen1 == 0) Primer = Primer + n;
                if (gen1 == 1) Primer = Primer - n;
                if (gen1 == 2) Primer = Primer * n;
                if (gen1 == 3) Primer = Primer / n;
            }
        }
    }
    var digit = 0;
    var rez = 0
    //     for (let i = 0; i < 5;){
    //         digit = D[i];
    //         decod(digit);
    //         if (Primer % 1 === 0 && Primer > 0 && Primer < 100){
    //             //console.log(Primer, i, digit, D, b, n, numPrint, gen1);
    //             i = i + 1
    //         }else{
    //             i = 0;
    //             Task_5();

    //         }
    //     }
    // console.log(Prim, Primer, b);
    // console.log(D);
    //  if (numPrint == 1){
    //     console.log("1.", actB, "b","\n2.", act1, n);
    //  }else{
    //     console.log("1.", act1, n,"\n2.", actB, "b");
    //  }
    for (let i = 0; i < 5;) {
        digit = D[i];
        decod(digit);
        if (Primer % 1 === 0 && Primer > 0 && Primer < 200 && Prim != Primer) {
            //console.log(Primer, i, digit, D, b, n, numPrint, gen1);
            i = i + 1
        } else {
            i = 0;
            Task_5();

        }
    }
    if (numPrint == 1) {
        var Condition_1 = "1. " + actB + " b <br> 2. " + act1 + " " + n;
        document.getElementById("Rezult").innerHTML = Condition_1;
        var second = "(b - неизвестное натуральное число) Выполняя первую из них, " + alfa + " " + TextB + " число на экране на b, а выполняя вторую, " + Text1 + " это число на " + n + ". Программа для исполнителя " + alfa + " - это последовательность номеров команд. " + "Известно что программа " + D + " переводит число " + Prim + " в число " + Primer + ". Определите значение b";
        document.getElementById("Part_2").innerHTML = second;
    } else {
        var Condition_2 = "1. " + act1 + " " + n + "<br> 2. " + actB + " b";
        document.getElementById("Rezult").innerHTML = Condition_2;
        var second = "(b - неизвестное натуральное число) Выполняя первую из них, " + alfa + " " + Text1 + " число на экране на " + n + ", а выполняя вторую," + TextB + "это число на b. Программа для исполнителя " + alfa + " - это последовательность номеров команд. " + "Известно что программа " + D + " переводит число " + Prim + " в число " + Primer + ". Определите значение b";
        document.getElementById("Part_2").innerHTML = second;
    }
    document.getElementById("Otvet").innerHTML = b
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