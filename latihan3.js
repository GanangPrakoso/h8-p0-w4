// function angkaPrima(angka) {
//     if (angka<=1){
//         return false
//     }
//     for (i=2; i<angka; i++){
//         if (angka%i===0){
//             return false;
//         }
//     }
//     return true
//   }
  
//   // TEST CASES
//   console.log(angkaPrima(3)); // true
//   console.log(angkaPrima(7)); // true
//   console.log(angkaPrima(6)); // false
//   console.log(angkaPrima(23)); // true
//   console.log(angkaPrima(33)); // false

// function cariMedian(arr) {
//     let median1 = arr[(arr.length-1)/2];
//     let med1 = arr[arr.length/2];
//     let med2 = arr[(arr.length/2)-1];
//     let mediyansss = (med1+med2)/2

//     if (arr.length%2!==0){
//         mediyansss = median1;
//     }
//     else {
//         return mediyansss
//     }
//     return mediyansss
//   }
  
//   // TEST CASES
//   console.log(cariMedian([1, 2, 3, 4, 5])); // 3
//   console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
//   console.log(cariMedian([3, 4, 7, 6, 10])); // 7
//   console.log(cariMedian([1, 3, 3])); // 3
//   console.log(cariMedian([7, 7, 8, 8])); // 7.5

// function cariModus(arr) {

//     let frekuensiTerbanyak = 0;
//     let modus = 0;

//     for (let i=0; i<=arr.length-1; i++){
//         let frekuensi = 0;
//         for (let j=i; j<=arr.length-1; j++){
//             if (arr[i]===arr[j] && i!==j){
//                 frekuensi++
//                 if (frekuensi>frekuensiTerbanyak){
//                     frekuensiTerbanyak = frekuensi
//                     modus = arr[i];
//                 }
//             }
//         }
//     }
//     if (frekuensiTerbanyak===0){
//         return -1
//     }

//     let totalArray = 0;
//     for (let k=0; k<=arr.length-1; k++){
//         totalArray+=arr[k]
//     }
//     if (totalArray/arr[0]==arr.length){
//         return -1
//     }
//     return modus
//   }
  
//   // TEST CASES
//   console.log(cariModus([10, 4, 5, 2, 4])); // 4
//   console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
//   console.log(cariModus([7, 7, 7, 7, 7])); // -1

// function ubahHuruf(kata) {
//     let kataBalik = '';

//     for (let i=0; i<=kata.length-1; i++){
//         if (kata[i]=='a'){
//             kataBalik+='b'
//         }
//         if (kata[i]=='b'){
//             kataBalik+='c'
//         }
//         if (kata[i]=='c'){
//             kataBalik+='d'
//         }
//         if (kata[i]=='d'){
//             kataBalik+='e'
//         }
//         if (kata[i]=='e'){
//             kataBalik+='f'
//         }
//         if (kata[i]=='f'){
//             kataBalik+='g'
//         }
//         if (kata[i]=='g'){
//             kataBalik+='h'
//         }
//         if (kata[i]=='h'){
//             kataBalik+='i'
//         }
//         if (kata[i]=='i'){
//             kataBalik+='j'
//         }
//         if (kata[i]=='j'){
//             kataBalik+='k'
//         }
//         if (kata[i]=='k'){
//             kataBalik+='l'
//         }
//         if (kata[i]=='l'){
//             kataBalik+='m'
//         }
//         if (kata[i]=='m'){
//             kataBalik+='n'
//         }
//         if (kata[i]=='n'){
//             kataBalik+='o'
//         }
//         if (kata[i]=='o'){
//             kataBalik+='p'
//         }
//         if (kata[i]=='p'){
//             kataBalik+='q'
//         }
//         if (kata[i]=='q'){
//             kataBalik+='r'
//         }
//         if (kata[i]=='r'){
//             kataBalik+='s'
//         }
//         if (kata[i]=='s'){
//             kataBalik+='t'
//         }
//         if (kata[i]=='t'){
//             kataBalik+='u'
//         }
//         if (kata[i]=='u'){
//             kataBalik+='v'
//         }
//         if (kata[i]=='v'){
//             kataBalik+='w'
//         }
//         if (kata[i]=='w'){
//             kataBalik+='x'
//         }
//         if (kata[i]=='x'){
//             kataBalik+='y'
//         }
//         if (kata[i]=='y'){
//             kataBalik+='z'
//         }
//         if (kata[i]=='z'){
//             kataBalik+='a'
//         }
//     }
//     return kataBalik;
//   }
  
//   // TEST CASES
//   console.log(ubahHuruf('wow')); // xpx
//   console.log(ubahHuruf('developer')); // efwfmpqfs
//   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
//   console.log(ubahHuruf('keren')); // lfsfo
//   console.log(ubahHuruf('semangat')); // tfnbohbu

// function digitPerkalianMinimum(angka) {
//     let factor = [];
//     for (let i=1; i<=angka; i++){
//         for (let j=1; j<=angka; j++){
//             if (i*j===angka){
//                 factor.push([i,j])
//             }
//         }
//     }
//     let joinFactor = []
//     for (let k=0; k<=factor.length-1; k++){
//         joinFactor.push(factor[k].join(''))
//     }
//     let cekDigit = 0;
//     for (let l=0; l<=joinFactor.length-1; l++){
//         if (l==0){
//             cekDigit = joinFactor[l].length;
//         } else if (cekDigit>joinFactor[l].length){
//             cekDigit = joinFactor[l].length
//         }
//     }
//     return cekDigit;
//   }
  
//   // TEST CASES
//   console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2

// function urutkanAbjad(str) {
//     let urut = str.split('').sort().join('')
//     return urut
//   }
  
//   // TEST CASES
//   console.log(urutkanAbjad('hello')); // 'ehllo'
//   console.log(urutkanAbjad('truncate')); // 'acenrttu'
//   console.log(urutkanAbjad('developer')); // 'deeeloprv'
//   console.log(urutkanAbjad('software')); // 'aeforstw'
//   console.log(urutkanAbjad('aegis')); // 'aegis'

// function tukarBesarKecil(kalimat) {
//     let alay = '';
//     for (let i=0; i<=kalimat.length-1; i++){
//         if (kalimat[i]===kalimat[i].toLowerCase()){
//             alay+=kalimat[i].toUpperCase();
//         }
//         else {
//             alay+=kalimat[i].toLowerCase();
//         }
//     }
//     return alay
//   }
  
//   // TEST CASES
//   console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
//   console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
//   console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
//   console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
//   console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// function checkAB(num) {
//     let numJoin = num.split(' ').join('');
    
//     for (let i=0; i<=numJoin.length-1; i++){
//         if (numJoin[i]=='a'){
//             if (numJoin[i+3]=='b'){
//                 return true;
//             }
//         }
//         if (numJoin[i]=='b'){
//             if (numJoin[i+3]=='a'){
//                 return true;
//             }
//         }
//     }
//     return false
//   }
  
//   // TEST CASES
//   console.log(checkAB('lane borrowed')); // true
//   console.log(checkAB('i am sick')); // false
//   console.log(checkAB('you are boring')); // true
//   console.log(checkAB('barbarian')); // true
//   console.log(checkAB('bacon and meat')); // false

// function changeMe(arr) {

//     if (arr.length<1){
//         console.log('');
        
//         console.log([]);
        
//     }

//     for (let i=0; i<=arr.length-1; i++){
//         let arrObj = {}
//         arrObj.firstName = arr[i][0];
//         arrObj.lastName = arr[i][1];
//         arrObj.gender = arr[i][2];
//         if (arr[i].length<4){
//             arrObj.age = 'Invalid Birth Year'
//         }
//         else {
//             arrObj.age = 2019-arr[i][3];
//         }
//         console.log('');
        
//         console.log(i+1+'. '+arrObj.firstName+' '+arrObj.lastName);
//         console.log(arrObj); 
//     }
//   }
  
//   // TEST CASES
//   changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
//   // 1. Christ Evans:
//   // { firstName: 'Christ',
//   //   lastName: 'Evans',
//   //   gender: 'Male',
//   //   age: 37 }
//   // 2. Robert Downey:
//   // { firstName: 'Robert',
//   //   lastName: 'Downey',
//   //   gender: 'Male',
//   //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""

// function shoppingTime(memberId, money) {
//     if (memberId===''){
//         return 'Mohon maaf, toko X hanya berlaku untuk member saja'
//     }
//     if (money===undefined){
//         return 'Mohon maaf, toko X hanya berlaku untuk member saja'
//     }
//     if (money<50000){
//         return 'Mohon maaf, uang tidak cukup'
//     }

//     let hedonism = {};
//     let belonjo = [];
//     const barang = [['Sepatu Stacattu', 1500000],['Baju Zoro', 500000],['Baju H&N', 250000],['Sweater Uniklooh', 175000],['Casing Handphone', 50000]]

//     let sisaUang = money;

//     hedonism.memberId = memberId;
//     hedonism.money = money;
    
//     for (let i=0; i<=barang.length-1; i++){
//         if (sisaUang>=barang[i][1]){
//             belonjo.push(barang[i][0]);
//             sisaUang-=barang[i][1]
//         }
//         // if (sisaUang<50000){
//         //     break;
//         // }
//     }
//     hedonism.listPurchased = belonjo;
//     hedonism.changeMoney = sisaUang;

//     return hedonism;
//   }
  
//   // TEST CASES
//   console.log(shoppingTime('1820RzKrnWn08', 2475000));
//     //{ memberId: '1820RzKrnWn08',
//     // money: 2475000,
//     // listPurchased:
//     //  [ 'Sepatu Stacattu',
//     //    'Baju Zoro',
//     //    'Baju H&N',
//     //    'Sweater Uniklooh',
//     //    'Casing Handphone' ],
//     // changeMoney: 0 }
//   console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
//   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
//   console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
//   console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// function deepSum (arr) {
//     if (arr.length<1){
//         return 'No Number!'
//     }

//     let deepThroat = 0;

//     for (let i=0; i<=arr.length-1; i++){
//         for (let j=0; j<=arr[i].length-1; j++){
//             for (let k=0; k<=arr[i][j].length-1; k++){
//                 deepThroat+=arr[i][j][k]
//             }
//         }
//     }
//     return deepThroat;
//   }
  
//   //TEST CASE
//   console.log(deepSum([[[4, 5, 6],[9, 1, 2, 10],[9, 4, 3]]  ,  [[4, 14, 31], [9, 10, 18, 12, 20],[1, 4, 90]] , [[2, 5, 10], [3, 4, 5],[2, 4, 5, 10]]])); 
//   // 316
  
//   console.log(deepSum([
//     [
//       [20, 10],
//       [15],
//       [1, 1]
//     ],
//     [
//       [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//       [2],
//       [9, 11]
//     ],
//     [
//       [3, 5, 1],
//       [1, 5, 3],
//       [1]
//     ],
//     [
//       [2]
//     ]
//   ])); // 156
  
//   console.log(deepSum([])); // No number

// function naikAngkot(arrPenumpang) {
//     rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//     if (arrPenumpang.length<1){
//         return [];
//     }
    
//     let tarif = 2000;
//     let ongkos = 0
//     let arrOutput = [];

//     for (let i=0; i<=arrPenumpang.length-1; i++){
        
//         let objOutput = {};
//         objOutput.penumpang = arrPenumpang[i][0];
//         objOutput.naikDari = arrPenumpang[i][1];
//         objOutput.tujuan = arrPenumpang[i][2]

//         for (let j=0; j<=rute.length-1; j++){
//             if (objOutput.naikDari==rute[j]){
//                 for (let k=0; k<=rute.length-1; k++){
//                     if (objOutput.tujuan==rute[k]){
//                         ongkos = (k-j)*tarif;
//                         objOutput.bayar = ongkos;                        
//                     }
//                 }
//             }
//         }
//         arrOutput.push(objOutput)
//     }   
//     return arrOutput;
//   }
  
//   //TEST CASE
//   console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
//   // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
//   console.log(naikAngkot([])); //[]

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
            console.log(highest);
            
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