# Invocation Context (this)
- In JavaScript, it **DOES NOT** matter who owns the function or **WHERE**  the function is! What matters is **HOW** the function is invoked!!

## As a method of a object (obj)
> this -> obj
```
var person = {
    name : 'Magesh'
}

function whoAmI(){
    console.log('I am ', this.name);
}

//make the function a 'method' of person object
person['whoAmI'] = whoAmI;

//invoke the function as a 'method' of person object
person.whoAmI()


var product = {
    name : 'Pen'
}

//make the function a 'method' of product object
product['whoAmI'] = whoAmI;

//invoke the function as a 'method' of person object
product.whoAmI()

//NOTE:
    there is ONLY ONE instance of the function but 3 references
```