console.log(`========= EJERCICIO 1 ========= `)
console.log(`Imprime los números del 1 al 10`)
for(let i = 1; i<= 10; i++){
    console.log(i)
}

console.log(`========= EJERCICIO 2 ========= `)
console.log(`Imprime los números pares del 2 al 20`)
for(let i= 1; i<=20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

console.log(`========= EJERCICIO 3 ========= `)
console.log(`Imprime los números impares del 1 al 19`)
for(let i=0; i<=19; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

console.log(`========= EJERCICIO 4 ========= `)
console.log(`Imprime los números del 10 al 1 en orden inverso`)
for(let i = 10; i>=1; i--){
    console.log(i)
}

console.log(`========= EJERCICIO 5 ========= `)
console.log(`Imprime los números del 1 al 10 pero se detiene al llegar al 5`)
for(let i = 1; i <= 10; i++){
    if (i === 5) break
    console.log(i)
}

console.log(`========= EJERCICIO 6 ========= `)
console.log(`Imprime los números del 1 al 10 pero salta el 5`)
for(let i = 1; i <= 10; i++){
    if (i === 5) continue
    console.log(i)
}

console.log(`========= EJERCICIO 7 ========= `)
console.log(`Crea una funcion llamada decirNombre(nombre) y nos ejecute una alerta "hola" + nombre`)