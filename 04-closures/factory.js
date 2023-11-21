function spinnerFactory(){ //step-1
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
}

var s1 = spinnerFactory()
var s2 = spinnerFactory()