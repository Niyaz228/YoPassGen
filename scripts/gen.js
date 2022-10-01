"use strict";

function generatePassword() {

        var length = document.getElementById("flying").value,
            charset = "",
            password = "";

        if(document.getElementById("letters").checked)
            charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(document.getElementById("numbers").checked)
            charset += "0123456789";
        if(document.getElementById("symbols").checked)
            charset += "!@#$%^&*()-_=+[]{};:',.<>/?";

        for (var i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }

        if(password == '')
            password = "mahmood what the hell";
        return password;
}

function pasteNewPassword(){
    document.getElementById('myTextarea').value = generatePassword();
} 

pasteNewPassword(); //when page loads

