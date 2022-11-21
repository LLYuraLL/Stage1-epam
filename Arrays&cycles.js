//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const ArrayOfNames = ['Die Hard', 'Jaws', 'Rango', 'Starwars', 'Pirates of the Caribean', 'Cars', 'Lord of the rings'];
for(let key in ArrayOfNames){
    console.log(ArrayOfNames[key])
}
//Given an array of car manufacturers, convert the array to a string and back to an array
const CarManufacturers = ['Toyota', 'Volkswagen', 'Daimler', 'Ford', 'Honda', 'Fiat'];
let CarManufacturersStr = '';
for(let i in CarManufacturers){
    CarManufacturersStr = CarManufacturersStr.concat(" ", CarManufacturers[i]);
}
console.log(CarManufacturersStr);
let CarManufacturersArr = CarManufacturersStr.split(' ');
console.log(CarManufacturersArr);
//Given an array of the names of your friends, add the words hello to each element of the array
let NamesOfFriends = ['Vanya', 'Dima', 'Petya', 'Kolya', 'Grisha', 'Taras'];
for(let i in NamesOfFriends){
    NamesOfFriends[i] = 'hello '.concat(' ',NamesOfFriends[i])
}
console.log(NamesOfFriends)
//Convert numeric array to Boolean
let NumArr = [14,25,144,0,1,12,0,-15,4];
console.log(NumArr);
for(let i in NumArr){
    NumArr[i] = Boolean(NumArr[i]);
}
console.log(NumArr);
//Sort the array [1,6,7,8,3,4,5,6] in descending order
let ArrayOfNum = [1,6,7,8,3,4,5,6];
let i = ArrayOfNum.length;
for(let l = 0; l < ArrayOfNum.length; l++){
    while(i >= 0){
        if(ArrayOfNum[i]>ArrayOfNum[i-1]){
            ArrayOfNum[i] = ArrayOfNum[i] + ArrayOfNum[i-1];
            ArrayOfNum[i-1] = ArrayOfNum[i]-ArrayOfNum[i-1];
            ArrayOfNum[i] = ArrayOfNum[i] - ArrayOfNum[i-1];
            
        }
        i--;
    }
    i = ArrayOfNum.length;
}
console.log(ArrayOfNum);
//Filter array [1,6,7,8,3,4,5,6] by value> 3
ArrayOfNum = [1,6,7,8,3,4,5,6];
i = 0;
let j = 0;
while(i <= ArrayOfNum.length){
    if(ArrayOfNum[i]<=3){
        j = i;
        while(j<ArrayOfNum.length){
            ArrayOfNum[j] = ArrayOfNum[j+1];
            j++;
        }
        ArrayOfNum.pop();
    }
    i++;
}
console.log(ArrayOfNum);
//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function IndexInArr(array,number){
    for(let i in array){
        if(array[i] == number){
            return i;
        }
    }
    return "No such number in array";
}
let array = [1,6,7,8,3,4,5,6];
let numb = 8;
console.log(IndexInArr(array,numb));
numb = 6;
console.log(IndexInArr(array,numb));
numb = 10;
console.log(IndexInArr(array,numb));
//Implement a loop that will print the number 'a' until it is less than 10
i = 20;
while(i >= 10){
    console.log('a');
    i--;
}
//Implement a loop that prints prime numbers to the console
i = 0;
j = 1;
while(i < 199){
    if(j == 1){
        console.log(2);
        console.log(3);
    }
    i = 6*j-1;
    console.log(i);
    i = 6*j+1;
    console.log(i);
    
    j++;
}
//Implement a loop that prints odd numbers to the console
i = 0;
while(i <= 200){
    if(i%2 != 0){
        console.log(i);
    }
    i++;
}