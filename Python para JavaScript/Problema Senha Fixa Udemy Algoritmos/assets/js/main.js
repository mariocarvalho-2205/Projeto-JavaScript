let senha = 2002

function validatePassword () {
    let password = Number(prompt('Digite sua senha!'))
    let cont = 1
    console.log(cont)
    while (password !== senha || senha === "") {


        password = Number(prompt('Acesso Negado. Digite Uma Senha Valida!'))
        cont += 1
        console.log(cont)
        if (cont <= 2 && password !== senha) {
            alert('Você só tem mais uma tentativa')
        } else if (cont === 3 && password !== senha) {
            alert('Você excedeu mais de 3 tentativas. Senha Bloqueada!!!')
            break
        }

    }
    if (password === senha) {alert('Acesso Permitido!!')}
}
validatePassword()
