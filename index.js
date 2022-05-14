function toggler(){
    var btn =  document.getElementById("toggle");
    if( btn.className === "dropdown-menuz"){
        btn.className = "dropdown-menu";
    }else{
        btn.className = "dropdown-menuz";
    }
}
function forDown(){
    var downbtn = document.getElementById("downAnchor");
    switch(downbtn.href){
        case "#1":
            window.location.href="#2";
            break;
    }
}