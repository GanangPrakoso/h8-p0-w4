function changeMe(arr) {
    var actor = {};
    var currentYear = 2019;
    for (let i=0; i<=arr.length-1; i++){
        actor['firstName'] = arr[i][0];
        actor['lastName'] = arr[i][1]; 
        actor['gender'] = arr[i][2];
        if (arr[i][3]!==Number(arr[i][3])){
            actor['age'] = 'Invalid Birth Year';
        } else {
            actor['age'] = currentYear-(arr[i][3]);
        }
        console.log((i+1)+'. '+actor['firstName']+' '+actor['lastName']+':');
        console.log(actor);
              
    }
  }
  
  
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""