function shoppingTime(memberId, money) {
    var shopping = {}

    if (memberId === '' || money !== Number(money)){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    
    var stacattu = 1500000;
    var zoro = 500000;
    var hnm = 250000;
    var uniklooh = 175000;
    var casingHandphone = 50000;
    var change = money;

    shopping['memberId'] = memberId;    
    shopping['money'] = money;

    if (money<casingHandphone){
      return 'Mohon maaf, uang tidak cukup'
    }

    if (money < uniklooh && money >= casingHandphone){
      shopping['listPurchased'] = ['Casing Handphone']
      change-=casingHandphone
      shopping['changeMoney'] = change;
      return shopping;
    }
    if (money < hnm && money >= uniklooh){
      shopping['listPurchased'] = ['Sweater Uniklooh', 'Casing Handphone']
      chenge-=uniklooh-casingHandphone;
      shopping['changeMoney'] = change;
      return shopping;
    }
    if (money < zoro && money >= hnm){
      shopping['listPurchased'] = ['Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
      change-=hnm-uniklooh-casingHandphone;
      shopping['changeMoney'] = change;
      return shopping
    }
    if (money <stacattu && money>= zoro){
      shopping['listPurchased'] = ['Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'];
      change-=zoro-hnm-uniklooh-casingHandphone;
      shopping['changeMoney'] = change;
      return shopping
    }
    else {
      shopping['listPurchased'] = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
      change = money -  stacattu-zoro-hnm-uniklooh-casingHandphone;
      shopping['changeMoney'] = change;
      return shopping;
    }

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja