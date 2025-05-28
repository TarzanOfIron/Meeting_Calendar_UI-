

const ListOfCreatedMeetings = () => {
  return (
    <div className="bg-white mt-3 p-3 ">
      <h1>List of Created Meetings</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Meating Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.id}</td>
              <td>{meeting.title}</td>
              <td>{meeting.Date}</td>
              <td>{meeting.Time}</td>
              <td>{meeting.Level}</td>
              <td><i className={binIcon}></i><i className={editIcon}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCreatedMeetings;


let meetings = [
  {
    id: 1,
    title: "First Meeting", 
    Date: "2025-10-01", 
    Time: "10:00 AM", 
    Level: "3", 
  },
  {
    id: 2,
    title: "Second Meeting", 
    Date: "2026-01-01", 
    Time: "12:00 AM", 
    Level: "4", 
  },
  {
    id: 3,
    title: "TRD Meeting", 
    Date: "2026-12-12", 
    Time: "09:30 AM", 
    Level: "4", 
  },
];

 const binIcon = "bi bi-trash me-2"
 const editIcon = "bi bi-pen"