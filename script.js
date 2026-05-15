const imie = "Jan";
let wiek = 17;
const lista = ["Posprzątać", "Powtórzyć HTML", "Pobiegać"];
const osoba = { imie: "Jan", wiek: 17 };

console.log(`Cześć, jestem ${imie} i mam ${wiek} lat.`);
console.log(lista.length);
console.log(osoba.imie);

const naglowek = document.querySelector("h1");
const przycisk = document.querySelector("#przycisk");

function zmienTytul() {
  naglowek.textContent = "Witaj, świecie!";
}

przycisk.addEventListener("click", zmienTytul);

const ul = document.querySelector("#lista-zadan");
const zadania = ["Posprzątać", "Powtórzyć HTML", "Pobiegać"];
zadania.forEach((z) => {
  const li = document.createElement("li");
  li.textContent = z;
  ul.appendChild(li);
});