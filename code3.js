function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Select() {
    var select = document.getElementById("choice");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "1") {
        Task1_3();
    }
    if (selectedValue === "2") {
        Task2_3();
    }
    if (selectedValue === "3") {
        Task3_3();
    }
}
let Net = '';
let Net2 = '';
let A = 0;
let B = 0;
let Rnd = 0;
let Btext = "";
let Atext = "";
let Cond = 0;
let Otvet = 0;
function Task3_3(){
    Otvet = getRandomInt(1,90)
    Cond = getRandomInt(0,3)
    let No = 1
    const Condd = [">","<",">=","<="]
    Atext = Condd[Cond] 
    if (Cond == 0 && No == 1){
        Rnd = getRandomInt(1,2);
        A = Otvet - 1;
        if (Rnd = 1){
            Btext = "<";
            B = Otvet + 1;
        }else{
            Btext = "<=";
            B = Otvet;
        }
    }
    if (Cond == 1 && No == 1){
        Rnd = getRandomInt(1,2);
        A = Otvet + 1;
        if (Rnd = 1){
            Btext = ">";
            B = Otvet - 1;
        }else{
            Btext = ">=";
            B = Otvet;
        }
    }
    if (Cond == 2 && No == 1){
        A = Otvet;
        Btext = "<"
        B = Otvet + 1
    }
    if (Cond == 3 && No == 1){
        A = Otvet;
        Btext = ">"
        B = Otvet - 1
    }
    let TextCond = "(X"+Atext+A+") <b>И</b> (X"+Btext+B+")";
    document.getElementById("Part_3").innerHTML = "Напишите число X, для которого истинно высказывание:";
    document.getElementById("Rezult3").innerHTML = TextCond;
    document.getElementById("Otvet").innerHTML = Otvet;
}
function Task1_3(){
    Otvet = getRandomInt(20,90)
    Cond = getRandomInt(0,3)
    let No = 1
    const Condd = [">","<",">=","<="]
    Atext = Condd[Cond] 
    if (Cond == 0 && No == 1){
        Rnd = getRandomInt(1,2);
        A = getRandomInt(2,Otvet-4);
        if (Rnd = 1){
            Btext = "<";
            B = Otvet + 1;
        }else{
            Btext = "<=";
            B = Otvet;
        }
    }
    if (Cond == 1 && No == 1){
        Rnd = getRandomInt(1,2);
        A = Otvet + 1;
        if (Rnd = 1){
            Btext = ">";
            B = getRandomInt(2,Otvet-4);
        }else{
            Btext = ">=";
            B = Otvet;
        }
    }
    if (Cond == 2 && No == 1){
        Rnd = getRandomInt(1,2);
        A = getRandomInt(2,Otvet-4);
        if (Rnd = 1){
            Btext = "<";
            B = Otvet + 1;
        }else{
            Btext = "<=";
            B = Otvet;
        }
    }
    if (Cond == 3 && No == 1){
        Rnd = getRandomInt(1,2);
        A = Otvet;
        if (Rnd = 1){
            Btext = ">";
            B = getRandomInt(2,Otvet-4);
        }else{
            Btext = ">=";
            B = getRandomInt(2,Otvet-4);
        }
    }
    let TextCond = "(X"+Atext+A+") <b>И</b> (X"+Btext+B+")";
    document.getElementById("Part_3").innerHTML = "Напишите число X, для которого истинно высказывание:";
    document.getElementById("Rezult3").innerHTML = TextCond;
    document.getElementById("Otvet").innerHTML = Otvet;
}
function Task2_3(){
    let Bt = 0;
    Atext = "";
    Btext = "";
    Net = "";
    Net2 = "";
    Otvet = getRandomInt(20,90);
    Cond = getRandomInt(0,3);
    const Condd = ["&lt","&gt","&lt=","&gt="];
    Atext = Condd[Cond];
    if (Cond == 0){
        Rnd = getRandomInt(1,2);
        A = Otvet - 1;
        if (Rnd == 1){
            Bt = 1;
            B = getRandomInt((Otvet+4),99);
        }else{
            Bt = 3;
            B = getRandomInt((Otvet+4),99);
        }
    }
    if (Cond == 1){
        Rnd = getRandomInt(1,2);
        A = getRandomInt((Otvet+4),99);
        if (Rnd == 1){
            Bt = 0;
            B = Otvet - 1
        }else{
            Bt = 2;
            B = Otvet;
        }
    }
    if (Cond == 2){
        Rnd = getRandomInt(1,2);
        A = Otvet;
        if (Rnd == 1){
            Bt = 1;
            B = getRandomInt((Otvet+4),99);
        }else{
            Bt = 3;
            B = getRandomInt((Otvet+4),99);
        }
    }
    if (Cond == 3){
        Rnd = getRandomInt(1,2);
        A = getRandomInt((Otvet+4),99);
        if (Rnd == 1){
            Bt = 0;
            B = Otvet - 1;
        }else{
            Bt = 2;
            B = Otvet;
        }
    }
    Btext = Condd[Bt];
    Rnd = getRandomInt(1,2);
    if(Rnd == 2){
        Rnd = getRandomInt(1,2);
        if(Rnd == 1){
            Net = "<b>НЕ</b> ";
            if(Cond == 0){Atext = Condd[3]}
            if(Cond == 1){Atext = Condd[2]}
            if(Cond == 2){Atext = Condd[1]}
            if(Cond == 3){Atext = Condd[0]}
        }else{
            Net2 = "<b>НЕ</b> ";
            if(Bt == 0){Btext = Condd[3]}
            if(Bt == 1){Btext = Condd[2]}
            if(Bt == 2){Btext = Condd[1]}
            if(Bt == 3){Btext = Condd[0]}
        }
    }else{
        Net = "";
        Net2 = "";
    }
    // Atext = "<pre>"+Atext+"</pre>"
    // Btext = "<pre>"+Btext+"</pre>"
    let TextCond = Net2+"(X"+Atext+A+") <b>И</b> "+Net+"(X"+Btext+B+")";
    document.getElementById("Part_3").innerHTML = "Напишите число X, для которого истинно высказывание:";
    document.getElementById("Rezult3").innerHTML = TextCond;
    document.getElementById("Otvet").innerHTML = Otvet
}
