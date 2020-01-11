function sort_array(data){
   let result = '';
    data.length;
    let Arry0 =  data[0].sort();;
    let Arry1 =  data[1].sort();;
    let panjang0 = Arry0.length;
    let panjang1 = Arry1.length;
    
    if(panjang0 < panjang1){
        result = [Arry0,Arry1]
    }else{
        result = [Arry1,Arry0]
    }
    if(data.length == 3){
        let Arry2='';
        Arry2=data[2].sort();
        let panjang2 = Arry2.length;
        if(panjang0<panjang1 && panjang0<panjang2){
            if(panjang1<panjang2){
                result = [Arry0,Arry1,Arry2]
            }else{
                result = [Arry0,Arry2,Arry1]
            }
        }
        if(panjang1<panjang0 && panjang1<panjang2){
            if(panjang0<panjang2){
                result = [Arry1,Arry0,Arry2]
            }else{
                result = [Arry0,Arry2,Arry0]
            }
        }
        if(panjang2<panjang0 && panjang2<panjang1){
            if(panjang0<panjang1){
                result = [Arry2,Arry0,Arry1]
            }else{
                result = [Arry2,Arry1,Arry0]
            }
        }
    }
    return result;
}

let data = [
    ['T','S','Q','P','R'],
    ['W','U','V']
];

let datalain = [
    ['M','L','O','N'],
    ['T', 'S', 'Q', 'P', 'R'],
    ['W', 'U', 'V']
];

console.log(sort_array(datalain));
console.log(sort_array(data));