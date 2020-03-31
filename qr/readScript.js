function getQR() {
	var url_string = window.location.href.toString().split("?");

	return url_string[2];
}
function getName() {
    var url_string = window.location.href.toString().split("?");

    return url_string[1];
}

function getInfo() {
    return "otpauth://totp/" + getName() + "?secret=" + getQR();
}

function setH() {
    var elt = document.getElementById("wpbody-content")
    .getElementsByClassName("wrap")[0].getElementsByTagName('h1')[0];

    elt.innerHTML = 'Code: ' + getQR();
}

function hideBody() {
  var x = document.getElementById("image-wrap");
  x.style.display = "none";
}
