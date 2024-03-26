function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Task_2(){
    const Letter = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э","Ю","Я"];
    let a = getRandomInt(0,32);
    let b = getRandomInt(0,32);
    let c = getRandomInt(0,32);
    let d = getRandomInt(0,32);
    let e = getRandomInt(0,32);
    let f = getRandomInt(0,32);
    let A = Letter[a];
    let B = Letter[b];
    let C = Letter[c];
    let D = Letter[d];
    let E = Letter[e];
    let F = Letter[f];
    
}