//1. Declare an empty array using JS literal notation to store
//student names in future.

// let array =[];

//2. Declare an empty array using JS object notation to store
//student names in future.

// let array1 = {};

//3. Declare and initialize a strings array

// let array = ["saylani", "it", "program"]


// Declare and initialize a mixed array.

// let array = [1, true, "sami"]

//7. Declare and Initialize an array and store available 
//education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//BS, BCOM, MS, M. Phil., PhD). Show the listed 
//qualifications in your browser like

// let array =["(1). ssc", "(2). hsc", "(3). bcs", "(4). bs", "(5). bcom", "(6). ms", "(7). m.phil", "(8). phd"]


// let show = document.write(array[0], "<br>")
// let show1 = document.write(array[1], "<br>")
// let show2 = document.write(array[2], "<br>")
// let show3 = document.write(array[3], "<br>")
// let show4 = document.write(array[4], "<br>")
// let show5= document.write(array[5], "<br>")
// let show6 = document.write(array[6], "<br>")
// let show7 = document.write(array[7], "<br>")

//8. Write a program to store 3 student names in an array.Take
//another array to store score of these three students. 
//Assume that total marks are 500 for each student, display 
//the scores & percentages of students like

// let totalScore =500;
// let student1 ={
//     name: "sami", 
//     score: 320
// }

// let student2 ={
//     name: "osama", 
//     score: 250
// }

// let student3 ={
//     name: "wasay", 
//     score: 420
// }

// let percentages ={
//   percentage1 : ((+student1.score / totalScore) * 100),
//   percentage2 : ((+student2.score / totalScore) * 100),
//   percentage3 : ((+student3.score / totalScore) * 100)
// }

// let output = {
//     output1: document.write("score of "+ student1.name + " is "+ student1.score + ". " +"Percentage: " + percentages.percentage1 + "%" + "<br>"),
//     output2: document.write("score of "+ student2.name + " is "+  student2.score + ". " +"Percentage: " + percentages.percentage2 + "%" + "<br>"),
//     output3: document.write("score of "+ student3.name + " is "+  student3.score + ". " +"Percentage: " + percentages.percentage3 + "%" + "<br>")

// }

//9. Initialize an array with color names. Display the array
//elements in your browser.

// let array = ["red", "blue", "yellow", "skin" ]




//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser


// let input = prompt("Write color you want to add at beginning")

// array.unshift(input);


// let array1 =document.write(array + "<br>")

//b. Ask the user what color he/she wants to add to the end 
//& add that color to the end of the array. Display the 
//updated array in your browser.
// let input1 = prompt("Write color you want to add at end")

// array.push(input1);


// let array2 =document.write(array + "<br>")

// c. Add two more color to the beginning of the array. 
//Display the updated array in your browser.

// array.unshift("white", "black");


// let array3 =document.write(array + "<br>")

//  Delete the first color in the array. Display the updated
//array in your browser.

// array.shift()

// let array4 =document.write(array + "<br>")

// . Delete the last color in the array. Display the updated
//array in your browser.

// array.splice(array.length -1 , 1)
// let array5 =document.write(array + "<br>")

//f. Ask the user at which index he/she wants to add a color 
//& color name. Then add the color to desired 
//position/index. . Display the updated array in your 
//browser

// array[3] = "middle";


// let array6 =document.write(array + "<br>")

//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
//Arrays remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

// let inputOne =parseInt(prompt("write a colors index you want to start delete")) 
// let inputTwo =parseInt(prompt("write  how many wants to delete")) 

// array.splice( inputOne, inputTwo)
// let array7 =document.write(array + "<br>")


//10. Write a program to store student scores in an array & 
//sort the array in ascending order using Array’s sort 
//method.
// let array = [220, 123, 340, 12, 14]

// let array1 =document.write(array.sort((a , b) => (a - b)))

//Write a program to initialize an array with city names. 
//Copy 3 array elements from cities array to selectedCities 
//array

// document.write("CITIESLIST: ")
// let cities =["karachi", "gawadar", "peshawar", "hyderabad", "dadu", "mirpur"]
// document.write(cities)


// document.write("SELECTED CITY LIST: ")

// let city =document.write(cities.slice(1, 4))

//12. Write a program to create a single string from the 
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];

// let array = arr.join("")

// console.log(array)


//15. Write a program to store phone manufacturers (Apple,
//    Samsung, Motorola, Nokia, Sony & Haier) in an array. 
  //  Display the following dropdown/select menu in your 
    //browser using document.write() method


let array =["Apple",  "Samsung","Motorola" ,"Nokia" ,"Sony", "Haier"]

let display = document.write("<select><option>array[1]</option>")





