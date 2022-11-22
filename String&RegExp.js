//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const ExapleStr = 'ahb acb aeb aeeb adcb axeb';
const RegEx = /a\wb/g;
console.log(ExapleStr.match(RegEx));
//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const ExampleStr2 = '2 + 3 223 2223';
const RegEx2 = /2 \+ 3/;
console.log(ExampleStr2.match(RegEx2));
//Get the day, month and year of the current date and output it to the console separately
const date = new Date();
let dateStr = date.toDateString();
let dateCut = dateStr.split(' ');
console.log(dateCut[2]);
console.log(dateCut[1]);
console.log(dateCut[3]);