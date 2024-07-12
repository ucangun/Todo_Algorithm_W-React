import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container className="text-center">
      <Header />
      <TodoList />
    </Container>
  );
}

export default App;
