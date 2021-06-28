import "./App.css";
// import paintings from "./paintings.json";
// import PaintingList from "./components/PaintingList/PaintingList";
// import Section from "./components/Section/Section";
// import ColorPiker from "./components/ColorPicker/ColorPicker";
import Alert from "./components/Alert/Alert";
import Container from "./components/Container/Container";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

function App() {
  return (
    <Container>
      {/* <ColorPiker options={colorPickerOptions} />
      <Section title="dwedwd">
        <PaintingList paintings={paintings} />
      </Section> */}
      <Alert alert="Шеф, все пропало" type="success" />
      <Alert alert="Шеф, все пропало" type="warning" />
      <Alert alert="Шеф, все пропало" type="error" />
    </Container>
  );
}

export default App;
