//1.Write a program that takes a character (number or string) 
//in a variable & checks whether the given input is a 
//number, uppercase letter or lower case letter. (Hint: ASCII 
//codes:- A=65, Z=90, a=97, z=122).



//Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal


// let input =parseInt(prompt("write first num"))
// let input2 =parseInt(prompt("write second num"))

// if(input > input2){
//     document.write(input +" is larger than "+ input2)
// }else if(input2 > input){
//     document.write(input2 +" is larger than "+ input)

// }else{
//     document.write("equals")
// }



//Write a program that takes input a number from user & 
//state whether the number is positive, negative or zero.

//  let input =parseInt(prompt("write num"))

//  if(input > 0){
//         document.write("its positive")
//     }else if(input < 0){
//         document.write("its negative")
    
//     }else{
//         document.write("zero")
//     }


//Write a program that takes a character (i.e. string of 
//length 1) and returns true if it is a vowel, false otherwise
/////////////////(.INCLUDES) KA FUNCTION STRING MAI JAKAR DEKHTA HAI KAI YE EXIST KRTA HAI YA NHI)
// let input = prompt("write string of length1")

// let vowels ="aeiou"
// let checker = vowels.includes(input)

// if (checker){
//     document.write("true")
// }else{
//     document.write("false")

// }


//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then 
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are 
//same, show message “Correct! The password you 
//entered matches the original password”. Show 
//“Incorrect password” otherwise


// let storedPassword = "qureshi*1"

// let input =prompt("Write Password")

// if(input !== ""){
//   if(input === storedPassword){
//     document.write("Correct! The password you entered matches the original password")
//   }else{
//     document.write("Incorrect Password")
//   }


// }
// else{
//     document.write("PLease Enter your Password")
// }


// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 19;
// if (hour < 18) {
// greeting =console.log("Good day")}
// else{
// greeting =console.log("Good evening") 
// }

//7. Write a program that takes time as input from user in 24 
//hours clock format like: 1900 = 7pm. Implement the 
//following case using if, else & else if statements

// let time =+prompt("enter input from user in 24 hours clock format like: 1900 = 7pm. ")

// if(time >= 0 && time < 1200){
//  document.write("GOOD MORNING!")
// }
// else if(time >= 1200 && time < 1700){
//     document.write("GOOD AFTERNOON!")

// }
// else if(time >= 1700 && time < 2100){
//     document.write("GOOD AFTERNOON!")

// }
// else if(time >= 2100 && time < 2359){
//     document.write("GOOD NIGHT!")

// }
