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

    // async 
    function addAsync(x,y){
        console.log(`   [@addAsync] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@addAsync] returning result`)
            return result;
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@addAsyncClient] invoking the service`)
        const result = addAsync(x,y)
        console.log(`[@addAsyncClient] result : ${result}`)
    }

    window['addAsyncClient'] = addAsyncClient;

})()