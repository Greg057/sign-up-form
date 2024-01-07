const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-confirm");
const button = document.querySelector("button");


button.addEventListener("click", checkPasswords);


function checkPasswords () {
    if (password1.value != password2.value) {
        console.log("nope");
    }
    else {
        console.log("all good");
    }
};
