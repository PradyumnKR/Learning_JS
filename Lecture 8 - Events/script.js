body = document.body;
mode = document.getElementById('Mode');
buttonn = document.querySelector('button');

buttonn.addEventListener("click", function () {
    current_Mode = mode.innerText;
    if (current_Mode === "Dark Mode") {
        body.classList.remove("darkmode");
        mode.innerText = "Light Mode";
    }
    if (current_Mode === "Light Mode") {
        body.classList.add("darkmode");
        mode.innerText = "Dark Mode";
    }
});