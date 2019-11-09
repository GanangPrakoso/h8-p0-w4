function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    if (arrPenumpang<1){
        return [];
    }
    var penumpang = [];
    var ongkos = 2000;

    for (let i=0; i<=arrPenumpang.length-1; i++){
        var angkot = {}
        var totalOngkos = 0;
        var awal = 0;
        var akhir = 0;
        var jalur = [];

        jalur.push(arrPenumpang[i][1]);
        jalur.push(arrPenumpang[i][2]);
        
        
        for (let j=0; j<=rute.length-1; j++){
            if (rute[j]==jalur[0]){
                awal = j
            }
            if (rute[j]==jalur[1]){
                akhir = j
            }
        }
        totalOngkos = (akhir-awal)*ongkos;
        angkot['penumpang'] = arrPenumpang[i][0];
        angkot['naikDari'] = jalur[0];
        angkot['tujuan'] = jalur[1];
        angkot['bayar'] = totalOngkos;
        penumpang.push(angkot);
    }
    return penumpang;
  }
  
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]