import "./App.css";
import Header from "./Header";
import HeaderCatagories from "./HeaderCatagories";

function App() {
  return (
    <>
      <div className="headContainer sticky top-0 left-0 w-full bg-white">
        <Header />
        <HeaderCatagories />
      </div>
    </>
  );
}

export default App;
