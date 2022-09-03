function tabuada () {
  const num = document.getElementById("num"); // pode fazer a converção para numero aqui Number(document.getElementById("num").value)
  const res = document.getElementById("res");
  let n = Number(num.value);
  res.innerHTML = `Sua tabuada de ${n}!!<br />`;
  function criaTabuada() {
    for (let i = 1; i <= 10; i++) {
      res.innerHTML += `${i} + ${n} = ${n + i}<br />`;
    }
  }
  return criaTabuada();
}