
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { HeaderApps } from "./components/HeaderApps"
import { ListProducts } from "./components/ListProducts"


function App() {
  return (
    <Container>
    <div className="App">
      <div class="headstyle">
      <HeaderApps />
      </div>
      <ListProducts />

    </div>
    </Container>
  );
}

export default App;
