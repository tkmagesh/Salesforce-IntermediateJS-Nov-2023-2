/* 
Create an object and assign it to a variable 'spinner'
Spinner Methods:
    - up()
    - down()

Behaviors
    spinner.up() //=> 1
    spinner.up() //=> 2
    spinner.up() //=> 3
    spinner.up() //=> 4

    spinner.down() //=> 3
    spinner.down() //=> 2
    spinner.down() //=> 1
    spinner.down() //=> 0
    spinner.down() //=> -1

IMPORTANT NOTE:
    NO HTML PAge, No button, No click event
    
    there SHOULD NOT be any way by which the outcome of up() and down() methods can be influenced from outside

    the following SHOULD NOT be possible
    window.count = 1000
    spinner.up() //=> 1001

    OR
    spinner.count = 1000
    spinner.up() //=> 1001
*/

var spinner = (function(){ //step-1
    var counter = 0; //step-2

    function up(){ //step-3
        return ++counter; //step-4
    }

    function down(){ //step-3
        return --counter; //step-4
    }

    var spinner = {
        up : up,
        down: down
    }

    return spinner; //step-5
})()


var counter = (function(){
    var count = 0;
    function counter(){
        return ++count;
    }
    return counter;
})()