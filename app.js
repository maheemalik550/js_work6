// FUNCTION 35-38
// Q 1
// function result(){
//     a = new Date ();
//     console.log(a);
// }
// result();
// Q 2
// function name(firstname,lastname){
//     fullname = firstname + lastname;
//     console.log(fullname);
// }
// name("maheen","malik");
// Q 3

// function numbers(num1,num2){
//     return  num1 + num2;
    
// }
// var value1 = +prompt("enter num 1");
// var value2 = +prompt("enter num 2");
// var result = numbers(value1,value2);
// console.log(result);
// Q 4
// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2;
//     }
//     else if(opr === "-"){
//         return num1 - num2;
//     }
//     else if(opr === "*"){
//         return num1 * num2;
//     }
//     else if(opr === "/"){
//         return num1 / num2;
//     }
// }
// var number1 = +prompt("enter number 1");
// var operator = prompt("enter operator");
// var number2 = +prompt("enter number 2")
// var result = calc(number1,operator,number2);
// console.log(result);
// Q 5
// function calc(num){
//     num = num * num;
//     console.log(num);
// }
// calc(7);

// function calc(num){
//     num = num * num;
//     console.log(num);
// }
// var number = +prompt("enter number");
// calc(number);
// Q 6
    // function calc(num){
    //     for(i=num;i>=1;i--){
    //         num = num * i;
    //         console.log(num);
    //     }
    // }

    // calc(7);
// Q 7
// function  number(firstnum,lastnum){
//     for(i=firstnum;i<=lastnum;i++){
//         document.write(i+ " ");
//     }
// }
// number(1,30);
// Q 8
// function calc(base,perpendicular,hypotenuse){
//     a = base * base;
//     b = perpendicular * perpendicular;
//     c = a + b;
//     hypotenuse = Math.sqrt(c);
//     console.log(hypotenuse);

// }
// calc(4,3,"hypotenous");
// Q 9
// function calc(Area,width,height){
//     Area = width * height;
//     console.log(Area);
// }
// calc("Area",2,5);
// Q 10
// function calc(word,check){
//     for(i=word.length-1;i>=0;i--){
//         console.log(word[i]);
//         check += word[i];
//         if(word === check){
//             return word + " "+ "it is palimdrome word";
//         }
//     }
// }
// var userInput = prompt("enter userinput");
// var check = "";
// var result = calc(userInput,check);
// console.log(result); 
// Q 11
// skip
// Q 12
// function check(string){
//     string = string.slice(4,15);
//     console.log(string);
// }
// check("Web Development Tutorial");

// Q13
// function char(str, letter) 
// {
//  var time = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       time += 1;
//       }
//   }
//   return time;
// }

// var result = char('w3resource.com', 'o');
// console.log(result);
// Q 14
// function calc(circumference,radius){
//     circumference = 2 * 3.14*radius;
//     console.log("circumference of circle is = " +circumference);
// }
// calc("circumference",8);

// function calc(Area,radius){
//     Area = (3.14)*radius*radius;
//     console.log("Area of circle is = " + Area);
// }
// calc("Area",12);
