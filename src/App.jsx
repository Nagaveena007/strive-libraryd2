import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import FooterPart from "./components/FooterPart";
import JumbotronPart from "./components/JumbotronPart";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div className="App">
      <MyNav />
      <JumbotronPart />
      <WarningSign text="This is a danger alert!" />
      <Home  />
      
      <FooterPart />
    </div>
  );
}

export default App;
