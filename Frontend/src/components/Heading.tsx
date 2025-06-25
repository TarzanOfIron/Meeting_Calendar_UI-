import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const tabs = ["Home", "About", "Services", "CreateMeeting", "DashBoard"];

const Heading = () => {
  return (
    <div className="bg-dark d-flex">
      <i className="bi bi-calendar4-week m-3" style={{ color: "white" }}></i>
      {tabs.map((tab) => (
        <Link
          key={tab}
          className="text-white my-auto mx-2 link-underline-dark"
          to={"/" + tab}
        >
          {tab}
        </Link>
      ))}
      <div className="d-flex my-auto ms-auto">
        <i className="bi bi-person-circle" style={{ color: "white" }}></i>
        <Link className="text-white link-underline-dark mx-2" to="#">
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Heading;
