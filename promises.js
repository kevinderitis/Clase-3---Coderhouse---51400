const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No podemos operar con dividendo = 0')
        }else{
            resolve(dividendo/divisor)
        }
    })
}


dividir(10, 0)
    .then(x => x + 10)
    .then(x => x*x)
    .then(x => x / 2)
    .then(x => console.log(x))
    .catch(error => console.log(error))