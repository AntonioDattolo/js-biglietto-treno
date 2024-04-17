

function elaborated(){
    const pkm = 0.20
    let hkm = document.getElementById("how-km").value;
    var hyears = document.getElementById("hm-years").value;
    let biglietto = hkm * pkm
    const minor = biglietto / 100 * 20
    const senior = biglietto / 100 * 40
    if (hyears >=18 && hyears < 65){
        let biglietto = hkm * pkm 
        document.getElementById("titi").innerHTML ="il prezzo è" + biglietto
    }else if (hyears < 18){
    
        let bigliettoMinor = biglietto - minor
        document.getElementById("titi").innerHTML ="il prezzo è" + bigliettoMinor
    }else if (hyears >= 65){
    
        let bigliettoSenior = biglietto - senior
        document.getElementById("titi").innerHTML ="il prezzo è " + bigliettoSenior
    }
    
}
