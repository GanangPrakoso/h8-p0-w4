// function angkaPrima(angka) {
//   if (angka===1){
//     return false
//   }
//   else {
//     for (let i=2; i<angka; i++){
//       if (angka%i===0){
//         return false;
//       }
//     }
//     return true;
//   }
// }

// // TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false

// function fpb(angka1, angka2) {
//   var faktor1 = [];
  
//   for (let i=1; i<angka1; i++){
//     if (angka1%i==0 && angka2%i === 0){
//       faktor1.push(i);
//     }
//   }
//   return faktor1[faktor1.length-1];
// }

// // TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1

// function cariMedian(arr) {
//   let tengah1 = arr[(arr.length/2)-1]
//   let tengah2 = arr[(arr.length/2)]
//   let med = 0
//   if (arr.length%2 !== 0){
//     med = arr[(arr.length-1)/2]
//     return med;
//   } else {
//     med = (tengah1+tengah2)/2
//     return med;
//   }
// }

// // TEST CASES
// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 7
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5

// function cariModus(arr) {
//   let mod = []
//   let indexMod = 0;
//   let frekuensiTerbanyak = 0;

//   for (let i=0; i<=arr.length-1; i++){
//     let frekuensi = 0;
//     for (let j=0; j<=arr.length-1; j++){
//       if (arr[i]===arr[j] && i!==j){
//         frekuensi++
//         mod.push(arr[i])
//         if (frekuensi>frekuensiTerbanyak){
//           frekuensiTerbanyak = frekuensi;
//           indexMod = i;
//         }
//       }
//     }
//   }
// console.log(mod);
  
//   if (mod.length<1){
//     return -1;
//   }
  
//   let cekMod = 0;
//   for (let k=0; k<=arr.length-1; k++){
//     cekMod+=arr[k];
//     if (cekMod/arr.length==arr[k]){
//       return -1
//     }
//   }

//   return arr[indexMod]
// }

// // TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1

// function digitPerkalianMinimum(angka) {
//   let faktor = [];
//   let minimum = 0
//   let joinFaktor = []

//   for (let i=0; i<=angka; i++){
//     let temp = [];
//     for (let j=0; j<=angka; j++){
//       if (i*j===angka){
//         temp.push(i,j);
//         faktor.push(temp)
//       }
//     }
//   }
//   for (let k=0; k<=faktor.length-1; k++){
//    joinFaktor.push(faktor[k].join(''))

//   }
//   for (let l=0; l<=joinFaktor.length-1; l++){
//     if (l===0){
//       minimum = joinFaktor[l].length;
//     }
//     else if (minimum>joinFaktor[l].length){
//       minimum = joinFaktor[l].length
//     }
//   }
//   return minimum;
  
// }
// // TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2

// function tukarBesarKecil(kalimat) {
//   let alay = '';

//   for (let i=0; i<=kalimat.length-1; i++){
//     if (kalimat[i]===kalimat[i].toLowerCase()){
//       alay += kalimat[i].toUpperCase();
//     }
//     else {
//       alay += kalimat[i].toLowerCase();
//     }
//   }
//   return alay;
// }

// // TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

function checkAB(num) {
  let joinNum = num.split(' ').join('')

  for (let i=0; i<=joinNum.length-1; i++){
    if (joinNum[i]==='a' || joinNum[i]=='b'){
      if (joinNum[i+3]=='a' || joinNum[i+3]=='b'){
        return true
      }
      }
    }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false