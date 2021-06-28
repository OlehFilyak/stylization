import "./App.css";
import paintings from "./paintings.json";
import PaintingList from "./components/PaintingList";
import Section from "./components/Section";

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
