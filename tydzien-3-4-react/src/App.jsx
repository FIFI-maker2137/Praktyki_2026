import Header from "./components/Header";
import Pogoda from "./components/Pogoda";
import Zadania from "./components/Zadania";
import Footer from "./components/Footer";
import Licznik from "./components/Licznik";
import Ciekawostka from "./components/Ciekawostka";

export default function App() {
  return (
    <>
      <Header tytul="Mój panel" />
      <main>
        <Ciekawostka />
        <Pogoda />
        <Licznik />
        <Zadania lista={[]} />
      </main>
      <Footer autor="Filip Sadowski" />
    </>
  );
}