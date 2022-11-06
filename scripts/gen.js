"use strict";

function generatePassword() {
        var length = document.getElementById("flying").value,
            charset = "",
            password = "";

        if(document.getElementById("upper").checked)
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(document.getElementById("lower").checked)
            charset += "abcdefghijklmnopqrstuvwxyz";
        if(document.getElementById("numbers").checked)
            charset += "0123456789";
        if(document.getElementById("symbols").checked)
            charset += "!@#$%^&*()-_=+[]{};:',.<>/?";

        for (var i = 0, n = charset.length; i < length; ++i)
            password += charset.charAt(Math.floor(Math.random() * n));

        return password;
}

function pasteNewPassword() {
    let result = generatePassword();

    if(result != "") {
        document.getElementById("error").style.display = "none";
        document.getElementById('myTextarea').value = result;
    } 
    else
        document.getElementById("error").style.display = "block";
} 

function copy() {
    var copyText = document.getElementById("myTextarea");

    copyText.select();
    document.execCommand("copy");

    document.getSelection().removeAllRanges();
}

pasteNewPassword(); //when page loads