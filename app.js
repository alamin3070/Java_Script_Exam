// .....1. Return the Sum of Two Numbers..........
console.log("1. Return the Sum of Two Numbers");
const addition = (a,b) => {
  return a+b;
};
console.log("addition(3, 2) ➞",addition(3,2));
console.log("addition(-3, -6) ➞",addition(-3,-6));
console.log("addition(7, 3) ➞",addition(7,3));

// .......2. Convert Minutes into Seconds.........
console.log("2. Convert Minutes into Seconds");

const minutesToSeconds = (minutes) =>{
  return minutes * 60;
};
console.log("aconvert(5) ➞",minutesToSeconds(5));
console.log("convert(3) ➞",minutesToSeconds(3));
console.log("convert(2) ➞",minutesToSeconds(2));

//........3. Return the Next Number from the Integer Passed.......
console.log("3. Return the Next Number from the Integer Passed");

const nextNumber = (num) => {
  return num + 1;
};
console.log("ddition(0) ➞",nextNumber(0));
console.log("ddition(9) ➞",nextNumber(9));
console.log("ddition(-3) ➞",nextNumber(-3));

//..........4. Area of a Triangle..................................
console.log("4. Area of a Triangle");

const calculatetriArea = (base, height) =>{
  return (base * height) / 2;
};
console.log("triArea(3, 2) ➞",calculatetriArea(3,2));
console.log("triArea(7, 4) ➞",calculatetriArea(7,4));
console.log("triArea(10, 10) ➞",calculatetriArea(10,10));

//..........5. Return the First Element in an Array...............
console.log("5. Return the First Element in an Array");

var getFirstElement = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Invalid input: Array must exist and have at least one element');
  }
  return numbers[0];
};
var numbers = [1, 2, 3];
console.log("getFirstValue([1, 2, 3]) ➞",getFirstElement(numbers));
var numbers = [80, 5, 100];
console.log("getFirstValue([80, 5, 100]) ➞",getFirstElement(numbers));
var numbers = [-500, 0, 50];
console.log("getFirstValue([-500, 0, 50]) ➞",getFirstElement(numbers));

//............6. Convert Age to Days..........
console.log("6. Convert Age to Days");

const convertAgeToDays = (age) => {
    if (!Number.isInteger(age) || age < 0) {
      console.log('Invalid age: Age must be a positive integer');
    }
    return age * 365;
  };
  console.log("calcAge(65) ➞",convertAgeToDays(65));
  console.log("calcAge(0) ➞",convertAgeToDays(0));
  console.log("calcAge(20) ➞",convertAgeToDays(20));

  //...........7. Power Calculator...................
  console.log("7. Power Calculator");

  const calculatePower = (voltage, current) => {
    if (!Number.isFinite(voltage) || !Number.isFinite(current)) {
       console.log('Invalid input: Voltage and current must be numbers');
    }
    return voltage * current;;
  };
  console.log("circuitPower(230, 10) ➞",calculatePower(230, 10));
  console.log("circuitPower(110, 3) ➞",calculatePower(110, 3));
  console.log("circuitPower(480, 20) ➞",calculatePower(480, 20));
 

  //............8. Maximum Edge of a Triangle.......
  console.log("8. Maximum Edge of a Triangle");

  const maxThirdEdge = (side1, side2) => {
    if (side1 <= 0 || side2 <= 0) {
        console.log("Side lengths must be positive integers");
    }
  
    if (side1 + side2 <= side1 - side2 || side1 + side2 <= -side1 + side2) {
        console.log("Side lengths do not form a valid triangle");
    }
    return side1 + side2 - 1;
  };
  console.log("nextEdge(8, 10) ➞",maxThirdEdge(8, 10));
  console.log("nextEdge(5, 7) ➞",maxThirdEdge(5, 7));
  console.log("nextEdge(9, 2) ➞",maxThirdEdge(9, 2));

  //.............9.Return the Remainder from Two Numbers.....................

  console.log("9.Return the Remainder from Two Numbers");
  const findRemainder = (dividend, divisor) => {
    if (divisor === 0) {
      console.log("Divisor cannot be zero");
    }
    return dividend % divisor;
  };
  console.log("remainder(1, 3) ➞ ",findRemainder(1, 3));
  console.log("remainder(3, 4) ➞ ",findRemainder(3, 4));
  console.log("remainder(-9, 45) ➞ ",findRemainder(-9, 45));
  console.log("remainder(5, 5) ➞ ",findRemainder(5, 5));

  //..........10. Return Something to Me!..............
  console.log("10. Return Something to Me!");
  
  const combine = (a) => `something ${a}`;
console.log(combine("is better than nothing"));
console.log(combine("Bob Jane"));
console.log(combine("something"));

//.............11. Correct the Mistakes...............
console.log("11. Correct the Mistakes");
const correctMistake = (num) => {
  return num * num;
};
console.log("squared(5) ➞",correctMistake(5));
console.log("squared(9) ➞",correctMistake(9));
console.log("squared(100) ➞",correctMistake(100));


//.............12.Is the Number Less than or Equal to Zero?.........

console.log("12.Is the Number Less than or Equal to Zero?");
const isLessThanOrEqualToZero = (number) => {
  return number <= 0;
};
console.log("lessThanOrEqualToZero(5) ➞",isLessThanOrEqualToZero(5));
console.log("lessThanOrEqualToZero(0) ➞",isLessThanOrEqualToZero(0));
console.log("lessThanOrEqualToZero(-2) ➞",isLessThanOrEqualToZero(-2));

//.............13.Sum of Polygon Angles........................
console.log("13.Sum of Polygon Angles");
const sumPolygonAngles = (n) => {
  if (!Number.isInteger(n) || n <= 2) {
    throw new Error('Invalid input: n must be an integer greater than 2');
  }
  return (n - 2) * 180;
};
console.log("sumPolygon(3) ➞",sumPolygonAngles(3));
console.log("sumPolygon(4) ➞",sumPolygonAngles(4));
console.log("sumPolygon(6) ➞",sumPolygonAngles(6));

//.............14. Basic Variable Assignment........................
console.log("14. Basic Variable Assignment");

const combineName = (name) => {
  const result = `${name}Coder`;
  return result;
};
console.log(combineName("Mubashir"));
console.log(combineName("Matt"));
console.log(combineName("javaScript"));

//.............15.Less Than 100?........................
console.log("15.Less Than 100?");
const isSumLessThan100 = (num1, num2) => {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new Error('Invalid input: num1 and num2 must be numbers');
  }
  return (num1 + num2) < 100;;
};
console.log("lessThan100(22, 15) ➞ ",isSumLessThan100(22, 15));
console.log("lessThan100(83, 84) ➞ ",isSumLessThan100(83, 84));
console.log("lessThan100(3, 77) ➞ ",isSumLessThan100(3, 77));

