import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SideNavBar from "./Components/SideNavBar";

function App() {
  return (
    <div>
      <div id="page-top">
        <div id="wrapper">
          <SideNavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
