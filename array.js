// Daniel Davis, array, answers question 1 of the javascript 101 practicum section //

var arr = []; // creates an array to hold 20 values

for (var i=0, i < 20, ++i) { // for loop to generate 20 random numbers
  arr[i] = Math.floor((Math.random() * 200) + 10); // numbers are between 10 and 200
}// end of for loop

print(arr); // prints out the array
