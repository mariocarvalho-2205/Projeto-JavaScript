const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
        <p>Próximo Post em</p>
        <span>${minutes}:${seconds}</span>
        `; 
    },

}




// export default View;  // dessa forma apenas um modulo e exportado
export { View}  // dessa forma podemos exportar mais coisas