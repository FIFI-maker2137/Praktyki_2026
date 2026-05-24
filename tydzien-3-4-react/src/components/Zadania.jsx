import { useState } from "react";

export default function Zadania() {
  const [lista, setLista] = useState(["Powtórzyć HTML", "Zrobić zakupy", "Pobiegać"]);
  return (
    <section>
      <h2>Zadania</h2>
      <ul>
        {lista.map((z, i) => (
          <li key={i}>{z}</li>
        ))}
      </ul>
    </section>
  );
}