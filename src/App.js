import "./App.css";
import Boxes from "./Components/Body/Boxes";
import Gallery from "./Components/Body/Gallery";
import CloneMessage from "./Components/CloneMessage";
import FootBot from "./Components/Foot/FootBot";
import FootMid from "./Components/Foot/FootMid";
import FootTop from "./Components/Foot/FootTop";
import Header from "./Components/Head/Header";

function App() {
  return (
    <div className="App">
      <CloneMessage />
      <Header />
      <div className="Body-Main">
        <Gallery />
        <Boxes />
      </div>
      <FootTop />
      <FootMid />
      <FootBot />
    </div>
  );
}

export default App;
