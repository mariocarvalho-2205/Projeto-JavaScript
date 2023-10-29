
// aplicação que sera chamada pelo App
const Notifyer = {

    // inicia a função de notificação
    async init() {  // aqui e iniciado a aplicação
        const permission = await Notification.requestPermission()  // Notification e nativo do browser e solicitia uma permisão
        if (permission !== 'granted') {  // aqui verifica a permissão
            throw new Error ('Permissão negada')  // se for negada retorna um erro
        }
    },
    notyfier({ title, body, icon }) { // recebe os dados dinamicamente
        return () => new Notification(title, {  // aqui cria uma nova notificação
            
            body,
            icon
        })
    }
}

export { Notifyer }; // exporta o modulo 