import { useEffect, useState } from "react";

export default function Ciekawostka() {
  const [kraj, setKraj] = useState(null);
  const [laduje, setLaduje] = useState(true);
  const [blad, setBlad] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags")
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then((dane) => {
        const losowy = dane[Math.floor(Math.random() * dane.length)];
        setKraj(losowy);
        setLaduje(false);
      })
      .catch((e) => {
        setBlad(e.message);
        setLaduje(false);
      });
  }, []);

  if (laduje) return <p>Ładowanie ciekawostki…</p>;
  if (blad) return <p>Błąd: {blad}</p>;
  return (
    <section>
      <h2>Losowe państwo</h2>
      <img src={kraj.flags.png} alt={kraj.name.common} width="100" />
      <p><strong>{kraj.name.common}</strong></p>
      <p>Stolica: {kraj.capital?.[0] ?? "brak danych"}</p>
    </section>
  );
}