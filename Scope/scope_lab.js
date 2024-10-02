// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

{
// Practice Block scope
var practiceblockVar = "I'm a new block-scoped var";
let practiceblockLet = "I'm a new block-scoped let";
const practiceblockConst = "I'm a new block-scoped const";
}

var practiceblockVar = "New meaning var";
let practiceblockLet = "New meaning let";
const practiceblockConst ="New meaning const";

// Practice Block scope
console.log(practiceblockVar);
console.log(practiceblockVar);
console.log(practiceblockVar);
console.log(practiceblockLet);
console.log(practiceblockConst);

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError