let Entrada0 = document.getElementById("entrada0")
let Entrada1 = document.getElementById("entrada1")
let Entrada2 = document.getElementById("entrada2")
let Entrada3 = document.getElementById("entrada3")
let Entrada4 = document.getElementById("entrada4")

let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salida")





let entradaUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar= document.getElementById("btnPar")
let numeroEjercicioPar=0
entradaUsuarioPar.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numeroEjercicioPar = evento.target.value
})
function esPar(numero){
    if(numero%3==0 && numero%5==0){
        return "margarita"
    }
    if(numero%6==0 && numero%7==0){
        return "Rosa"
    }
    if((numero%3==0 && numero%5==0) && (numero%6==0 && numero%7==0))
        return "Violeta"
    

        
    
}
btnPar .addEventListener("click",()=>{
    let resultado=esPar(numeroEjercicioPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioPar +" "+resultado
    salidaPar.appendChild(hijo)

})