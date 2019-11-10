function highestScore (students) {
  let high = {};
  let cekKelas = [];

  if (students.length<1){
      console.log('');
      return high;
  }

  for (let i=0; i<=students.length-1; i++){
      let kelas = students[i].class;
      if (cekKelas.includes(kelas)){
          //do nothing
      } else {
          cekKelas.push(kelas)
      }
  }
  
  for (let j=0; j<=cekKelas.length-1; j++){
      let highest = {};
      let highScore = 0;
      for (let k=0; k<=students.length-1; k++){
          if (cekKelas[j]===students[k].class && highScore<students[k].score){
              highest.name = students[k].name;
              highest.score = students[k].score;
              highScore = students[k].score;
          }
          // console.log(highest);
          
          high[cekKelas[j]] = highest;
      }
  }
  console.log('');
  return high
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