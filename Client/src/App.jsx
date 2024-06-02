import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import "./style/form.css";
import NevBar from "./componets/NevBar";
import Footer from "./componets/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NevBar />
        <Outlet />  
        <Footer />
      </div>
    </>
  );
}

export default App;
