
let xhttp = new XMLHttpRequest();
let bouton = document.getElementById('btn');
let input = document.getElementById('input');
ville = input.value;


xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsonTab = this.responseText;
        document.getElementById('main').innerHTML = jsonTab;
    }
};

bouton.addEventListener("click", function () {
    ville = input.value;
    console.log(ville);
    xhttp.open("GET", "ajax.php?ville="+ville, true);
    xhttp.send();
});


xhttp.open("GET", "ajax.php?ville="+ville, true);
xhttp.send();