import './App.css';
import Component from "./Components/hw10/Component";
import TodoBox from "./Components/hw11/TodoBox";
import Card from "./Components/hw12/Card";


function App() {
  return (
    <div className="App">
      {/*<Component />*/}
      {/*  <TodoBox />*/}
        <Card>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default App;
