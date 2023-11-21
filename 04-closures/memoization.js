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

var isOddOrEven = (function(){
    var cache = {}
    function isOddOrEven(no){
        if (cache.hasOwnProperty(no)){
            return cache[no]
        }
        console.log('processing : ', no)   
        cache[no] = nos % 2 === 0 ? 'even' : 'odd';
        return cache[no];
    }
    return isOddOrEven;
})()


// Creating an utility function for memoization

function memoize(fn){
    var cache = {}
    return function (no){
        if (cache.hasOwnProperty(no)){
            return cache[no]
        }
        console.log('processing : ', no)   
        cache[no] = fn(no)
        return cache[no];
    }
}

var isOddOrEven = memoize(function(no){
    return no % 2 === 0 ? 'even' : 'odd'
})

var isPrime = memoize(function(no){
    for (var i = 2; i <= (no/2); i++){
        if (no % 2 === 0){
            return false
        }
    }
    return true
})

