const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-confirm");
const button = document.querySelector("button");
const noMatch = document.querySelector("#no-match");

button.addEventListener("click", checkPasswords);


function checkPasswords () {
    if (password1.value != password2.value) {
        noMatch.style.visibility = "visible";
        password1.style.borderColor = "rgb(150, 8, 8)";
        password2.style.borderColor = "rgb(150, 8, 8)";
        password1.setCustomValidity(" ");

    }
    else {
        password1.setCustomValidity("");
        password2.setCustomValidity("");
    }
};
