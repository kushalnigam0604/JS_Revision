//  Call Method -

// let obj = {
//   firstName: "Kushal",
//   lastName: "Nigam",
// };
// const printName = function (x, msg) {
//   console.log(x + this.firstName + this.lastName + msg);
// };
// printName.call(obj, "hello ", ", how are you?");

// let obj2 = {
//   firstName: "Akshay",
//   lastName: "Saini",
// };

// printName.call(obj2, "Hey ", ", All good!");

// Apply method -

// let obj = {
//     firstName: "Kushal",
//     lastName: "Nigam",
//   };
//   const printName = function (x, msg) {
//     console.log(x + this.firstName + this.lastName + msg);
//   };
//   printName.apply(obj, ["hello ", ", how are you?"]);                    //      pass argument inside array

//   let obj2 = {
//     firstName: "Akshay",
//     lastName: "Saini",
//   };

//   printName.apply(obj2, ["Hey ", ", All good!"]);                       //       pass argument inside array

// Bind method -

// let obj = {
//   firstName: "Kushal",
//   lastName: "Nigam",
// };
// const printName = function (x, msg) {
//   console.log(x + this.firstName + this.lastName + msg);
// };
// let functionValue1 = printName.bind(obj, "hello ", ", how are you?");     // It returns the copy of function
// functionValue1();

// let obj2 = {
//   firstName: "Akshay",
//   lastName: "Saini",
// };

// let functionValue2 = printName.bind(obj2, "Hey ", ", All good!");         // It returns the copy of function
// functionValue2();

// Polyfill for Bind method -

// let obj = {
//   firstName: "Kushal",
//   lastName: "Nigam",
// };
// const printName = function (x, msg, count) {
//   console.log(x + this.firstName + this.lastName + msg + "--> " + count);
// };

// let functionValue1 = printName.bind(obj, "hello ", ", how are you?");
// functionValue1("5");

// Function.prototype.myBind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let functionValue2 = printName.myBind(obj, "hii ", ", All fine.");
// functionValue2("10");
