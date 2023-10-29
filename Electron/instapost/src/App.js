// cria a função que inicia a aplicação


import { Notifyer } from "./Notifyer.js"  // importa o modulo da notificação
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifyer.notyfier({ // aqui inicia a função de notificação
                    
    // nesse objeto e criado a mensagem que sera exibida dinamicamente
    // e enviado para o notifyer
    title: 'Sinho',
    body: 'Crie uma rotina para estudar',
})

console.log(notify)

// contante com a função que inicia a aplicação
const App = {  // essa função e chamada no html
    async start() {
        try {  // retorno da trativa de erro se for permitido
            await Notifyer.init()  // aqui e chamado o modulo notifyer e init
           
            Emitter.on('countdown-start', notify)

            Emitter.on('countdown-end', Timer.init)
        
        Timer.init()

        } catch ( error ){
            console.log(error.message)
        }
        
    }
}

export { App }

// para encerrar no 