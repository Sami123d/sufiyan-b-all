// function calculateTotal(subTotal, tax) {
//     return (subTotal  + tax)
// }


// function calculteResult() {
//    let order1 =prompt("order1")

//   let order2 =prompt("order2")


//   let order3 =prompt("order3")

//   let orders =document.write("ORDER1:" + order1 ,"ORDER2:" + order2,"ORDER3:" + order3)

//   return orders;

// }
// calculteResult();


 var str = prompt("Enter some text");
 var numChars = str.length; 
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 2) === " ") {
 alert("No double spaces!");
 break;

 }
 }

