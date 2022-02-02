// botonArrancar.addEventListener("click", () => ejecutarTemporizador())

// function ejecutarTemporizador() { 
//     let h = () => {
//         if(hora.value > 0){
//             hora.value -= 1

//             return hora.value
//         }
//     }  
//     const cuentaAtras = (tiempo) => setInterval(tiempo, 1000);

//     cuentaAtras(h)
  
// }


/* Validar Temporizador */

// hora.addEventListener("keyup", (e) => {
//     let input = e.path[0].value;

//     let inputINT = parseInt(input)

        
//     if(inputINT > 99 || "") {
//         hora.value = "99";
//     }
        
// })

// minutos.addEventListener("keyup", (e) => {
//     let input = e.path[0].value;

//     let inputINT = parseInt(input)

        
//     if(inputINT > 99 || "") {
//         minutos.value = "99";
//     }
        
// })

// segundos.addEventListener("keyup", (e) => {
//     let input = e.path[0].value;

//     let inputINT = parseInt(input)

        
//     if(inputINT > 99 || " ") {
//         segundos.value = "99";
//     }
        
// })



// 2da vez

// let sec 
// let min
// let hour


// function tempoStart() {

//     sec = setInterval(() => {
//     segundos.value--
//     if (segundos.value == 0){
//         clearInterval(sec)
//     }
//     }, 1000)
    
//     min = setInterval(() => {
//         minutos.value-- 
//         if(minutos.value < 0){
//             clearInterval(min)
//             minutos.value = 0
//         }
//     }, 60000)


//      hour = setInterval(() => {
//          hora.value--
//          if(hora.value < 0){
//              clearInterval(hour)
//              hora.value = 0
//          }
//      }, 3600000)
// }

// function tempoStop() {
//     clearInterval(sec)
//     clearInterval(min)
//     clearInterval(hour)
// }
