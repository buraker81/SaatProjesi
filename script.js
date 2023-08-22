var saat = document.getElementById("saat");
var dakika = document.getElementById("dakika");
var saniye = document.getElementById("saniye");

var amA = document.getElementById("ampm");




function updateSaat(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let a = "A"
    if(h>12){
        h= h-12;
        a = "P"
    }
    h = h<10 ? "0"+ h:h;
    m = m<10 ? "0"+ m:m;
    s = s<10 ? "0"+ s:s;


    saat.innerText = h;
    dakika.innerText= m;
    saniye.innerText = s;

    amA.innerText = a;
    setTimeout(()=>{
        updateSaat();
    },1000)
    
}
updateSaat();
