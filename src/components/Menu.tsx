import Dashboard from "./Dashboard";

const dashItems = [
  { id: 1, title: "Dashboard", className: "bi bi-speedometer" }, // bi
  { id: 2, title: "Meetings", className: "bi bi-calendar2-plus" },
  { id: 3, title: "Users", className: "bi bi-people" },
  { id: 4, title: "Calendar", className: "bi bi-calendar4-week" },
];

const Menu = () => {
  return (
    <div style={{ fontSize: "1.25rem", background: "lightgray", width: "250px"}}>
      <ul className="list-group">
        {dashItems.map((item) => (
          <li
            key={item.id}
            className={item.className}
            
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
