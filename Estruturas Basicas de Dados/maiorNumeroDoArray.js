//Retornar os maiores números em matrizes

//Retorna um array que consiste no maior número de cada sub-array fornecido. 


function largestOfArray(array) {
    let arrayResult = [];

    array.forEach((elementArray) => {
        arrayResult.push(Math.max(...elementArray))

    });

    return arrayResult
}

largestOfArray([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
 a