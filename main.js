
console.log("hi man....");

const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email");

    if (!email.value) {
        const emailError = document.querySelector("#emailError");
        emailError.classList.add("visible");
        email.classList.add("invalid");
    } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            const emailError = document.querySelector("#emailError");
            emailError.textContent = "Please provide a valid email address";
            emailError.classList.add("visible");
            email.classList.add("invalid");
            email.value = "";
            email.placeholder = "example@email/com";
            console.log(email.placeholder);    
        }
    }
});