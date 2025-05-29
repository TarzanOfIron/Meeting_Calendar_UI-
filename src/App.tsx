import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ListOfCreatedMeetings from "./components/ListOfCreatedMeetings";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Heading></Heading>
      <div className="d-flex pt-5 flex-fill" style={{ background: "#f2f2f2" }}>
        <div className="col col-4">
          <Menu></Menu>
        </div>
        <div className="col col-6">
          <Dashboard></Dashboard>
          <ListOfCreatedMeetings></ListOfCreatedMeetings>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
