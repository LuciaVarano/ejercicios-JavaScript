console.log(`========= EJERCICIO 1 ========= `)
console.log(`📌 Imprime los números del 1 al 10`)
for(let i = 1; i<= 10; i++){
    console.log(i)
}

console.log(`========= EJERCICIO 2 ========= `)
console.log(`📌 Imprime los números pares del 2 al 20`)
for(let i= 1; i<=20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

console.log(`========= EJERCICIO 3 ========= `)
console.log(`📌 Imprime los números impares del 1 al 19`)
for(let i=0; i<=19; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

console.log(`========= EJERCICIO 4 ========= `)
console.log(`📌 Imprime los números del 10 al 1 en orden inverso`)
for(let i = 10; i>=1; i--){
    console.log(i)
}

console.log(`========= EJERCICIO 5 ========= `)
console.log(`📌 Imprime los números del 1 al 10 pero se detiene al llegar al 5`)
for(let i = 1; i <= 10; i++){
    if (i === 5) break
    console.log(i)
}

console.log(`========= EJERCICIO 6 ========= `)
console.log(`📌 Imprime los números del 1 al 10 pero salta el 5`)
for(let i = 1; i <= 10; i++){
    if (i === 5) continue
    console.log(i)
}

console.log(`========= EJERCICIO 7 ========= `)
console.log(`📌 Crea una funcion llamada decirNombre(nombre) y nos ejecute una alerta "hola" + nombre`)
decirNombre = nombre => console.log(`Hola! ${nombre}`)
decirNombre('Lucia')

console.log(`========= EJERCICIO 8 ========= `)
console.log(`📌 Crea una funcion llamada saludar(nombre) y nos devuelva un String "Hola" + nombre y luego invoca la funcion dentro de una alerta `)
saludar = nombre => `Hola! ${nombre}`
// alert(saludar('Lucia'))

console.log(`========= EJERCICIO 9 ========= `)
console.log(`📌 Crea una funcion llamada sumar(a,b) que nos devuelva la suma de a y b`)
sumar = (num1,num2) => num1 + num2
console.log(sumar(2,5))

console.log(`========= EJERCICIO 10 ========= `)
console.log(`📌 Crea una funcion llamada restar(a,b) que nos devuelva la resta de a y b`)
restar = (a,b) => a - b
console.log(restar(10,6))

console.log(`========= EJERCICIO 11 ========= `)
console.log("📌 Crea una funcion llamada calcular(operacion a b) y dependiendo de si la operacion es + o - invocar la funcion sumar o restar (retornar el resultado), en caso de recibir una operacion no valida devolver null")
calcula = (operacion, a, b) => {
    if (operacion === "+"){
        return sumar(a,b)
    } if (operacion === "-"){
        return restar(a,b)
    } else {
        return null
    }
}
let resultadoCalcular = calcula("+", 4, 10)
console.log(resultadoCalcular)

console.log(`========= EJERCICIO 12 ========= `)
console.log("📌 Crea una funcion llamada contarHasta(numero) que cuente hasta ese numero por consola")
contarHasta = (num) => {
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}
contarHasta(2)

console.log(`========= EJERCICIO 13 ========= `)
console.log("📌 Preguntale al usuario si desea usar la calculadora, mientras su respuesta sea `si` ejecutaras el siguiente algoritmo: Solicita al usuario un numero, otro numero y una operacion, luego con los valores ingresados ejecuta la funcion calcular para mostrar el resultado por alerta. Una vez hecho esto se volvera a preguntar al usuario si quiere volver a usar la calculadora. Si escribiendo distinto de si, el programa nos dira por alerta `El programa ha finalizado`")

suma = (a,b) => a+b
resta = (a,b) => a-b
dividir = (a,b) => a/b
multiplicar = (a,b) => a*b

calcular = (op, a, b) => {
    if (op === "+") {
        return suma(a,b)
    } if (op === "-"){
        return resta(a,b)
    } if ((op === "/") && (b !== 0)) {
        return dividir(a,b)
    } if (op === "*") {
        return multiplicar(a,b)
    } 
}

let respuestaUsuario = prompt("Desea usar la calculadora?")
while (respuestaUsuario === "si") {
    let primerNumero = Number(prompt("Ingrese el primero numero: "))
    let segundoNumero = Number(prompt("Ingrese el segundo numero: "))
    let rtoOperacion = prompt("Ingrese la operacion a resolver: ")

    let resultado = calcular(rtoOperacion,primerNumero,segundoNumero)

    if (resultado === null){
        alert("Operacion no valida")
    } else {
        alert(`El resultado es: ${resultado}`)
    }

    respuestaUsuario = prompt("Desea volver a usar la calculadora?")
} 

alert("el programa ha finalizado")

console.log(`========= EJERCICIO 14 ========= `)
console.log("📌 Hacer un programa donde se ingresen un conjunto de 5 alturas de personas por teclado. Mostrar la latura promedio de las personas")





    
