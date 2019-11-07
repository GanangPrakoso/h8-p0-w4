function checkAB(num) {
    var ceknricek = num.split(' ').join('');
    
    for (let i=0; i<=ceknricek.length-1; i++){
        if (ceknricek[i]=='a' || ceknricek[i]=='b'){
            if (ceknricek[i+3]=='a' || ceknricek[i+3]=='b'){
                return true
            }
        }
    }
    return false
  }
  
  
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false