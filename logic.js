const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-confirm");
const button = document.querySelector("button");
const noMatch = document.querySelector("#no-match");
const inputs = document.querySelectorAll("input");


inputs.forEach(e => {
    e.addEventListener("input", () => {
        if(e.value.length == 0) {
            e.value = "";
        }
    })
});

button.addEventListener("click", checkPasswords);


function checkPasswords () {
    if (password1.value != password2.value) {
        noMatch.style.visibility = "visible";
        password1.style.borderColor = "rgb(150, 8, 8)";
        password2.style.borderColor = "rgb(150, 8, 8)";
    }
};
