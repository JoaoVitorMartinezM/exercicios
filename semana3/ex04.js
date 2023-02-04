
const d = new Date().setSeconds = 30;
let i = parseInt(d.toLocaleString());



setInterval(myTimer, 1000);
    

function myTimer() {
    document.getElementById("demo").innerHTML = `<h1>${i}</h1>`;
    i--;
}

