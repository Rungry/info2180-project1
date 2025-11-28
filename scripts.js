/* Add your JavaScript to this file */

window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent page reload

        const email = emailInput.value.trim();

        if (email === "") {
            // No email entered
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.classList.add("error"); 
        } else {
            // Valid email entered
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.classList.add("success"); 
        }
    });

});