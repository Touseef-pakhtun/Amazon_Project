import formatCurrency from"../../scripts/utils/money.js";

console.log("Test suite for formatCurrency function:");


if(formatCurrency(2095)==='20.95'){
    console.log("Test 1 Passed");
}else{
    console.log("Test 1 Failed");
}

if(formatCurrency(0)==='0.00'){
    console.log("Test 2 Passed");
}else{
    console.log("Test 2 Failed");
}

if(formatCurrency(2000.5)==='20.01'){
    console.log("Test 3 Passed");
}else{
    console.log("Test 3 Failed");
}

if(formatCurrency(100)==='1.00'){
    console.log("Test 4 Passed");
}else{
    console.log("Test 4 Failed");
}   