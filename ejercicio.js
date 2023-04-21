const suma = (a,b) => {
    return new Promise((resolve, reject) => {
        if( a == 0 || b == 0){
            reject('Operacion innecesaria para la suma')
        }else{
            resolve(a+b)
        }
    })
}

const resta = (a,b) => {
    return new Promise((resolve, reject) => {
        if( a == 0 || b == 0){
            reject('Operacion innecesaria para la resta')
        }else{
            resolve(a-b)
        }
    })
}

const multiplicacion = (a,b) => {
    return new Promise((resolve, reject) => {
        if( a < 0 || b < 0){
            reject('Operacion innecesaria para la multi')
        }else{
            resolve(a*b)
        }
    })
}


const calculos = async () => {
    try {
        let resultadoSuma = await suma(4,2);
        console.log(`Resultado de la suma ${resultadoSuma}`);
        let resultadoResta = await resta(10,1);
        console.log(`Resultado de la resta ${resultadoResta}`);
        let resultadoMulti = await multiplicacion(9, 2);
        console.log(`Resultado de la multi ${resultadoMulti}`);

    } catch (error) {
        console.log(error)
    }
}

calculos()