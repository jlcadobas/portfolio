
    const button = document.getElementById("showNav");
    const yellow = document.querySelector(".yellow");
    let isHidden = false;

    button.addEventListener("click", function() {

        if (isHidden) {
            yellow.classList.remove("hide");
            yellow.classList.add("show");
            button.textContent = ">";
            button.style.left = "68%";
        }

        else {
            yellow.classList.remove("show");
            yellow.classList.add("hide");
            button.textContent = "<";
            button.style.left = "3%";
        }

        isHidden = !isHidden;
    })