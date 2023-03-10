import "./App.css";
import Nav from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
