export default function Zadania({ lista }) {
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