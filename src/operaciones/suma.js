function sumar (a, b) {
    if(typeof a !== "number" || typeof b!== "number"){
        return "Error: ambos argumentos deben ser numeros."
    }else{
        return a+b;
    }
}

export default sumar;