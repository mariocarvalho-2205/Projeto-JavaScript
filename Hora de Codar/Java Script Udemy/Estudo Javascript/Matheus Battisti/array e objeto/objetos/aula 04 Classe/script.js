/*
// Classes

O prototype do javascript pose ser chamado de classed

Pois nas outras linguagens uma Class é um molde de um objeto

Ou seja, podemos criar diversos objetos em cima de um prototype

*/

let cachorro = {
    raca: 'SRD',

}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemao';



console.log(pastorAlemao.raca);

let pet = {
    raca: 'SRD',
    patas: 4,
    latir: function () {
        console.log('au au');
    },
}

let labrador = Object.create(pet);
labrador.raca = 'Labrador'

console.log(labrador.raca);
labrador.latir();
console.log(pet.raca);

let pastor = Object.create(pet);
pastor.raca = 'Pastor Alemão'
pastor.latir();
console.log(pastor.raca)