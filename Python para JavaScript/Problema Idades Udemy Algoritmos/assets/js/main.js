const form = document.querySelector(".form");
const name1 = form.querySelector(".name-person");
const idade1 = form.querySelector(".idade-person");
const res = document.querySelector('#res')

const arrayPerson = [];

// pegando o envio de formulario com submit pega pelo form e não pelo click
//Alternativa para pegar evento
/*form.onsubmit = function (event) {
    event.preventDefault()
    console.log(name1.value, idade1.value);
    alert("enviado");
} */

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createPerson();
    resultado()
});

function createPerson() {
    arrayPerson.push({ 
        nome: name1.value, 
        idade: Number(idade1.value) 
    });
}

function resultado () {
    const resMedia = mediaIdade().toFixed(1)
    res.innerHTML += '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'
    res.innerHTML += `<br />${name1.value} ${Number(idade1.value)}<br />
    Tivemos ${arrayPerson.length} pessoas informadas <br />
    e a media das suas idades é ${resMedia}<br />`
}

function somaIdade() {
    let idades = [];
    let totIdade = 0
    for (index in arrayPerson) {
        idades.push(arrayPerson[index].idade);
        totIdade += arrayPerson[index].idade;
    }   
    return totIdade
}

function mediaIdade () {
    let media = somaIdade() / arrayPerson.length
    return media
}






/*
function createPerson (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}
const person1 = createPerson('mario', 48)
const person2 = createPerson("ady", 49);
console.log(person1.nome, person2.nome)
const somaIdade = person1.idade + person2.idade
console.log(somaIdade)*/
