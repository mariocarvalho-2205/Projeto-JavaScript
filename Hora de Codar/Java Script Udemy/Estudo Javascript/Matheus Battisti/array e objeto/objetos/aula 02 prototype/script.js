let cachorro = {
    raca: 'SRD',
    latir: function () {
        console.log('au, au, au');
    },
    rosnar: () => {
        console.log('grrrrrr')
    },
    nome: function (nome) {
        console.log(`O cachorro se chama ${nome}.`)
    },
    setRaca: function (raca) {
        this.raca = raca;
        
        // if(raca == "Pastor") {
        // } else if (raca == "Pixi") {
        //     return `Que raça chata`;
        // }

    },
    getRaca: function () {
        return `A raça é ${this.raca}`
    } 
}

cachorro.latir();
cachorro.rosnar();
cachorro.nome('mike');
cachorro.setRaca('pastor alemão')
console.log(cachorro.getRaca())


