
import { useState, useEffect } from "react";

export default function Zadania() {
   const [zadania, setZadania] = useState([]);
   const [tekst, setTekst] = useState("");
   const [blad, setBlad] = useState("");

useEffect(() => {
  const zapisane = localStorage.getItem("zadania");
  if (zapisane) setZadania(JSON.parse(zapisane));
}, []);

useEffect(() => {
  localStorage.setItem("zadania", JSON.stringify(zadania));
}, [zadania]);
  function dodaj(e) {
    e.preventDefault();
    const wartosc = tekst.trim();
    if (wartosc.length < 3) {
      setBlad("Zadanie musi mieć min. 3 znaki.");
      return;
    }
    setZadania([...zadania, wartosc]);
    setTekst("");
    setBlad("");
  }

  return (
    <section>
      <h2>Zadania</h2>
      <form onSubmit={dodaj}>
        <label>
          Nowe zadanie:{" "}
          <input
            value={tekst}
            onChange={(e) => setTekst(e.target.value)}
            aria-invalid={blad ? "true" : "false"}
          />
        </label>
        <button type="submit">Dodaj</button>
        {blad && <p style={{ color: "red" }}>{blad}</p>}
      </form>
      <ul>
        {zadania.map((z, i) => (
          <li key={i}>{z}</li>
        ))}
      </ul>
    </section>
  );
}