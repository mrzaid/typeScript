export const hello = "world";

const addTwoNumbers = (a:number,b:number) =>{
return a+b;

};
const result = addTwoNumbers(1,2);
// we can play with our results as typescript has denoted number to a and b
const resultStringified=result.toFixed();

const secondResult=addTwoNumbers(parseInt(resultStringified),2);