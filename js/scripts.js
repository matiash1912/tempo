
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

let sec 

// Sonido Fin
const audio = new Audio("../audio/endTime.mp3")

let counter = 1
let counterXminuto

function tempoStart() {
    if (minutos.value !== 0 && segundos.value !== 0) {
        botonArrancarTm.value = "Reanudar"
    }
    
    // Solo segundos   
    if(minutos.value == 0 ){
        sec = setInterval(() => {
        segundos.value--

        if(segundos.value <= 0){
            clearInterval(sec)
            audio.play()
            segundos.value = 0
            botonArrancarTm.style.display = "initial"
        }
        }, 1000)
    }

    // Si se ocupan minutos (minutos enteros)
    if(minutos.value > 0){
        counterXminuto = (minutos.value * 60) + 2
        minutos.value--
        
        

        counter = counter
        botonDetenerTm.onclick(() => numeroMemoria())
        
        console.log(counterXminuto)

        sec = setInterval(() => {
            segundos.value--
            if (segundos.value < 0) {
                segundos.value = 59
            }
            counter++

            console.log(counter)

            if(counter % 61 === 0){
                minutos.value--

                if (counter % 62 == 0 ) {
                    counter--
                }
            }
            
            
            if(counter == counterXminuto){
                clearInterval(sec)
                audio.play()
                segundos.value = 0
                minutos.value = 0
            }
    
        }, 1000)
    } 
}

const numeroMemoria = () => counter

function tempoStop() {
    clearInterval(sec)
    botonArrancarTm.addEventListener("click", () => minutos.value++)
    
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