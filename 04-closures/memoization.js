function isPrime(no){
    console.log('processing : ', no)
    for (var i = 2; i <= (no/2); i++){
        if (no % 2 === 0)
            return false;
    }
    return true;
}