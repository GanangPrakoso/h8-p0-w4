function highestScore (students) {
    if (students.length<1){
        console.log('');
        
        return [];
    }

    var rapor = [];
    var classArr = [];
    var highestObj = {};

    for (let i=0; i<=students.length-1; i++){
        var tempRapor = [];
        tempRapor.push(students[i].name);
        tempRapor.push(students[i].score);
        tempRapor.push(students[i].class);
        rapor.push(tempRapor);
    }
    
    for (let j=0; j<=students.length-1; j++){
        var kelas = students[j].class;

        if (highestObj[kelas]===undefined){
            highestObj[kelas] = {};
            classArr.push(kelas);
            
            
        }
    }
    // console.log(classArr);
    // console.log(rapor);
    
    //loop untuk mencari kelas yang sama
    for (let k=0; k<=classArr.length-1; k++){
        var kelasKelas = [];

        for (let l=0; l<=rapor.length-1; l++){
            if (classArr[k]===rapor[l][2]){
                kelasKelas.push(rapor[l])
                // console.log('kelasKelas = ',kelasKelas);
                
                var high = kelasKelas[0];
                for (let m=0; m<=kelasKelas.length-1; m++){
                    if (kelasKelas[m][1] > high[0][1]){
                        high = kelasKelas[m][1];
                    }

                    // console.log('high = '+high);
                }
                for (let n=0; n<=classArr.length-1; n++){
                    if (high[2]===classArr[n]){
                        highestObj[classArr[n]]['name'] = high[0]
                        highestObj[classArr[n]]['score'] = high[1]
                    }
                }
            }
        }
    }
    console.log('');
    
    return highestObj
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}