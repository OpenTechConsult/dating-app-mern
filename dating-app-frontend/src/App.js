import "./App.css";
import DatingCards from "./components/datingcards.component";
import SwipeButtons from "./components/swipebuttons.component";
import Header from "./components/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
