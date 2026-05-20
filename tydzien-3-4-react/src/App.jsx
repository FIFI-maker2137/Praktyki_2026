import Header from "./components/Header";
import Pogoda from "./components/Pogoda";
import Zadania from "./components/Zadania";
import Footer from "./components/Footer";

export default function App() {
  const moje_zadania = ["Powtórzyć HTML", "Zrobić zakupy", "Pobiegać"];
  return (
    <>
      <Header tytul="Mój panel" />
      <main>
        <Pogoda />
        <Zadania lista={moje_zadania} />
      </main>
      <Footer autor="Filip Sadowski" />
    </>
  );
}