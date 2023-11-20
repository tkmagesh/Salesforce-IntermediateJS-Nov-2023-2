# Invocation Context (this)
- In JavaScript, it **DOES NOT** matter who owns the function or **WHERE**  the function is! What matters is **HOW** the function is invoked!!

- There are 6 ways of invoking a function in JS

## 1. As a method of a object (obj)
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

## 2. As a function
> this -> global (window in the browser)

## 3. Using the 'call' method of the function

```
ex:1
function fn(){
    console.log('fn invoked');
}
fn.call()

ex:2
var person = {
    name : 'Magesh'
}

function whoAmI(){
    console.log('I am ', this.name);
}

ex:3
function greet(salutation, msg){
    console.log(salutation + this.name + ', ' + msg)
}
greet.call(person, 'Mr.', 'Have a nice day!')

```

## 4. Using the 'apply' method of the function
```
ex:1
function fn(){
    console.log('fn invoked');
}
fn.apply()

ex:2
var person = {
    name : 'Magesh'
}

function whoAmI(){
    console.log('I am ', this.name);
}

ex:3
function greet(salutation, msg){
    console.log(salutation + this.name + ', ' + msg)
}
greet.apply(person, ['Mr.', 'Have a nice day!'])

```