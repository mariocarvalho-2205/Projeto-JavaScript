const Emitter = {

    events: { },

    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || []  // aqui verifica se o array esta vazio e preenche
        Emitter.events[event].push(cb)
    },

    emit(event, ...rest) {
        if (event in Emitter.events === false) {
            return
        } 

        Emitter.events[event].forEach(e => {
            e(...rest)            
        });

    }
}



// Emitter.on('click', () => console.log('cliquei no emit'))
// Emitter.on('click', () => console.log('cliquei no emit agora'))

// Emitter.emit('click')

// Emitter.on('click', () => console.log('click 2'))
// Emitter.on('click', () => console.log('click 3'))

// console.log(Emitter.events)
//Emitter.events.click()
export { Emitter }