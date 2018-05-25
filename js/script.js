/*
var a, b;
a = 5;
b = 10;
var array = [1,10,5,20,a,b,a+b,,3,5];
var array2 = ['hello','world',2,3,4,true];
var array3 = [,,];
var array4 = new Array(10,23,34,45,'hello');
var array5 = new Array(5);

array[1] = 'new';
array['one'] = 'hello world';
document.write(array['one']);*/

var a = [1,2,'hello',4,56,234,456];

for (var i = 0; i < a.length; i++) {
    document.write(a[i] + '<br>');
}

document.write("<hr>");

for (var index in a) {
    document.write(a[index] + '<br>');
}

document.write("<hr>");

var array10 = ['мандарин','апельсин','груша','банан'];
document.write(array10.join('|'));

document.write("<hr>");

array10.reverse();

document.write(array10);

document.write("<hr>");

array10.sort();
document.write(array10);

document.write("<hr>");

var array11 = [100, 200, 1,2,11,111,22,222,3,4,5];
array11.sort(
    function (a,b) {
       if (a < b) {
           return -1;
       }
       if (a > b) {
           return 1;
       }
       return 0;
    }
);
document.write(array11);

document.write("<hr>");

var arr = ['a', 'b', 'c'];
var a = arr.concat('d', 'e', 'f');
document.write(a);

document.write("<hr>");

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

document.write(arr2.slice(2));

document.write("<hr>");

var arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
//arr3.splice(2);
arr3.splice(2,3,'hello','world',34,56);
document.write(arr3);

document.write("<hr>");

var arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
arr4.push(1,2,3);
arr4.pop();
document.write(arr4);

document.write("<hr>");

var arr5 = ['a', 'b', 'c', 'd', 'e', 'f'];
arr5.unshift(1);
arr5.shift();
document.write(arr5);

document.write("<hr>");

var arr6 = ['a', 'b', 'c', 'd', 'e', 'f'];
delete arr6[1];
document.write(arr6);