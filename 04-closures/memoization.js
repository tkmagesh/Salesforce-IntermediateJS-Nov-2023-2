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

// fn = a function that operates on ONLY ONE argument
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

//this does not work.  Modify the 'memoize' function to make this work
function memoize(fn){
    var cache = {}
    return function (){
        var key = JSON.stringify(arguments)
        if (cache.hasOwnProperty(key)){
            return cache[key]
        }
        console.log('processing : ', key)   
        cache[key] = fn.apply(this, arguments)
        return cache[key];
    }
}
var memoizedAdd = memoize(function(x,y){
    return x + y
});

// NO NEED TO KEEP the cache as PRIVATE
function memoize(fn){
    fn['cache'] = fn['cache'] || {}
    return function (){
        var key = JSON.stringify(arguments)
        if (fn.cache.hasOwnProperty(key)){
            return fn.cache[key]
        }
        console.log('processing : ', key)   
        fn.cache[key] = fn.apply(this, arguments)
        return fn.cache[key];
    }
}