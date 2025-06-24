import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ListOfCreatedMeetings from "./components/ListOfCreatedMeetings";
import Menu from "./components/Menu";
import { useState } from "react";

export interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  priority: string;
  participants: string;
}

function App() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [meetingId, setMeetingIdCounter] = useState(0);

  const removeMeeting = (id: number) => {
    setMeetings((prev) => prev.filter((meeting) => meeting.id !== id));
  };

  const loadMeetings = (loaded: Meeting[]) => {
    setMeetings(loaded);
  }

  const getNextMeetingId = () => {
    setMeetingIdCounter(meetingId + 1)
    return meetingId;
  }


  return (
    <div className="d-flex flex-column min-vh-100">
      <Heading></Heading>
      <div className="d-flex pt-5 flex-fill" style={{ background: "#f2f2f2" }}>
        <div className="col col-4">
          <Menu></Menu>
        </div>
        <div className="col col-6">
          <Dashboard getNextMeetingId={getNextMeetingId}></Dashboard>
          <ListOfCreatedMeetings meetings={meetings} onRemoveMeeting={removeMeeting} onLoadMeetings={loadMeetings}></ListOfCreatedMeetings>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
