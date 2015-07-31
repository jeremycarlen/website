window.onload = function() {
    registerButton("jc");
    registerButton("about");
    registerButton("work");
}

function registerButton(name) {
    var elem = document.getElementById(name + "-button");
    elem.addEventListener("mouseover", imageSuffix(elem, name, "_half"));
    elem.addEventListener("mouseout", imageSuffix(elem, name, "_up"));
}

function imageSuffix(elem, name, suffix) {
    return function(ev) {
        elem.src = "theme/buttons/" + name + suffix + ".png";
    }
}
