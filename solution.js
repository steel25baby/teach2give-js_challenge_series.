// Create a function called sum that takes in two numbers as arguments and returns their sum.
let total = (firstNumber, secondNumber) => {
  let sum = firstNumber + secondNumber;
  console.log(sum);
  return sum;
};
total(5, 7);
total(2, 8);

function nextnumber(num) {
  console.log(num + 1);
  return num + 1;
}
nextnumber(2);

// Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.

function rectanglePerimeter(length, width) {
  let perimeter = 2 * length + 2 * width;
  console.log(perimeter);
  return perimeter;
}
rectanglePerimeter(9, 10);

// Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.

function returnSomethingToMe(something) {
  let finalstatement = "something " + something;
  console.log(finalstatement);
  return finalstatement;
}
returnSomethingToMe("anything");

// Bob and Jane want to know who has a bigger BMI than the other.
// Write a function called greaterBMI that will take in as the first arguement
// the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane,
//  your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane",
//  if they have the same BMI, it should return the string "Equal".

function greaterBMI(bobBMI, janeBMI) {
  if (bobBMI > janeBMI) {
    console.log("Bob");
    return "Bob";
  } else if (bobBMI < janeBMI) {
    console.log("Jane");
    return "Jane";
  } else {
    console.log("Equal");
    return "Equal";
  }
}
greaterBMI(25, 30);
greaterBMI(20, 10);
greaterBMI(30, 30);

// You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer.
//  Write a function called basketBallPoints, the first argument should be the number of two pointers scored by
//   the team and the second argument the number of three pointers scored by the team.
// This function returns the final points for the team.

function basketBallPoints(twoPointers, threePointers) {
  let twoPointersPoints = twoPointers * 2;
  let threePointersPoints = threePointers * 3;
  let totalPoints = twoPointersPoints + threePointersPoints;
  console.log(totalPoints);
  return totalPoints;
}
basketBallPoints(3, 5);

// Given two numbers, write a function called isSumMoreThan100
//  return true if their sum is greater than 100 and false if their sum is less than 100.

function isSumMoreThan100(num1, num2) {
  let sum = num1 + num2;
  if (sum > 100) {
    console.log("true");
    return "true";
  } else {
    console.log("false");
    return "false";
  }
}
isSumMoreThan100(50, 50);
isSumMoreThan100(25, 50);
isSumMoreThan100(75, 35);

// Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds
//  that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds
//  e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1,
//  then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"

function convertToSeconds(minutes) {
  let seconds = minutes * 60;
  if (seconds == 0) {
    console.log(0);
    return 0;
  } else if (seconds == 1) {
    console.log(1);
    return 1;
  } else {
    console.log(seconds + " seconds");
    return seconds + " seconds";
  }
}
convertToSeconds(3);
convertToSeconds(0);

// Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three.
//  If they are all equal, it should return any of them.

function greater(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
    return num2;
  } else {
    console.log(num3);
    return num3;
  }
}
greater(60, 60, 60);

// Write a function called least that takes in three numbers as arguments and returns the least among the three.
// If they are all equal, it should return any of them.

function least(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    console.log(num1);
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    console.log(num2);
    return num2;
  } else {
    return console.log(num3);
  }
}
least(60, 62, 64);

// Write a function called footballPoints that returns the number of points a football team has obtained so far,
//  the first argument for this function is the number of games a team has won, the second argument is the
//  number of games the team has drawn and the third arguement is the number of times the team has lost.
//  3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.

function footballPoints(won, drawn, lost) {
  let wonPoints = won * 2;
  let drawnPoints = drawn * 1;
  let lostPoints = lost * 0;
  let totalPoints = wonPoints + drawnPoints + lostPoints;
  console.log(totalPoints);
  return totalPoints;
}
footballPoints(3, 4, 1);

// Write a function called isEven that takes in a number as an argument,
// the function returns true if a number is even and returns false if a number is odd.
//  Use this function to log to the console all the even numbers between 0 and 101.

function isEven(number) {
  return number % 2 === 0;
}

// Logging all the even numbers between 0 and 101 using the isEven function
for (let i = 0; i <= 101; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}
