function tukarBesarKecil(kalimat) {
    var henshin = '';

    for (let i=0; i<=kalimat.length-1; i++){
        if (kalimat[i]==kalimat[i].toUpperCase()){
            henshin+= kalimat[i].toLowerCase();
        }
        else if (kalimat[i]==kalimat[i].toLowerCase()){
            henshin+= kalimat[i].toUpperCase();
        }
        else {
            henshin+=kalimat[i]
        }
  }
  return henshin;
}
  
  
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"