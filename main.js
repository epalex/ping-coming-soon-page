
console.log("hi man....");

const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email");

    if (!email.value) {
        const emailError = document.querySelector("#emailError");
        emailError.classList.add("visible");
        email.classList.add("invalid");
    }
});