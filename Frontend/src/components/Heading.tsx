import "bootstrap-icons/font/bootstrap-icons.css";

const tabs = ["Home", "About", "Services", "Contact"];

const Heading = () => {
  return (
    <div className="bg-dark d-flex">
      <i
        className="bi bi-calendar4-week m-3"
      ></i>
      {tabs.map((tab) => (
        <a
          key={tab}
          className="text-white my-auto mx-2 link-underline-dark"
          href="#"
        >
          {tab}
        </a>
      ))}
      <div className="d-flex my-auto ms-auto">
        <i
          className="bi bi-person-circle"
          style={{ color: "white" }}
        ></i>
        <a
          className="text-white link-underline-dark mx-2"
          href="#"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Heading;
