function toggler() {
    var btn = document.getElementById("toggle");
    if (btn.className === "dropdown-menuz") {
        btn.className = "dropdown-menu";
    } else {
        btn.className = "dropdown-menuz";
    }
}

function forDown() {
    var downbtn = document.getElementById("downAnchor");
    for (;;) {
        if (downbtn.href === "#1") {
            window.location.href = "#2";
            console.log(downbtn.href);
        } else if (downbtn.href === "#2") {
            window.location.href = "#3";
        } else {
            window.location.href = "#1";
            downbtn.href = "#1";
        }
    }
}

function gotothree() {
    window.location.href = "#3"
}