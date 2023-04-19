import "./App.css";
import NavScrollExample from "../src/navbar/navbar.js";
import BasicExample from "../src/banner/banner.js";
import Footer from "../src/footer/footer.js";

function App() {
  return (
    <div className="bg-color">
      <div class="navbar">
        <NavScrollExample />
      </div>
      <div className="banner">
        <BasicExample />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
