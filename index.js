function PositiveNegative() {
  var num = document.getElementById("no").value;

  //validation

  if (num > 0) {
    document.getElementById("p1").innerHTML = "Given number is positive";
  } else if (num < 0) {
    document.getElementById("p1").innerHTML = "Given number is Negative";
  } else {
    document.getElementById("p1").innerHTML = "Given number is Zero";
  }
}

function Tringle() {
  var a = document.getElementById("no1").value;
  var b = document.getElementById("no2").value;
  var c = document.getElementById("no3").value;

  //validation
  debugger
  if (a + b <= c || b + c <= a || c + a <= b || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a == "" || b == "" || c == "") {
    document.getElementById("p2").innerHTML = "Invalid";
  }
  else if (a == b && b == c) {
    document.getElementById("p2").innerHTML = "equilateral triangle";
  }
  else if (a == b || b == c) {
    document.getElementById("p2").innerHTML = "isosceles triangle";
  }
  else {
    document.getElementById("p2").innerHTML = "scalene triangle";
  }
}

function Absolute() {
  var num = document.getElementById("no4").value;
  var abs = Math.abs(num);
  document.getElementById("p3").innerHTML = abs;
}


function palindrome() {
  debugger
  var str = document.getElementById("no5").value;
  // convert string to an array
  const arrayValues = str.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if (str == reverseString) {
    document.getElementById("p4").innerHTML = "It is a palindrome";
  }
  else {
    document.getElementById("p4").innerHTML = "It is not a palindrome";
  }
}

function Century() {

  var year = document.getElementById("no6").value;

  // No negative value is allow for year 
  if (year <= 0) {
    document.getElementById("p5").innerHTML = "0 and negative is not allow" + "for a year";
  } else if (year <= 100) {                                            // If year is between 1 to 100 it 
    document.getElementById("p5").innerHTML = "1st century";            // will come in 1st century 
  } else if (year % 100 == 0) {
    document.getElementById("p5").innerHTML = parseInt(year / 100) + " century";
  } else {
    document.getElementById("p5").innerHTML = parseInt(year / 100) + 1 + " century";
  }
}

function isPerfectSquare() {
  debugger
  var square = document.getElementById("no7").value;
  if (Math.ceil(Math.sqrt(square)) ==
    Math.floor(Math.sqrt(square))) {
    document.getElementById("p6").innerHTML = "Perfect Square";
  }
  else {
    document.getElementById("p6").innerHTML = "Not a Perfect Square";
  }
}

function Season() {
  var a = parseInt(document.getElementById("no8").value);
  var month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var b = month[a - 1];
  var season;

  switch (a) {
    case 12:
    case 1:
    case 2: season = "winter"; break;
    case 3:
    case 4:
    case 5: season = "spring"; break;
    case 6:
    case 7:
    case 8: season = "summer"; break;
    case 9:
    case 10:
    case 11: season = "autumn"; break;
  }
  document.getElementById("p7").innerHTML = " It is " + b + ", which is in " + season + ".";
}

function theString() {
  let str = document.getElementById("no9").value;

  if (str.trim().length === 0) {
    document.getElementById("p8").innerHTML = "The string is empty";
  } else {
    document.getElementById("p8").innerHTML = "The string is not empty";
  }
}

function FindCase() {

  let str = document.getElementById("no10").value;
  var upper = 0,
    lower = 0,
    number = 0,
    special = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      upper++;
    } else if (str[i] >= "a" && str[i] <= "z") {
      lower++;
    } else if (str[i] >= "0" && str[i] <= "9") {
      number++;
    } else {
      special++;
    }
    document.getElementById("p9").innerHTML = "Total Upper case:" + upper + "Lower case:" + lower + "<br>" + "Number:" + number + "<br>" + "Special characters in a string are:" + special;
  }
}

function EvenOdd() {
  let num = document.getElementById("no11").value;

  if (num & 1 == 1) {
    document.getElementById("p10").innerHTML = "Number is odd";
  } else {
    document.getElementById("p10").innerHTML = "Number is even";
  }
}

function Leap() {

  let year = document.getElementById("no12").value;
  debugger
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
    document.getElementById("p11").innerHTML = "Input year:" + year + "is a Leap Year";
  else
    document.getElementById("p11").innerHTML = "Input year : " + year + " is not a Leap Year";
}

function DayName() {
  let day = Number(document.getElementById("no13").value);

  switch (day) {

    case 0:
      document.getElementById("p12").innerHTML = "Today is Sunday";
      break;
    case 1:
      document.getElementById("p12").innerHTML = "Today is Monday";
      break;
    case 2:
      document.getElementById("p12").innerHTML = "Today is Tuesday";
      break;
    case 3:
      document.getElementById("p12").innerHTML = "Today is Wednesday";
      break;
    case 4:
      document.getElementById("p12").innerHTML = "Today is Thursday";
      break;
    case 5:
      document.getElementById("p12").innerHTML = "Today is Friday";
      break;
    case 6:
      document.getElementById("p12").innerHTML = "Today is Saturday";
      break;
    default:
      document.getElementById("p12").innerHTML = "Sorry";
  }
}