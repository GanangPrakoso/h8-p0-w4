function digitPerkalianMinimum(angka) {
    var factor = [];
    var joinFactor = []
    

    for (let i=1; i<=angka; i++){
        for (let j=1; j<=angka; j++){
            if (i*j==angka){
                factor.push([i, j])
            }
        }
    }
    for (let k=0; k<=factor.length-1; k++){
        joinFactor.push(factor[k].join(''));
    }
    
    var panjangFactor;
    for (let l=0; l<=joinFactor.length-1; l++){
       if (l==0){
           panjangFactor = joinFactor[l].length;
       }
       else if (panjangFactor>joinFactor[l].length){
           panjangFactor = joinFactor[l].length
       }
    }
    return panjangFactor;
  }
  

  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2