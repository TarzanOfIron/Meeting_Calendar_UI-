

const dashItems = [
  { id: 1, title: " Dashboard", className: "bi bi-speedometer list-group-item" }, 
  { id: 2, title: " Meetings", className: "bi bi-webcam-fill list-group-item" },
  { id: 3, title: " Users", className: "bi bi-people-fill list-group-item" },
  { id: 4, title: " Calendar", className: "bi bi-calendar-day-fill list-group-item" },
];

const Menu = () => {
  return (
    <div
    className="mx-3 ms-auto"
      style={{ fontSize: "1.25rem", width: "250px" }}
    >
      <ul className="list-group">
        {dashItems.map((item) => (
          <li key={item.id} className={item.className}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
