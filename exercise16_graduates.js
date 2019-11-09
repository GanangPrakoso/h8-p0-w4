function graduates (students) {
  var classArr = []; //untuk pembanding pembuat key dalam graduatesObj
  var graduatesObj = {}

    if (students.length<1){
      console.log();
        return graduatesObj;
    }
   

    //buat list class dalam array untuk nanti dicocokkan pada object baru

    for (let i=0; i<=students.length-1; i++){
      let classes = students[i].class;
      if (graduatesObj[classes] === undefined){
        graduatesObj[classes] = [];
        classArr.push(classes)
      }
      //ATAU
      // if (classArr.includes(classes)){
      //   //do nothing
      // }
      // else {
      //   classArr.push(classes)
      // }
      }

      for (let key in graduatesObj){
        for (let j=0; j<=students.length-1; j++){
          let classes = students[j].class;
          let score = students[j].score;
          if (classes == key && score>75){
            graduatesObj[key].push(students[j])
          }
        }
      }
      //menghapus key class dalam object agar sesuai output yang diinginkan
      for (let key in graduatesObj){
        for (let k=0; k<=graduatesObj[key].length-1; k++){
          delete graduatesObj[key][k].class
        }
      }
      console.log('');
      
      return graduatesObj;
      
    }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}