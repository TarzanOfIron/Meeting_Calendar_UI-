import type {Meeting} from '../App'

interface meetingsProps {
  meetings: Meeting[];
  onRemoveMeeting: (id: number) => void;
}


const ListOfCreatedMeetings = ({meetings, onRemoveMeeting}: meetingsProps) => {


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
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.id}</td>
              <td>{meeting.title}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
              <td>{meeting.priority}</td>
              <td>
                <i className={binIcon} onClick={() => onRemoveMeeting(meeting.id)}></i>
                <i className={editIcon}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCreatedMeetings;




 const binIcon = "bi bi-trash me-2"
 const editIcon = "bi bi-pen"