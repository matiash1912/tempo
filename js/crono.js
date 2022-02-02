// Al iniciar aplicacion
document.addEventListener("DOMContentLoaded", function() {
    darkMode()
})

const botonArrancarCr = document.getElementById("arrancarCr");
const botonDetenerCr = document.getElementById("detenerCr");

botonArrancarCr.addEventListener("click", () => cronoStart())
botonDetenerCr.addEventListener("click", () => cronoStop())

// const hora = document.getElementById("Horas");
const minutos = document.getElementById("Minutos");
const segundos = document.getElementById("Segundos");


let sec 

const cronoStart = () => {       
    sec = setInterval(() => {
        segundos.value++
        
        if(segundos.value == 60){
            minutos.value++
            segundos.value = 0
        }

    }, 1000)



}

const cronoStop = () => {
    clearInterval(sec)
}

// Modo oscuro
function darkMode(){
    const darkMode = document.getElementById("modo-oscuro");

    darkMode.addEventListener("click", function() {
        if(document.body.classList.contains("dark-mode-on")) {
            document.body.classList.remove("dark-mode-on");
        } else {
            document.body.classList.add("dark-mode-on");
        }
    })
}