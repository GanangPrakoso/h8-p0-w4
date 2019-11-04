function cariModus(arr) {
    var modus = [];

    for(let i=0; i<=arr.length-1; i++){
        for (let j=i+1; j<=arr.length-1; j++){
            if (arr[i]==arr[j]){
                modus.push(arr[j]);
            }
        }
    }
    for (let k=0; k<=modus.length-1; k++){
        if (modus[k]==modus[k+1]){
            return -1
        }
    }
    if (modus.length>=1){
        return modus[0]
    } else if (modus.length<1){
        return -1
    }  
  }
  
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1