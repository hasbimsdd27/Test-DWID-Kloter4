function kecepatan(wktMulai,wktSelesai){
    
    let kecepatan = 3;
    
    let jamSelsai = wktSelesai.split(':')[0];
    let mntSelsai = wktSelesai.split(':')[1];
    let dtkSelsai = wktSelesai.split(':')[2];

    let dtkTotalSelesai = (jamSelsai*3600)+(mntSelsai*60)+(dtkSelsai);

    //10 menit pertama
    dtkSisa = dtkTotalSelesai-(10*60);
    kecepatan += 1;

    tambahKecepatan = Math.floor(dtkSisa/(7*60));
    kecepatan += tambahKecepatan;

    return kecepatan+' m/s';


}

console.log(kecepatan('05:25:15','09:00:00'));