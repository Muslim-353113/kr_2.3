const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        document.body.style.backgroundColor =
            event.target.textContent;
    }
});