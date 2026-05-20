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

const sekcja = document.getElementById("pogoda-tekst");

async function pobierzPogode() {
  sekcja.textContent = "Ładowanie…";
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=51.76&longitude=19.46&current=temperature_2m";
    const odpowiedz = await fetch(url);
    if (!odpowiedz.ok) throw new Error("HTTP " + odpowiedz.status);
    const dane = await odpowiedz.json();
    const temp = dane.current.temperature_2m;
    sekcja.textContent = `Temperatura w Łodzi: ${temp}°C`;
  } catch (blad) {
    sekcja.textContent = "Nie udało się pobrać pogody. Spróbuj odświeżyć.";
    console.error(blad);
  }
}

pobierzPogode();