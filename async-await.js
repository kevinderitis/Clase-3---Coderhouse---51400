async function delayedValue(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

const resolver = async () => {
    try {
        let resultado = await delayedValue(100, 1000)
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

resolver()