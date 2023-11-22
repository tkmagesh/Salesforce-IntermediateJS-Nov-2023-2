function doWork(){
    for(let i = 1; i <= 10000; i++){
        for(let j = 0; j < 5000; j++){
            for(let k = 0; k < 1000; k++){
            }
        }
        if (i % 100 === 0){
            const percentCompleted = (i /10000) * 100
            self.postMessage({type : 'progress',  percentCompleted })
        }            
    }
}

self.addEventListener('message', function(evtArg){
    if (evtArg.data.type === 'start'){
        doWork();
        self.postMessage({type : 'completed'})
    } else {
        console.log('unknown message : ', evtArg.data)
    }
})