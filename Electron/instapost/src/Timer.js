//import  View  from "./View.js"  // formato padrão de importação
import { View } from "./View.js"  // nesse formato e possivel importar dois ou mais modulos
import { Emitter } from "./Emitter.js"

const Timer = {
    time: 60 * 60,
    currentTime: 0,
    interval: null,

    // função para calcular minutos e segundos
    timeToMinutes: time => Math.floor(time / 60),
    
    timeToSeconds: time => time % 60,

    formatTime: time => String(time).padStart(2, '0'),  // o padStart preenche o inicio 

    // inicia o contador
    init(time) {
        Emitter.emit('countdown-start')

        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time
        //console.log(Timer.currentTime)
        Timer.interval = setInterval(Timer.countdown, 1000) 
          
        
    },
    
    countdown() {
        Timer.currentTime--
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))
        
        //console.log(minutes, seconds)


        View.render({
            minutes,  // shorthand e quando a chave e a propriedade tem o mesmo nome
            seconds,
        })
        
        if (Timer.currentTime === 0) {
            clearInterval(Timer.interval)  // para stoparmos o setInterval, precisamos colocar ele em uma variavel
            Emitter.emit('countdown-end')
            console.log('Stop!')  
        }
    }
}

export { Timer }