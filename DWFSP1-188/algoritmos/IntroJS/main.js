let entradaUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar= document.getElementById("btnPar")
let salidaPar = document.getElementById("salidaPar")
let numeroEjercicioPar=0
entradaUsuarioPar.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numeroEjercicioPar = evento.target.value
})
function esPar(numero){
    if(numero%2==0){
        return "es par"
    }
    else{
        return "no es par"
    }
}
btnPar .addEventListener("click",()=>{
    let resultado=esPar(numeroEjercicioPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioPar +" "+resultado
    salidaPar.appendChild(hijo)

})







//let numero = 200
//if(numero%2==0){
//console.log("El numero", numero,"es par")
//}else{
    //console.log("El numero", numero,"es impar")
//}
//if((numero%3==0 && numero%5==0)&&(numero%6==0 && numero%7==0))

