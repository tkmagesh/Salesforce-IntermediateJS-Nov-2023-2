function Product(id, name, cost){
    // if the function is not invoked with the "new" keyword
    if (!(this instanceof Product)){
        return new Product(id, name, cost)
    }
    // this => new object
    this.id = id;
    this.name = name;
    this.cost = cost;

    // this => returned by default
}

Product.prototype.display = function(){
    console.log(this.id, this.name, this.cost)
}