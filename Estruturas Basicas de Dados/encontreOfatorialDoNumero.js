
//Diz o Fatorial de um número qualquer

function factorialize(num) {
    let fatorial = 1;
    for (let i = 1; i <= num; i++)
    fatorial = fatorial* i
    return fatorial;

};
  
  console.log(factorialize(5));