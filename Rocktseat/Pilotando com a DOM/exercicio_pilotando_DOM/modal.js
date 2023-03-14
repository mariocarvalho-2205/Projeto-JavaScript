const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function () {

    modalWrapper
        .classList
        .remove('invisible')
    console.log(modalWrapper)
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if (!modalWrapper.classList.contains('invisible')) {

        if (isEscKey) {
            modalWrapper.classList.add('invisible')
            console.log(modalWrapper)
        }
    }
})

