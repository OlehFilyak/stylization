import "./App.css";
import paintings from "./paintings.json";
import PaintingList from "./components/PaintingList/PaintingList";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <Section title="dwedwd">
        <PaintingList paintings={paintings} />
      </Section>
    </div>
  );
}

export default App;
