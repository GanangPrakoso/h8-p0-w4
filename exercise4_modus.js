function cariModus(arr) {

    let frekuensiTerbanyak = 0;
    let modus = 0;

    for (let i=0; i<=arr.length-1; i++){
        let frekuensi = 0;
        for (let j=i; j<=arr.length-1; j++){
            if (arr[i]===arr[j] && i!==j){
                frekuensi++
                if (frekuensi>frekuensiTerbanyak){
                    frekuensiTerbanyak = frekuensi
                    modus = arr[i];
                }
            }
        }
    }
    if (frekuensiTerbanyak===0){
        return -1
    }

    let totalArray = 0;
    for (let k=0; k<=arr.length-1; k++){
        totalArray+=arr[k]
    }
    if (totalArray/arr[0]==arr.length){
        return -1
    }
    return modus
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1