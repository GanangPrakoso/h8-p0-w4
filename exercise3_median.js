function cariMedian(arr) {
    var genap1 = arr[(arr.length/2)-1];
    var genap2 = arr[(arr.length/2)]
    var median = 0

    if(arr.length%2 !== 0){
        median = arr[(arr.length-1)/2]
        return median;
    }
    else {
        median = (genap1+genap2)/2
        return median;
    }
    }
  
  
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5