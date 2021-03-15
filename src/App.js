import "./App.css";
import Contacts from "./Contacts";
import ContactItem from "./ContactItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
          <Switch>
            <Route exact path="/go" component={ContactItem} />
            <Route path="/" component={Contacts} />
          </Switch>
        {/* </header> */}
      </div>
    </Router>
  );
}

export default App;
