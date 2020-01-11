function cekPrima(n){
    let max = Math.sqrt(n);
    for(let i=2;i<=max;i++){
        if(n % i == 0)
        return false;
    }
    return true;
}

function segitiga(batas){
    let result='';
    let btsAngka='';
    let segi3='';

    if (batas<0||batas>10){
        result = 'Masukkan Angka Antara 0-10';
    }else{
        let btsAngka=233;
        if (batas==9){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            let s5 = result.toString().slice(26,40);
            let s6 = result.toString().slice(41,59);
            let s7 = result.toString().slice(59,82);
            let s8 = result.toString().slice(83,110);
            let s9 = result.toString().slice(111,142);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4+'\r\n'+s5+'\r\n'+s6+'\r\n'+s7+'\r\n'+s8+'\r\n'+s9;
        }
        if (batas==8){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            let s5 = result.toString().slice(26,40);
            let s6 = result.toString().slice(41,59);
            let s7 = result.toString().slice(59,82);
            let s8 = result.toString().slice(83,110);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4+'\r\n'+s5+'\r\n'+s6+'\r\n'+s7+'\r\n'+s8;
        }
        if (batas==7){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            let s5 = result.toString().slice(26,40);
            let s6 = result.toString().slice(41,59);
            let s7 = result.toString().slice(59,82);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4+'\r\n'+s5+'\r\n'+s6+'\r\n'+s7;
        }
        if (batas==6){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            let s5 = result.toString().slice(26,40);
            let s6 = result.toString().slice(41,59);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4+'\r\n'+s5+'\r\n'+s6;
        }
        if (batas==5){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            let s5 = result.toString().slice(26,40);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4+'\r\n'+s5;
        }
        if (batas==4){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            let s4 = result.toString().slice(14,25);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3+'\r\n'+s4;
        }
        if (batas==3){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            let s3 = result.toString().slice(6,13);
            segi3 = s1+'\r\n'+s2+'\r\n'+s3;
        }
        if (batas==2){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            let s2 = result.toString().slice(2,5);
            segi3 = s1+'\r\n'+s2;
        }
        if (batas==1){
            for (let angka=2; angka<=btsAngka; angka++){
                if(cekPrima(angka)==true){
                    result += angka+' ';
                }
            }
            let s1 = result.toString().slice(0,1);
            segi3 = s1;
        }
       
    }
    return segi3;
}


console.log(segitiga(9));