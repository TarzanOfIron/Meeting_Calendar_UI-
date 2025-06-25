import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMeeting from "./components/CreateMeeting";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ListOfCreatedMeetings from "./components/Meetings";
import Menu from "./components/Menu";
import { useState } from "react";
import Meetings from "./components/Meetings";

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

  const addMeeting = (newMeeting: Meeting) => {
    setMeetings((prev) => [...prev, newMeeting]);
  };

  const loadMeetings = (loaded: Meeting[]) => {
    setMeetings(loaded);
  };

  const getNextMeetingId = () => {
    setMeetingIdCounter(meetingId + 1);
    return meetingId;
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Heading></Heading>
        <div
          className="d-flex pt-5 flex-fill"
          style={{ background: "#f2f2f2" }}
        >
          <div className="col col-4">
            <Menu></Menu>
          </div>
          <Routes>
            <Route
              path="/DashBoard"
              element={
                <div className="col-7">
                  <h1 className="p-3 mb-0 bg-white">Dashboard Body</h1>
                  <CreateMeeting
                    getNextMeetingId={getNextMeetingId}
                    addMeeting={addMeeting}
                  ></CreateMeeting>
                  <Meetings
                    meetings={meetings}
                    onRemoveMeeting={removeMeeting}
                    onLoadMeetings={loadMeetings}
                  ></Meetings>
                </div>
              }
            />
            <Route
              path="/Meetings"
              element={
                <div className="col-7">
                  <h1 className="p-3 mb-0 bg-white">Dashboard Body</h1>
                  <Meetings
                    meetings={meetings}
                    onLoadMeetings={loadMeetings}
                    onRemoveMeeting={removeMeeting}
                  ></Meetings>
                </div>
              }
            />
            <Route
              path="/CreateMeeting"
              element={
                <div className="col-7">
                  <h1 className="p-3 mb-0 bg-white">Dashboard Body</h1>
                  <CreateMeeting
                    getNextMeetingId={getNextMeetingId}
                    addMeeting={addMeeting}
                  ></CreateMeeting>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
