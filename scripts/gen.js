"use strict";

var upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerset = "abcdefghijklmnopqrstuvwxyz",
    numbersset = "0123456789",
    symbolsset = "!#$%^&*()-_=+[]{};:,<.>/?|" + "'" + '"',
    length,
    upper,
    lower,
    numbers,
    symbols;

function generatePassword() {
    length = document.getElementById("flying").value; //getting parameters
    upper = document.getElementById("upper").checked;
    lower = document.getElementById("lower").checked;
    numbers = document.getElementById("numbers").checked;
    symbols = document.getElementById("symbols").checked;

    var charset = "", 
        password = "";

    if(upper)
        charset += upperset; //creating charset
    if(lower)
        charset += lowerset;
    if(numbers)
        charset += numbersset;
    if(symbols)
        charset += symbolsset;
    
    var n = charset.length; //check whether to show error
    if(n == 0)
        return false;
    
    for (var i = 0; i < length; ++i) 
        password += charset.charAt(Math.floor(Math.random() * n));
        
    return password;
}

function pasteNewPassword() {
    var result = generatePassword();

    if(!result) {
        document.getElementById("error").style.visibility = "visible"; //showing error
        return;
    }

    var breakpoint = false;
    while(!breakpoint) {    //checking whether all parameters are fullfilled

        var isupper = false,
            islower = false,
            isnums = false,
            issymbols = false;

        for (var i = 0; i < length; ++i) {
            if(upper && upperset.includes(result.charAt(i))) isupper = true;
            if(lower && lowerset.includes(result.charAt(i))) islower = true;
            if(numbers && numbersset.includes(result.charAt(i))) isnums = true;
            if(symbols && symbolsset.includes(result.charAt(i))) issymbols = true;
        }

        if(upper == isupper && lower == islower && numbers == isnums && symbols == issymbols)
            breakpoint = true;
        else
            result = generatePassword();
    }

    document.getElementById("error").style.visibility = "hidden"; //giving out password(& hiding error?)
    document.getElementById("myTextarea").value = result;
}

function copy() {
    var copyText = document.getElementById("myTextarea");

    copyText.select();
    document.execCommand("copy");

    document.getSelection().removeAllRanges();
}

pasteNewPassword(); //when page loads