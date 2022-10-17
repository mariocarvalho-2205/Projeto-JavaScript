const openPopup = document.querySelector('#openPopup')
const popup = document.querySelector('dialog')
const closePopup = document.querySelector('#closePopup')

openPopup.onclick = function (callback) {
    //popup.show()  // mostra o popup fixo na pagina
    popup.style = `
        border: none;
        border-radius: 1em;
        box-shadow: 0 0 1em rgb(0 0 0 / .3);
    `;
    popup.showModal()  // mostra o popup flutuante  // para fechar usa o esc

}

closePopup.addEventListener('click', () => {
    popup.close()
})

