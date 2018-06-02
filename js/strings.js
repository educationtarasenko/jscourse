/*
    chartAt()
    concat()
    indexOf()
    lastIndexOf()
    split()
    replace()
    substr()
    substring()
    toUpperCase()
    toLowerCase()
    slice()
    search()
    match()
*/

function hr() {
    document.write("<hr>");
}

var a = "hello world 123 world fwefewf wfwe ftgrh hrth";
// var a = new String("hello world");

document.write(a.charAt(7)); // аналогично a[7];

hr();

document.write(a.concat(" liverpool")); // добавление к исходной строке строки, указанной в аргументе. Аналогично +

hr();

document.write(a.indexOf("world")); // поиск первого вхождения подстроки в исходной строке

hr();

document.write(a.lastIndexOf("world")); // поиск последнего вхождения подстроки в исходной строке

hr();

var s = "hello,world,kyiv";
var array = s.split(""); // разбиение строки и возвращение массива

if (Array.isArray(array)) {
    document.write(array);
}

hr();

var b = "hello world 123 world fwefewf wfwe ftgrh hrth";

document.write(b.replace("fwefewf", "liverpool")); // замена первого вхождения подстроки в исходную строчку

hr();

document.write(b.substr(7,5)); // "orld "

hr();

document.write(b.substring(3,7)); // "lo w"

hr();

var c = "hello world 123 world fwefewf wfwe ftgrh hrth";

document.write(c.toUpperCase());

hr();

var d = "LIVERPOOL REAL KYIV 26 MAY";

document.write(d.toLowerCase());

hr();

document.write(d.slice(3,7)); // "ERPO"

hr();

document.write(d.search(/[0-9]/)); // "20" - позиция

hr();

var reg = d.match(/[0-9]+/);
document.write(reg); // "26"