function angkaPrima(angka) {
    if (angka == 1){
        return false
    } else if (angka==2){
        return true
    } else {
        for (let i=3; i<angka; i++){
            if (angka%i == 0){
                return false
            }
        }
        return true
    }
  }
  
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false