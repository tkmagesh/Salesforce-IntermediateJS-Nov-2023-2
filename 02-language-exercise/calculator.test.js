/* 
test("My first test", function(){
    //arrange
    var expectedResult = true

    //act
    var actualResult = false

    //assert
    expect(actualResult).toBe(expectedResult)
}) 
*/

// SUT
// Version 1.0
function add(){
    function parseArg(n){
        if (Array.isArray(n)){
            var result = 0;
            for (var idx = 0; idx < n.length; idx++){
                result += parseArg(n[idx]);
            }
            return result;
        }
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var idx = 0; idx < arguments.length; idx++){
        result += parseArg(arguments[idx]);
    }
    return result;
}

// add the test cases for each usecase in the notes.md file and update the "add" function accordingly
test('add(10,20) //=> 30', function(){
    var expectedResult = 30
    var actualResult = add(10,20) //=> 30
    expect(actualResult).toBe(expectedResult);
})

test('add(10,"20") //=> 30', function(){
    var expectedResult = 30
    var actualResult = add(10,"20") //=> 30
    expect(actualResult).toBe(expectedResult);
})

test('add(10,"abc") //=> 10', function(){
    var expectedResult = 10
    var actualResult = add(10,"abc") //=> 10
    expect(actualResult).toBe(expectedResult);
})

test('add(10) //=> 10', function(){
    var expectedResult = 10
    var actualResult = add(10) //=> 10
    expect(actualResult).toBe(expectedResult);
})

test('add() //=> 0', function(){
    var expectedResult = 0
    var actualResult = add() //=> 0
    expect(actualResult).toBe(expectedResult);
})

test('add(10,20,30,40,50) //=> 150', function(){
    var expectedResult = 150
    var actualResult = add(10,20,30,40,50) //=> 150
    expect(actualResult).toBe(expectedResult);
})

test('add(10,20,"30",40,50) //=> 150', function(){
    var expectedResult = 150
    var actualResult = add(10,20,"30",40,50) //=> 150
    expect(actualResult).toBe(expectedResult);
})

test('add(10,20,"30",40,"abc") //=> 100', function(){
    var expectedResult = 100
    var actualResult = add(10,20,"30",40,"abc") //=> 100
    expect(actualResult).toBe(expectedResult);
})

test('add([10,20,30,40,50]) //=> 150', function(){
    var expectedResult = 150
    var actualResult = add([10,20,30,40,50]) //=> 150
    expect(actualResult).toBe(expectedResult);
})

test('add([10,20],[30,40,50]) //=> 150', function(){
    var expectedResult = 150
    var actualResult = add([10,20],[30,40,50]) //=> 150
    expect(actualResult).toBe(expectedResult);
})

test('add([10,20,"30"],[40,"abc"]) //=> 100', function(){
    var expectedResult = 100
    var actualResult = add([10,20,"30"],[40,"abc"]) //=> 100
    expect(actualResult).toBe(expectedResult);
})

test('add([10,[20,"30"]],[40,"abc"]) //=> 100', function(){
    var expectedResult = 100
    var actualResult = add([10,[20,"30"]],[40,"abc"]) //=> 100
    expect(actualResult).toBe(expectedResult);
})

test('add(function(){ return 10; }, function(){ return 20; }) //=> 30', function(){
    var expectedResult = 30
    var actualResult = add(function(){ return 10; }, function(){ return 20; }) //=> 30
    expect(actualResult).toBe(expectedResult);
})

test('add(function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }) //=> 100', function(){
    var expectedResult = 100
    var actualResult = add(function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }) //=> 100
    expect(actualResult).toBe(expectedResult);
})

test('add([function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }]) //=> 100', function(){
    var expectedResult = 100
    var actualResult = add([function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }]) //=> 100
    expect(actualResult).toBe(expectedResult);
})

