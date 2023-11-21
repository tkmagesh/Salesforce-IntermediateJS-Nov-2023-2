// create the Spinner as a constructor function

function Spinner(){
    var count = 0
    this.up = function(){
        return ++count;
    };
    this.down = function(){
        return --count;
    }
}