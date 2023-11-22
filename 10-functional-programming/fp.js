let products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];
/* 
Write the APIs for the following
- sort
- filter
- groupBy
*/

function useCase(title, fn){
    console.group(title);
    fn()
    console.groupEnd();
}

useCase('Functional Programming', function(){
    useCase('Initial List', function(){
        console.table(products)
    })

    useCase('Sort', function(){
        useCase('[Specific] Products by Id', function(){
            function sortProductsById(){
                for(let i = 0; i < products.length-1; i++)
                    for(let j = i + 1; j < products.length; j++)
                        if (products[i].id > products[j].id){
                            [products[i], products[j]] = [products[j], products[i]]
                        }
            }
            sortProductsById()
            console.table(products)
        })
        useCase('Any list by anything (attrName/comparer)', function(){

            function sort(list, comparer){
                let comparerFn ;
                if (typeof comparer === 'function'){
                    comparerFn = comparer
                };
                if (typeof comparer === 'string'){
                    comparerFn = function(p1, p2){
                        if (p1[comparer] < p2[comparer]) return -1;
                        if (p1[comparer] === p2[comparer]) return 0;
                        return 1
                    }
                }
                if (!comparerFn) return;
                /* 
                for(let i = 0; i < list.length-1; i++)
                        for(let j = i + 1; j < list.length; j++)
                            if (comparerFn(list[i], list[j]) > 0 ){
                                [list[i], list[j]] = [list[j], list[i]]
                            } 
                */
               list.sort(comparerFn)
            }
        
            useCase('Any list by any attribute', function(){
                function sortByAttr(list, attrName){
                    for(let i = 0; i < list.length-1; i++)
                        for(let j = i + 1; j < list.length; j++)
                            if (list[i][attrName] > list[j][attrName]){
                                [list[i], list[j]] = [list[j], list[i]]
                            }
                }
                useCase('products by cost', function(){
                    // sortByAttr(products, 'cost')
                    sort(products, 'cost')
                    console.table(products)
                })
                useCase('products by units', function(){
                    // sortByAttr(products, 'units')
                    sort(products,'units')
                    console.table(products)
                })
            }) 
            useCase('Any list by any logic', function(){
                function sortByComparer(list, comparerFn){
                    for(let i = 0; i < list.length-1; i++)
                        for(let j = i + 1; j < list.length; j++)
                            if (comparerFn(list[i], list[j]) > 0 ){
                                [list[i], list[j]] = [list[j], list[i]]
                            }
                }
                useCase('products by value [cost * units]', function(){
                    const productComparerByValue = function(p1, p2){
                        const p1Value = p1.cost * p1.units,
                            p2Vaue = p2.cost * p2.units;
                        if (p1Value < p2Vaue) return -1;
                        if (p1Value === p2Vaue) return 0;
                        return 1;
                    }
                    // sortByComparer(products, productComparerByValue)
                    sort(products, productComparerByValue)
                    console.table(products)
                })
            })      
        }) 
    })

    useCase('Filter', function(){
        useCase('[Specific] filter stationary products', function(){
            function filterStationaryProducts(){
                let result = []
                for (let product of products){
                    if (product.category === 'stationary'){
                        result.push(product)
                    }
                }
                return result
            }
            const stationaryProducts = filterStationaryProducts()
            console.table(stationaryProducts)
        })
        useCase('[Generic] filter any list by any criteria', function(){
            function filter(list, predicate){
                let result = []
                for (let item of list){
                    if (predicate(item)){
                        result.push(item)
                    }
                }
                return result
            }
            function negate(predicate){
                return function(){
                    return !predicate.apply(this, arguments)
                }
            }
            useCase("Products by cost", function(){
                const costlyProductPredicate = product => product.cost > 50;

                useCase('costly products [cost > 50]', function(){
                    const costlyProducts = filter(products, costlyProductPredicate)
                    console.table(costlyProducts)
                })
                useCase('affordable products', function(){
                    // const affordableProductPredicate = product => product.cost <= 50
                    // const affordableProductPredicate = product => !costlyProductPredicate(product)
                    const affordableProductPredicate = negate(costlyProductPredicate)
                    const affordableProducts = filter(products, affordableProductPredicate)
                    console.table(affordableProducts)
                })
            })
            useCase('products by cost', function(){
                const understockedProductPredicate = product => product.units < 50
                useCase('understocked products [units < 50]', function(){
                    const understockedProducts = filter(products, understockedProductPredicate);
                    console.table(understockedProducts)
                })
                // filtering wellstocked products?
                useCase('wellstocked products', function(){
                    // const wellstockedProductPredicate = product => product.units >= 50;
                    // const wellstockedProductPredicate = product => !understockedProductPredicate(product)
                    const wellstockedProductPredicate = negate(understockedProductPredicate)
                    const wellstockedProducts = filter(products, wellstockedProductPredicate)
                    console.table(wellstockedProducts)
                })
            })
        })
    })

    useCase('GroupBy', function(){
        function groupBy(list, keySelector){
            let keySelectorFn;
            if (typeof keySelector === 'function'){
                keySelectorFn = keySelector;
            }
            if (typeof keySelector === 'string'){
                keySelectorFn = function(item){
                    return item[keySelector]
                }
            }
            if (!keySelectorFn) return;
            let result = {}
            for(let item of list){
                let key = keySelectorFn(item)
                result[key] = result[key] || []
                /* 
                if (typeof result[key] === 'undefined')
                    result[key] = [] 
                */
                result[key].push(item)
            }
            return result;
        }
        useCase('products by category [attrName]', function(){
            let productsByCategory = groupBy(products, 'category');
            console.log(productsByCategory);
        });
        useCase('products by cost [keySelector function]', function(){
            const costKeySelector = product => product.cost > 50 ? 'costly' : 'affordable';
            let productsByCost = groupBy(products, costKeySelector)
            console.log(productsByCost);
        })
    })
})

// groupBy using 'reduce'
products.reduce((prevResult, product) => {
    const key = product.category;
    const nextResult = { ...prevResult, [key] : prevResult[key] || [] }
    nextResult[key].push(product);
    return nextResult;
},{})