import { useState } from "react";

export default function Licznik() {
  const [ile, setIle] = useState(0);
  return (
    <section>
      <h2>Licznik kliknięć</h2>
      <p>Kliknięto: {ile}</p>
      <button onClick={() => setIle(ile + 1)}>Dodaj</button>
      <button onClick={() => setIle(0)}>Reset</button>
    </section>
  );
}