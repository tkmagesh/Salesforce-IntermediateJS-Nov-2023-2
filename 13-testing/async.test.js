function add(x,y){
    return x + y
}

test('add', function(){
    expect(add(1,2)).toBe(3);
});


function addAsyncCallback(x,y, callbackFn){
    console.log(`   [@Service] processing ${x} and ${y}`)
    setTimeout(function(){
        let result = x + y;
        console.log(`   [@Service] returning result`)
        callbackFn(result);
    }, 1000)
}

test("addAsyncCallback", function(done){
    addAsyncCallback(1,2, function(result){
        expect(result).toBe(3);
        done();
    })

})

 function addAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 1000)
        })
        return p;
    }

test("addAsyncPromise", function(done){
    addAsyncPromise(1,2).then(function(result){
        expect(result).toBe(3);
        done();
    })
})

function divideAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`)
        return new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if ( y === 0){
                    let e = new Error("Cannot divide by zero")
                    return rejectFn(e)
                }
                let result = x / y;
                console.log(`   [@Service] returning result`)
                resolveFn(result);
            }, 1000)
        })
        
    }

async function addAndDivide(x,y,z){
    return addAsyncPromise(x,y)
        .then(result => divideAsyncPromise(result, z))
}

test("addAndDivide", function(done){
    addAndDivide(10,20,2).then(result => {
        expect(result).toBe(15);
        done();
    })
    .catch(err => {
        
    })
}, 10000)

// mocking
function getDate(){
    return new Date().getHour()
}

function greet(userName, getHour){
    // const currentHour = getHour();
    const currentHour = 5;
    if (currentHour < 12){
        return `Hi ${userName}, Good Morning`
    } else {
        return `Hi ${userName}, Good Day`
    }
}

test('greet before 12', function(){
    const mockFn = jest.fn()
    mockFn.mockReturnValue(9) //configure the return result when the mock fn is invoked
    
    const msg = greet('Magesh', mockFn)
    expect(msg).toBe('Hi Magesh, Good Morning')
    expect(mockFn).toHaveBeenCalled(); //verify if the mock function is invoked (interaction testing)
})

test('greet after 12', function(){
    const mockFn = jest.fn()
    mockFn.mockReturnValue(15)
    
    const msg = greet('Magesh', mockFn)
    expect(msg).toBe('Hi Magesh, Good Day')
})