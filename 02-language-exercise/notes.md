## Exercise
Write an add function that can be used in all the given ways
```
add(10,20) //=> 30
add(10,"20") //=> 30
add(10,"abc") //=> 10
add(10) //=> 10
add() //=> 0
add(10,20,30,40,50) //=> 150
add(10,20,"30",40,50) //=> 150
add(10,20,"30",40,"abc") //=> 100
add([10,20,30,40,50]) //=> 150
add([10,20],[30,40,50]) //=> 150
add([10,20,"30"],[40,"abc"]) //=> 100
add([10,[20,"30"]],[40,"abc"]) //=> 100
add(function(){ return 10; }, function(){ return 20; }) //=> 30
add(function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }) //=> 100
add([function(){ return [10,[20,"30"]];}, function(){ return [40,"abc"]; }]) //=> 100
```

# Application setup

```
npm init -y
npm install jest

modify the package.json file as follows
"scripts" : {
    "test" : "jest"
}

npm test
```