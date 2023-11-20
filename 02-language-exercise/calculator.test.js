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
function add(x,y){
    return x + y
}

test('should add 2 numbers', function(){
    var expectedResult = 30;
    var actualResult = add(10,20)
    expect(actualResult).toBe(expectedResult)
})

// add the test cases for each usecase in the notes.md file and update the "add" function accordingly