# ES6 Features
1. let
```
let x = 10

for(let i = 0; i < 10; i++){
}
```
2. const
```
const pi = 3.14
```
3. Destructuring (Array)
```
let nos = [3,1,4,2,5]
let [x,y] = nos
```
4. Rest Operator (Array)
```
let nos = [3,1,4,2,5]
let [x,y,...z] = nos
```
5. Spread Operator (Array)
```
let nos = [3,1,4,2,5]
let newNos = [ ...nos, 10,20,30 ]
```

6. Destructuring (Object)
```
let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
// variable name must match with the attribute names
let {id, city} = emp

//when the variable names are different from the attribute names
let {id : x, city : y} = emp
```
7. Rest Operator (Object)
```
let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
let { id, ...z} = emp
```
8. Spread Operator (Object)
```
let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
let fulltimeEmp = { ...emp, benefits : 'Healthcare' }
```
9. Default arguments
```
function add(x=10, y=20){
    return x + y;
}
```
10. Arrow functions
```
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
let add = function(x,y){
    return x + y;
}

//arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y;
```
11. iterators
```
let nos = [3,1,4,2,5]
for(let no of nos){
    console.log(no)
}
```
12. Template Strings
```
let x = 100, y = 200
// 'sum of 100 and 200 is 300'
let s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)
let s2 = `sum of ${x} and ${y} is ${x+y}`
```
13. Object construction enhancements
```
let id = 100, name = 'Magesh', city = 'Bangalore'
let emp = {
    id,
    name,
    city,
    display(){
        console.log(`id = ${this.id}, name = ${this.name}, city = ${this.city}`)
    }
}
```
14. Class
```
class Employee {
    
    // instance members
    #id = 0; // supposed to be private 
    name = '';
    city = '';

    get id(){
        console.log('id[getter] invoked');
        return this.#id;
    }
    set id(val){
        console.log('id[setter] invoked');
        if (val <= 0){
            throw new Error('invalid id');
        }
        this.#id = val;
    }

    // static members
    static ModelType = 'Employee';

    // constructor method
    constructor(id, name, city){
        this.id = id;
        this.name = name;
        this.city = city;
    }

    // instance method
    format(){
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
    }

    // static method
    static IsEmployee(obj){
        return obj instanceof Employee;
    }
}

// class inheritance
class FulltimeEmployee extends Employee {
    // instance fields
    benefits = '';

    constructor(id, name, city, benefits){
        super(id, name, city);
        this.benefits = benefits;
    }

    // overriding base class method
    format(){
        return `${super.format()}, benefits = ${this.benefits}`;
    }
}
```

- Reference (http://es6-features.org)