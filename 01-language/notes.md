# JavaScript Language

1. Object Based
    - Concept of Object (State + Behaviour)
2. Functional Language
    - Functions are NOT merely programming constructs
    - Functions are first class citizens (aka functions can be treatd like data/object)
    - Support for Higher Order Functions
3. Loosely typed language
4. Dynamic

## Functions as Objects
### Object & Function Creation (1)
```
//Object Creation (using object expression)
var obj = {}

//Function Creation (using function statement)
function f1(){
}

//Function Creation (using function expression)
var f2 = function(){
}
```

### Object # Function Creation (2)
```
//Object Creation (using Object constructor)
var obj = new Object()

//Function Creation (using Function constructor)
var fn = new Function()

var fn = new Function('console.log("hi")')

var add = new Function('x', 'y', 'return x + y;')

```

### State
```
//Object can have state (attributes)
var obj = {}
obj['id'] = 100

//Functions can have state (attributes)
var fn = function(){}
fn['id'] = 100
```

### Behavior
```
//Object can have behavior (methods)
var person = {
    name : 'Magesh',
    id : 100,
    isEmployed : true,
    whoAmI : function(){
        console.log('I am a person');
    }
}
person.whoAmI();

//Function can have behavior (methods)
var fn = function(){}
fn['whoAmI'] = function(){
    console.log('I am a function');
}
fn.whoAmI();
```

### Passed as arguments 
```
function printType(z){
    console.log('typeof z : ', typeof z);
}

//object as argument
var obj = {}
printType(obj)

//function as argument (higher order function)
var fn = function(){}
printType(fn)

```

### Returned as return values from functions (higher order function)
```
function getFn(){
    var fn = function(){
        console.log('fn invoked');
    }
    return fn;
}

var fn = getFn()

typeof fn
```

## Loosely typed
```
var x
x = 100
x = "this is a string"
x = true
x = {}
x = function(){}

```

## Dynamic
```
var car = {}

//use the [] notation to introduce new attributes (convention and not mandatory)
car['id'] = 100
car['color'] = 'Red'

//Use either '.' or '[]' for reading the attribute values
console.log(car.id)
console.log(car['id'])

//iterate through the attributes using for..in
for(var attrName in car){
    console.log(attrName,' - ', car[attrName])
}

//to remove an existing attribute (NOT advisable)
delete car.id

//acceptable approach
car.id = undefined

```

## Functions
Whenever a function is invoked, 2 implicit values are available in the function by default
- arguments
    - array like object with all the argument values passed to the function
        - arguments.length (# of arguments)
        - arguments[0]
        - arguments[1]
        - arguments[2]
        - ...
    - example
    ```
        function add(x,y){
            var result = 0;
            for (var idx = 0; idx < arguments.length; idx++){
                result += arguments[idx]
            }
            return result;
        }
        
        add(10)
        
        add(10,20)
        
        add(10,20,30,40,50)
    ```
- this

