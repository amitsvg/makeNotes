import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WM from "./WaterMark";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Home page</h1>
      <Button
        className="homeBtn"
        style={{width:"60%"}}
        variant="outline-success"
        onClick={() => navigate("create")}
      >
        CREATE A NEW NOTE
      </Button>
      <Button
        className="homeBtn"
        style={{width:"60%"}}
        variant="outline-success"
        onClick={() => navigate("create/posts")}
      >
        SEE ALL NOTES
      </Button>
      <WM/>
    </div>
  );
}

export default App;
