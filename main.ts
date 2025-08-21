import * as readline from 'readline';
export {};
console.log("Hello,World!");
let a: string = "hey";
console.log(typeof a);
const ARRAY_LANG: any  = ["HTML", "CSS"];
ARRAY_LANG.push("JAVASCRIPT");
console.log(ARRAY_LANG)
parseInt("101", 5);
const sales: string = "Toyota";

function carTypes(name){
  return name === "Honda" ? name: `Sorry we dont sell ${name}`;
} 
const car: any = {myCar: "Saturn",
  getCar: carTypes("Honda"), special: sales 
};
console.log(car.special);
const formatArg: any = (arg) => {
  if (Array.isArray(arg)){
    return arg.map((part) => `-${part}`).join("\n");

  }
  if (arg.toString === Object.prototype.toString){
    return JSON.stringify(arg);
  }
  return arg;
}
const print: any = (segments, ...args )=>{
let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};
const todos: any = [
  "Learn JS",
  "Learn web APIS",
   "Set up a website",
  "Profit!",
];
const progress: any = {
  javascript: 20,
  html: 65,
  css: 10,
};
print`i need to do:
${todos}
my current progress is: ${progress}
`;
// this does not work at all
/*
  const str: string = "
    this string \
    is broken \ 
  in multiple \ 
   lines
  "
  console.log(str);
*/ 
/* function checkData(){
  if (document.form1.threeChar.value.length === 3){
    return true;
  }
  alert(
    `Enter EXACTLY three characters ${document.form1.threeChar.value} isnt valid`,
  );
  return false;
} */ 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator(a: number, b: number, operator: string): number | string{
  switch (operator){
    case '+':
     return a + b;
      break;
      case '-':
      return a -b;
      break;
      case '*':
      return a * b;
      break;
      case '/':
      return a / b;
      break;
      default:
       return 'Invalid operator';
  }
}
rl.question('Enter the first number:', (firstInput) => {
   const a = parseFloat(firstInput);
  rl.question('Enter an operator', (operator) => {
    rl.question('Enter the second number: ', (secondInput) => {
       const b = parseFloat(secondInput);
      const result = calculator(a,b,operator);
      console.log(`result: ${result}`);
      rl.close();
      // tezt
    });
  });
});


