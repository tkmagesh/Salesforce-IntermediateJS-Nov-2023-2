(() => {
    // sync 
    function addSync(x,y){
        console.log(`   [@addSync] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@addSync] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@addSyncClient] invoking the service`)
        const result = addSync(x,y)
        console.log(`[@addSyncClient] result : ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    // async (using callback)
    function addAsyncCallback(x,y, callback){
        console.log(`   [@addAsyncCallback] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@addAsyncCallback] returning result`)
            callback(result);
        }, 5000);
    }

    function addAsyncCallbackClient(x,y){
        console.log(`[@addAsyncCallbackClient] invoking the service`)
        addAsyncCallback(x,y, function(result){
            console.log(`[@addAsyncCallbackClient] result : ${result}`)
        })
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

    // async (using Promise)
    function addAsyncPromise(x,y){
        console.log(`   [@addAsyncPromise] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y
                console.log(`   [@addAsyncPromise] returning result`)
                // how to communicate the result to the promise
                resolveFn(result)
            }, 5000);
        })
        
        return p;
    }

    window['addAsyncPromise'] = addAsyncPromise;
    
    function addAsyncPromiseClient(x,y){
        console.log(`[@addAsyncPromiseClient] invoking the service`)
        const p = addAsyncPromise(x,y);
        p.then((result) => {
            console.log(`[@addAsyncPromiseClient] result : ${result}`)
        })
    }
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
    
})()