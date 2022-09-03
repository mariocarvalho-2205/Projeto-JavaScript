function tabuada() {
    const num = document.getElementById("num"); // pode fazer a converção para numero aqui Number(document.getElementById("num").value)
    const operador = document.querySelector('#filter').value
    const res = document.getElementById("res");

    let n = Number(num.value);

    function criaTabuada() {
        if (operador === 'operador') {
            alert('Selecione um operador ou Digite um numero!!!')
        } else {
            res.innerHTML = `Sua tabuada de ${n}!!<br />`;
            if (operador === "som") {
                for (let i = 1; i <= 10; i++) {
                    res.innerHTML += `${i} + ${+n} = ${n + i}<br />`;
                }
            }
            if (operador === "sub") {
                for (let i = 10; i >= 1; i--) {
                    res.innerHTML += `${n} - ${i} = ${n - i}<br />`;
                }
            }
            if (operador === "mul") {
                for (let i = 1; i <= 10; i++) {
                    res.innerHTML += `${n} x ${i} = ${n * i}<br />`;
                }
            }
            if (operador === "div") {
                for (let i = 1; i <= 10; i++) {
                    res.innerHTML += `${n * i} / ${n} = ${(
                        (i / n) *
                        10
                    ).toFixed()}<br />`;
                }
            }
        }

    } return criaTabuada();
}