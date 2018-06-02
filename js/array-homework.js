/* Создать многомерный массив, содержащий в себе таблицу умножения. При вызове он возвращает результат умножения */

var multiplicationTable = new Array(10);

for (var i = 0; i < multiplicationTable.length; i++) {
    multiplicationTable[i] = new Array(10);
}

for (var j = 0; j < multiplicationTable.length; j++) {
    for (var n = 0; n < multiplicationTable[j].length; n++) {
        multiplicationTable[j][n] = j*n;
    }
}

document.write("<hr>");

document.write(multiplicationTable[4][8]);