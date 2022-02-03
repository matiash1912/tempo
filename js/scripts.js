
// Al iniciar aplicacion
document.addEventListener("DOMContentLoaded", function() {

    darkMode();

    validarTimer();
})

const botonArrancarTm = document.getElementById("arrancarTm");
const botonDetenerTm = document.getElementById("detenerTm");

// Quitar iniciar
botonArrancarTm.onclick = () => {
    botonArrancarTm.style.display = "none"
}

botonDetenerTm.onclick = () => {
    botonArrancarTm.style.display = "initial"
}


botonArrancarTm.addEventListener("click", () => tempoStart())
botonDetenerTm.addEventListener("click", () => tempoStop())

// const hora = document.getElementById("Horas");
const minutos = document.getElementById("Minutos");
const segundos = document.getElementById("Segundos");

let timer 

// Sonido Fin
const audio = new Audio("../audio/endTime.mp3")

let counter = 0
let minutes = 0
let seconds = 0

const tempoStart = () => {
    if (segundos.value > 0) {
        timer = setInterval(() => {
            segundos.value--
            if (segundos.value < 0) {
                segundos.value = 0
                audio.play()
                clearInterval(timer)
    
            }
        }, 1000)
    }


    minutes = (minutos.value) * (seconds + 60)
    seconds = minutes

    if (minutos.value > 0) {
        

        if(botonArrancarTm.value == "Iniciar"){
            minutos.value--
        }
    
        if(minutos.value == 0 && segundos.value == 0){
            botonArrancarTm.value == "Iniciar"
        }
    
        if (minutos.value !== 0 && segundos.value !== 0) {
            botonArrancarTm.value = "Reanudar"
        }
    
        seconds = memorizedRest()
    
        botonDetenerTm.addEventListener("click", () => seconds -= 60)
    
        if (counter % 59 === 0) {
            segundos.value = 59
        }
    
        timer = setInterval(() => {
            counter++
            segundos.value--
            console.log(counter)
            if (counter % 59 === 0) {
                counter += 0
                segundos.value = 59
                minutos.value--
            }
            if (counter === seconds || minutos.value < 0) {
                segundos.value = 0
                minutos.value = 0
                audio.play()
                clearInterval(timer)
    
            }
        }, 1000)
    
    }
}


const numeroMemoria = () => counter
const memorizedRest = () => (seconds - counter)

function tempoStop() {
    clearInterval(timer)
}



console.log

function validarTimer() {
    let errores = [ ]
    const messageError = () => {
        const space = document.querySelector(".contadores")
        const message = document.createElement("span")
        message.classList.add("alertMessage")
        message.textContent = "Numero o Caracter Invalido"
        space.insertAdjacentElement("afterend", message)

         setTimeout(() => {
             message.remove()
         }, 3000)
    }
    // hora.addEventListener("keyup", () => {
    //     let time = Number(hora.value)

    //     if(time < 0 || time > 99){
    //         errores.push("error")
    //         hora.value = 99

    //         if(!errores.length == 0){
    //             messageError()
    //         }
            
    //     }
    // })
    minutos.addEventListener("keyup", () => {
        let time = Number(minutos.value)

        if(time < 0 || time > 99){
            errores.push("error")
            minutos.value = 99

            if(!errores.length == 0){
                messageError()
            }
            
        }
    })
    segundos.addEventListener("keyup", () => {
        let time = Number(segundos.value)

        if(time < 0 || time > 59){
            errores.push("error")
            segundos.value = 59

            if(!errores.length == 0){
                messageError()
            }
            
        }
    }) 
}

// Modo oscuro
const darkMode = () => {
    const darkMode = document.getElementById("modo-oscuro");

    darkMode.addEventListener("click", function() {
        if(document.body.classList.contains("dark-mode-on")) {
            document.body.classList.remove("dark-mode-on");
        } else {
            document.body.classList.add("dark-mode-on");
        }
    })
}