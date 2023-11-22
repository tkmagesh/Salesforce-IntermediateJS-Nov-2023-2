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
                return stationaryProducts?
            }
            const stationaryProducts = filterStationaryProducts()
            console.table(stationaryProducts)
        })
        useCase('[Generic] filter any list by any criteria', function(){
            function filter(/*  */){

            }
            useCase('costly products [cost > 50]', function(){
                filter(/* ? */)
            })
            useCase('understocked products [units < 50]', function(){
                filter(/* ? */)
            })
        })
    })
})
