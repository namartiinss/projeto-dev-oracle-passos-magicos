const inputVerificar = document.querySelector("#checkbox-menu");

inputVerificar.addEventListener("click", () => {
    if (inputVerificar.checked == true) {
        document.querySelector("header").style.left = "0%";
    } else {
        document.querySelector("header").style.left = "100%";
    }
});

