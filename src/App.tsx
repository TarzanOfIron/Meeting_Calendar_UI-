import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Heading></Heading>
      <div className="d-flex">
        <Menu></Menu>
        <Dashboard></Dashboard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
