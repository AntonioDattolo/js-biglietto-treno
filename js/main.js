

function elaborated(){
    let hkm = document.getElementById("how-km").value;
    var hyears = document.getElementById("hm-years").value;
    const biglietto = hkm * hyears
    document.getElementById("titi").innerHTML ="il prezzo è" + biglietto
    alert(biglietto)
}

