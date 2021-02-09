var stored_name = null;

function changeUsers() {
    var responses = document.getElementsByClassName('user_name');
    var amount = responses.length;

    for (var i = amount - 1; i >= 0; i--) {
        var element = responses[i];

        do {
          stored_name = prompt("No client name found\nPlease type any 'MC account name'");
        } while (stored_name == null);

        element.innerText = element.innerText.replace("{user_name}", stored_name);
    }
}

function changeUserImages() {
    var responses = document.getElementsByClassName('avatar');
    var amount = responses.length;

    for (var i = amount - 1; i >= 0; i--) {
        var element = responses[i];
        element.src = "https://cravatar.eu/avatar/" + stored_name + ".png"
    }
}

function changeCodes() {
    var responses = document.getElementsByClassName('code');
    var amount = responses.length;

    var code = null;

    for (var i = amount - 1; i >= 0; i--) {
        var element = responses[i];

        do {
          code = prompt("No recovery code found\nPlease type any random 'recovery code'");
        } while(code == null);

        element.innerText = element.innerText.replace("{code}", code);
    }
}

function loadPage() {
  changeUsers();
  changeUserImages();
  changeCodes();
}
