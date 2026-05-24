import { useEffect, useState } from "react";

export default function Pogoda() {
  const [dane, setDane] = useState(null);
  const [blad, setBlad] = useState(null);
  const [laduje, setLaduje] = useState(true);

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=51.76&longitude=19.46&current=temperature_2m";
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then((json) => {
        setDane(json);
        setLaduje(false);
      })
      .catch((e) => {
        setBlad(e.message);
        setLaduje(false);
      });
  }, []);

  if (laduje) return <p>Ładowanie pogody…</p>;
  if (blad) return <p>Nie udało się pobrać pogody ({blad}).</p>;
  return <p>Temperatura: {dane.current.temperature_2m}°C</p>;
}