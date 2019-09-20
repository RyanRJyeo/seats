console.log("hello script js");

        var numseats = 10;
        var priceTix = 50;

        var numseatsE = 15;
        var numseatsB = 6;
        var numseatsF = 4;
        var priceTixE = 50;
        var priceTixB = 50;
        var priceTixF = 50;

var askUser = prompt("Welcome to RyanAir, would your holiday destination be KL or Bali?", "Please type in either (KL / Bali)")

askUser2 = askUser.toLowerCase();

if (askUser2 === "kl"){
        var answer = prompt("Our flights for the KL route is chartered by a 10 seat plane. \n\nFor the first half of the seats, the price goes up 3% over the current price of the ticket which is $50. For the second half it goes up by 5% over the on-going price of the ticket. The last seat is $91,000. \n\nIf you would like to confirm your purchase, please type in 'buy'. \nIf you would like to cancel your purchase, please type in 'cancel'.\n")

        answer.toLowerCase();
        if (answer === "buy"){
            alert("Please type in \n\n'buy ticket' \n\nin the input box in the webpage.")
        } else if (answer === "cancel") {
            alert("Thank you for visiting RyanAir, we hope to see you again soon!")
            location.reload();
        } else {
            alert("Please type in only 'buy' or 'cancel'");
            location.reload();
        }
    } else if (askUser2 === "bali"){
        var answer = prompt("Our flights for the Bali route is chartered by a 3 cabin plane. It has 15 economy seats, 6 business class seats and 4 first class seats. \n\nFor economy seats, in the first half of the seats the prices goes up 3% over the current price of the ticket which is $50, while the second half it goes up by 5% over the on-going price of the ticket and the last seat is $91,000. \n\nFor business class, in the first half of the seats the prices goes up 6% over the current price of the ticket which is $50, while the second half it goes up by 10% over the on-going price of the ticket and the last seat is $91,000. \n\nFor business class, all seat goes up by 15% over the current price of the ticket which is $50 and the last seat is $191,000. \n\nIf you would like to confirm your purchase, please type in 'buy'. \nIf you would like to cancel your purchase, please type in 'cancel'.\n")

if (askUser2 !== "kl" || askUser2 !== "bali"){
    result = askUser2;
}


answer.toLowerCase();
if (answer === "buy"){
    alert("Please type in \n\n'buy economy class', \n'buy business class' or \n'buy first class' \n\nin the input box in the webpage.")
} else if (answer === "cancel") {
    alert("Thank you for visiting RyanAir, we hope to see you again soon!")
    location.reload();
} else {
    alert("Please type in only 'buy' or 'cancel'");
    location.reload();
}
} else {
alert("Please type in only 'KL' or 'Bali'")
location.reload();
    };


var inputHappened = function(currentInput){


if (currentInput === "buy ticket" && askUser2 === "kl"){
    numseats = numseats - 1;
    if(numseats > 4) {
        priceTix = priceTix * 1.03;
        var boughtPrice = priceTix / 1.03;
        result = "Congratulations on getting your ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseats + " and it costs $" + priceTix.toFixed(2) + "!!";
    } else if (numseats > 1) {
        priceTix = priceTix * 1.05;
        var boughtPrice = priceTix / 1.05;
        result = "Congratulations on getting your ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseats + " and it costs $" + priceTix.toFixed(2) + "!!";
    } else if (numseats === 1) {
        priceTix = 91000;
        var boughtPrice = 67.10 / 1.05;
        result = "Congratulations on getting your ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseats + " and it costs $" + priceTix.toFixed(2) + "!!";
    } else if(numseats === 0){
        var boughtPrice = 91000;
        result = "Sorry dude no more seats!";
    } else if (numseats === -1){
        result = "Sorry dude no more seats!";
        location.reload();
    } else if(askUser2 === "kl" && currentInput !== "buy ticket"){
    var result = "Please type in 'buy ticket' only. \nWe currently have " + numseats + " seats left and the next ticket costs $" + priceTix.toFixed(2);
    }
    return result;
}

if(askUser2 === "kl" && currentInput !== "buy ticket" && numseats === 0){
    var result = "Sorry dude no more seats!"
    return result;
}


if (currentInput === "buy economy class" && askUser2 === "bali"){
    numseatsE = numseatsE - 1;
    if(numseatsE > 7) {
        priceTixE = priceTixE * 1.03;
        var boughtPrice = priceTixE / 1.03;
        result = "Congratulations on getting your economy class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsE + " and it costs $" + priceTixE.toFixed(2) + "!!";
    } else if (numseatsE > 1) {
        priceTixE = priceTixE * 1.05;
        var boughtPrice = priceTixE / 1.05;
        result = "Congratulations on getting your economy class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsE + " and it costs $" + priceTixE.toFixed(2) + "!!";
    } else if (numseatsE === 1) {
        priceTixE = 91000;
        var boughtPrice = 67.10 / 1.05;
        result = "Congratulations on getting your economy class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsE + " and it costs $" + priceTixE.toFixed(2) + "!!";
    } else if(numseatsE === 0){
        var boughtPrice = 91000;
        result = "Congratulations on getting your economy class ticket at a cheap cheap price of just $" + boughtPrice.toFixed(2)+ "! \nWe are all sold out now!!";
    } else if (numseatsE === -1){
        alert("Sorry dude no more economy class seats, try other classes!");
    }
    return result;

    } else if(currentInput === "buy business class" && askUser2 === "bali"){
        numseatsB = numseatsB - 1;
        if(numseatsB > 2) {
        priceTixB = priceTixB * 1.06;
        var boughtPrice = priceTixB / 1.06;
        result = "Congratulations on getting your business class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsB + " and it costs $" + priceTixB.toFixed(2) + "!!";
    } else if (numseatsB > 1) {
        priceTixB = priceTixB * 1.1;
        var boughtPrice = priceTixB / 1.1;
        result = "Congratulations on getting your business class ticket at $" + boughtPrice.toFixed(2)+ "! T\nhe amount of tickets left now is " + numseatsB + " and it costs $" + priceTixB.toFixed(2) + "!!";
    } else if (numseatsB === 1) {
        var boughtPrice = priceTixB / 1.1;
        priceTixB = 91000;
        result = "Congratulations on getting your business class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsB + " and it costs $" + priceTixB.toFixed(2) + "!!";
    } else if(numseatsB === 0){
        var boughtPrice = 91000;
        result = "Congratulations on getting your business class ticket at a cheap cheap price of just $" + boughtPrice.toFixed(2)+ "! \nWe are all sold out now!!";
    } else if (numseatsB === -1){
        alert("Sorry dude no more business class seats, try other classes!");
    }
    return result;

    } else if (currentInput === "buy first class" && askUser2 === "bali"){
        numseatsF = numseatsF - 1;
        if(numseatsF > 1) {
        priceTixF = priceTixF * 1.15;
        var boughtPrice = priceTixF / 1.15;
        result = "Congratulations on getting your first class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsF + " and it costs $" + priceTixF.toFixed(2) + "!!";
    } else if (numseatsF === 1) {
        var boughtPrice = priceTixF / 1.15;
        priceTixF = 191000;
        result = "Congratulations on getting your first class ticket at $" + boughtPrice.toFixed(2)+ "! \nThe amount of tickets left now is " + numseatsF + " and it costs $" + priceTixF.toFixed(2) + "!!";
    } else if(numseatsF === 0){
        var boughtPrice = 191000;
        result = "Congratulations on getting your first class ticket at a cheap cheap price of just $" + boughtPrice.toFixed(2)+ "! \nWe are all sold out now!!";
    } else if (numseatsF === -1){
        alert("Sorry dude no more first class seats, try other classes!");
    }
    if(numseatsF <= 0 && numseatsB <= 0 && numseatsE <= 0){
        alert("Sorry dude no more seats at all!")
        location.reload();
    }
    return result;
}
     else {
        return "Yooooo please type in the right inputs only!"
    }


};