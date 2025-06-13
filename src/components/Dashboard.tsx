import { useRef, type FormEvent } from "react";
import type { Meeting } from "../App";


interface props {
  addMeeting: (newMeeting: Meeting) => void;
  getNextMeetingId: () => number;
}

const Dashboard = ({ addMeeting, getNextMeetingId }: props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);
  const participantsRef = useRef<HTMLTextAreaElement>(null);

  const meeting = {
    id: -1,
    title: "",
    date: "",
    time: "",
    priority: "",
    participants: "",
  };

  const handleEvent = (event: FormEvent) => {
    event.preventDefault();
    if (titleRef.current !== null) {
      meeting.title = titleRef.current.value;
    }
    if (dateRef.current !== null) {
      meeting.date = dateRef.current.value;
    }
    if (timeRef.current !== null) {
      meeting.time = timeRef.current.value;
    }
    if (priorityRef.current !== null) {
      meeting.priority = priorityRef.current.value;
    }
    if (participantsRef.current !== null) {
      meeting.participants = participantsRef.current.value;
    }
    if (priorityRef.current !== null) {
      meeting.priority = priorityRef.current.value as "Low" | "Medium" | "High";
    }
    if (participantsRef.current !== null) {
      meeting.participants = participantsRef.current.value;
    }

    console.log(getNextMeetingId)


    meeting.id = getNextMeetingId();

    addMeeting(meeting);
  };

  return (
    <div className="w-100 bg-white p-3">
      <h1 className="mb-3">Dashboard Body</h1>
      <form onSubmit={handleEvent}>
        <div className="form-group my-1">
          <label htmlFor="meetingTitle">Meeting Title</label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            id="meetingTitle"
            aria-describedby="emailHelp"
            placeholder="Enter meeting title"
          />
        </div>
        <div className="d-flex my-1">
          <div className="form-group w-50 me-4">
            <label htmlFor="meetingDate">Meeting Date</label>
            <input
              ref={dateRef}
              type="date"
              className="form-control"
              id="date"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="form-group w-50">
            <label htmlFor="meetingTime">Meeting Time</label>
            <input
              ref={timeRef}
              type="time"
              className="form-control"
              id="time"
              placeholder="--:--"
            />
          </div>
        </div>
        <div className="form-group my-1">
          <label htmlFor="meetingPriority">Meeting Priority</label>
          <select className="form-control" id="priority" ref={priorityRef}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group my-1">
          <label htmlFor="participants">Meeting Participants</label>
          <textarea
            ref={participantsRef}
            className="form-control"
            id="participants"
            placeholder="Enter meeting participants"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-calendar-plus-fill me-2"></i>
          Create Meeting
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
