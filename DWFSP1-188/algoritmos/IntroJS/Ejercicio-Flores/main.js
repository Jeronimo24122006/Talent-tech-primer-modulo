let entradaUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar= document.getElementById("btnPar")
let salidaPar = document.getElementById("salidaPar")
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
    if(numero%3==0 && numero%5==0) and (numero%6==0 && numero%7==0)
        return "Violeta"

        
    
}
btnPar .addEventListener("click",()=>{
    let resultado=esPar(numeroEjercicioPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioPar +" "+resultado
    salidaPar.appendChild(hijo)

})