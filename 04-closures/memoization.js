var isPrime = (function(){
    var cache = {}
    function isPrime(no){
        if (cache.hasOwnProperty(no)){
            return cache[no]
        }
        console.log('processing : ', no)   
        for (var i = 2; i <= (no/2); i++){
            if (no % 2 === 0){
                cache[no] = false;
                return cache[no];
            }
        }
        cache[no] = true;
        return cache[no];
    }
    return isPrime;
})()