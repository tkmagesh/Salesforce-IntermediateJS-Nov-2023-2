# Constructor Functions
- Functions that can be used like a class
- Invoked with the "new" keyword
    - this => new object
    - this => returned by default
- There is not syntax difference between a regular function and a constructor function
- The function name starts with an uppercase (convention)

```
function Product(id, name, cost){
    // if the function is not invoked with the "new" keyword
    if (!(this instanceof Product)){
        // 1. an error can be thrown
        // throw new Error('should be invoked using new')

        //OR

        // 2. a new product object can be created and returned
        // return new Product(id, name, cost)

        //OR

        // 3. alternate behavior
        return JSON.stringify({id : id, name : name, cost : cost})
    }
    // this => new object
    this.id = id;
    this.name = name;
    this.cost = cost;

    this.display = function(){
        console.log(this.id, this.name, this.cost)
    }
    // this => returned by default
}

var pen = new Product(100, "Pen", 10)
var pencil = Product(200, "Pencil", 5)
```
