// Write a function (and also the solution flowchart) that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.

var numbers = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numToEng(n){
    if (n < 20) return numbers[n];
    var digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " and " + numToEng(n%100));
    return numToEng(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + numToEng(n%1000): "");
};

numToEng(0);