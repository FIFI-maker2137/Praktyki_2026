import Header from "./components/Header";
import Pogoda from "./components/Pogoda";
import Zadania from "./components/Zadania";
import Footer from "./components/Footer";
import Licznik from "./components/Licznik";

export default function App() {
  return (
    <>
      <Header tytul="Mój panel" />
      <main>
        <Pogoda />
        <Licznik />
        <Zadania lista={[]} />
      </main>
      <Footer autor="Filip Sadowski" />
    </>
  );
}