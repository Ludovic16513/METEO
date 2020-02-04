
let xhttp = new XMLHttpRequest();
let bouton = document.getElementById('btn');
let input = document.getElementById('input');
let ville = input.value;
const dateDiv = document.getElementById('date');
const date = new Date();


//display date
dateDiv.innerHTML =(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());

xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let obj = JSON.parse(this.responseText);
        document.getElementById('temp').innerHTML = Math.round(obj['main']['temp']) + '°';
        document.getElementById('max').innerHTML = "Temps.max" + "  "+ Math.round(obj['main']['temp_max']) + '°';
        document.getElementById('min').innerHTML = "Temps.min" + "  "+Math.round(obj['main']['temp_min']) + '°';
        document.getElementById('press').innerHTML = "Press.atmophérique" + "  "+Math.round(obj['main']['pressure'])
        document.getElementById('wind').innerHTML ="Vitesse du vent" + "  "+ Math.round(obj['wind']['speed']) + ' km/h';
        document.getElementById('hum').innerHTML = "Humidité" + "  "+Math.round(obj['main']['humidity']) + '%';
        document.getElementById('long').innerHTML = "Longitude" + "  "+Math.round(obj['coord']['lon']) +" " + " " + " " + "Latitude" + " " +Math.round(obj['coord']['lat']) + '';
    }
};

bouton.addEventListener("click", function () {
   let ville = input.value;
    xhttp.open("GET", "ajax.php?ville="+ville, true);
    xhttp.send();
});




xhttp.open("GET", "ajax.php?ville="+ville, true);
xhttp.send();