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
10. Arrow functions
11. iterators
12. Template Strings
13. Class