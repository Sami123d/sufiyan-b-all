// 1. Write a program to take “city” name as input from user. If 
//user enters “Karachi”, welcome the user like this: 
//“Welcome to city of lights”


// var inputTake = prompt("write a City Name ?");
function city() {
if (inputTake.toLowerCase() === "karachi"){
    document.write("welcome the city of lights")
}   
}

//2. Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am.
function gender() {
    if (inputTake.toLowerCase() === "male"){
    document.write("good morning sir");
} else if (inputTake.toLowerCase() === "female"){
    document.write( "good morning women")
}else{
    document.write("you write worng gender")
}
}


// . Write a program to take input color of road traffic signal 
//from the user & show the message according to this table:
function trafficSignal() {
    

if(inputTake.toLowerCase() === "red"){
  document.write("lets stop")
}
 else if(inputTake.toLowerCase() === "yellow"){
    document.write("GHER MARLO")
 }
 else if(inputTake.toLowerCase() === "green"){
    document.write("BHAGAO USTAD")
 }
 else{
    document.write("ghalat likh rha hai bhai")
 }
}


//Write a program to take input remaining fuel in car (in 
//litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car”

function petrolChecker(){
    if(+inputTake.toLowerCase() >= 0.25){
    document.write("hai abhi petrol")
}else if(+inputTake.toLowerCase() < 0.25){
    document.write("dalwale petrol")
}else {
    document.write("shi likh")
}
}
//Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute 
//grade as per following table:
//Show the total marks, marks obtained, percentage, grade &
//remarks like:
// var totalMarks = prompt("total marks")
// var subjectMarks = prompt("obtained marks")

// var totalMarksFun = document.write("Total Marks: " + totalMarks + "<br>")

// var MarksObtained = document.write("Obtained Marks: " + subjectMarks + "<br>")
// var percentage =((subjectMarks / totalMarks) * 100) 

// var percentage1 = document.write("percentage: " + percentage + "%" + "<br>")

// if (percentage >= 80){
//     var gardesShow = document.write ("Grade: A+"  + "<br>")
//     var remarksShow =document.write ("Remarks: Excellent"+ "<br>")
// }
// else if(percentage >= 70 && percentage < 80 ){
//     var gardesShow = document.write ("Grade: A" +  "<br>")
//     var remarksShow =document.write ("Remarks: Good"+ "<br>")
//  }else if(percentage >= 60 && percentage < 70 ){
//     var gardesShow = document.write ("Grade: B" +  "<br>")
//     var remarksShow =document.write ("Remarks: You Need To Improve"+ "<br>")
//  }else{
//     var gardesShow = document.write ("Grade: Fail" +  "<br>")
//     var remarksShow =document.write ("Remarks: Sorry"+ "<br>")
//  }

//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct
//answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”

// const secretNum = 9

// let guessNum =prompt("write a number you guess")


// if (+guessNum === secretNum){
//     document.write("SHOW BINGO!")
// }else{
//     document.write("Close Enough to the correct Answer " )
// }

//Write a program to check whether the given number is
//divisible by 3. Show the message to the user if the number 
//is divisible by 3


// let input = +prompt("write a number")
// let divisible = input % 3 
//  if(0 === divisible){
//     document.write("is divible by 3")
//  }else{
//     document.write(input + "is not divible by 3")

//  }

// 9. Write a program that checks whether the given input is an
//even number or an odd number
// let input = +prompt("write a number")

//  if(input % 2 === 0){
//     document.write("is even")
//  }else{
//     document.write("is odd")

//  }

//Write a program that takes temperature as input and 
//shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

// let tempSign = "°C" 
// let temp = +prompt("write a temperature", tempSign);

// if (temp > 40 ){
//     document.write("It is too hot outside.")
// }else if (temp > 30){
//     document.write("The Weather today is Normal.")

// }else if (temp > 20){
//     document.write("Todays Weather is cool.")

// }else if (temp > 10){
//     document.write("OMG! Todays weather is so Cool.")

// }else{
//     document.write("OMG!")

// }

//11. Write a program to create a calculator for +,-,*, / & % 
//using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user

// let input = +prompt("write first number")
// let input2 = +prompt("write second number")
// let input3 = prompt("write operator")

// if (input3 === "+"){
//        document.write(input + input2)
// }
// else if (input3 === "-"){
//     document.write(input - input2)
// }
// else if (input3 === "/"){
//     document.write(input / input2)
// }
// else if (input3 === "*"){
//     document.write(input * input2)
// }
// else if (input3 === "%"){
//     document.write(input % input2)
// }else {
//     document.write("you write wrong operator , TRY AGAIN")

// }

