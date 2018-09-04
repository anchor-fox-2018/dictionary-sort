function dictionarySort(arrOfWord){
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    




    var hasil = []
    var idx = 0
    for(var i = 0;i < abc.length;i++){
        for(var j = 0;j < arrOfWord.length;j++){
            if(abc[i] === arrOfWord[j][idx]){
                hasil.push(arrOfWord[j])
            }
        }
    }

    //var sortingBelakang = 0
    for(var i = 1;i < hasil.length;i++){  
        // var idx = 0;      
        if(hasil[i-1][0] === hasil[i][0]){
            var hasilTukar = []
            var hurufKedua = [hasil[i-1],hasil[i]];
            // for(var j = 0;j < abc.length;j++){
            //     for(var k = 0;k < hurufKedua.length;k++){
            //         if(abc[j] === hurufKedua[k][1]){
            //             //console.log(hurufKedua)
            //             hasilTukar.push(hurufKedua[k])
            //         }
            //     }
            // }
            //console.log(hurufKedua)
            for(var j = 0;j < abc.length;j++){
                for(var k = 0;k < hurufKedua.length;k++){
                    //console.log(hurufKedua[k],'terahir',hurufKedua[k][hurufKedua[k].length-1])
                    if(abc[j] === hurufKedua[k][hurufKedua[k].length-1]||abc[j] === hurufKedua[k][1]){
                        //console.log(hurufKedua[k][hurufKedua.length+1])
                        hasilTukar.push(hurufKedua[k])
                    }
                }
            }
            //console.log(hurufKedua)
            hasil.splice(i-1,2,hasilTukar[0],hasilTukar[1]);
           // console.log(idx)
        }        
    }
    return hasil
}
//var arrOfWord = ['anggi','angga','ani','adi'];
//var arrOfWord = ['makan','duduk','tidur','terbang'];
//console.log(dictionarySort(arrOfWord))