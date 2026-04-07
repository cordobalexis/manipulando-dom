// const { createElement } = require("react");

const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "uno",
  },
  {
    tema: "node",
    class: "dos",
  },
  {
    tema: "oop",
    class: "tres",
  },
  {
    tema: "typescript",
    class: "cuatro",
  },
  {
    tema: "css",
    class: "cinco",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  console.log("JS cargó");
  const listaNueva = document.querySelector(".lista")
  const lista = document.querySelectorAll(".lista li");
  lista.forEach((p) => {
    p.remove();
  })
  cosasQueAprendimos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.tema;
    li.className = item.class;
    listaNueva.appendChild(li);
  })
}

main();
