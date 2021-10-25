document.querySelectorAll(".controls-wrapper input").forEach((el) => {
    el.addEventListener("keyup", (event) => {
        if (!event.target.value) {
            event.target.classList.add("error");
        } else {
            event.target.classList.remove("error");
        }

        if (event.target.type === "email") {
            if (!event.target.validity.valid) {
                event.target.classList.add("error");
            } else {
                event.target.classList.remove("error");
            }
        }
    })
});