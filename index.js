function toggler() {
    var btn = document.getElementById("toggle");
    if (btn.className === "dropdown-menuz") {
        btn.className = "dropdown-menu";
    } else {
        btn.className = "dropdown-menuz";
    }
}