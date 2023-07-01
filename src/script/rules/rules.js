let closeRules = document.getElementById("closeRules")
let showRules = document.getElementById("showRules")
let rules = document.getElementById("rules")

showRules.onclick = function () {
    rules.style.display = "flex"
    setTimeout(() => {
        rules.classList.add("active")
    }, 1);
}

closeRules.onclick = function () {
    rules.classList.remove("active")
    setTimeout(() => {
        rules.style.display = "none"
    }, 500);
}