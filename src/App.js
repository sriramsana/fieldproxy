import "./App.css";
import Input from "./components/Input";
import Tables from "./components/Tables";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Input} />
      <Route exact path="/table" component={Tables} />
    </div>
  );
};

export default App;
