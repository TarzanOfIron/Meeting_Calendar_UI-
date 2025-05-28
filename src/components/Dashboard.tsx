const Dashboard = () => {
  return (
    <div className="w-100 bg-white p-3">
      <h1 className="mb-3">Dashboard Body</h1>
      <form>
        <div className="form-group my-1">
          <label htmlFor="title">Meeting Title</label>
          <input
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
              type="date"
              className="form-control"
              id="date"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="form-group w-50">
            <label htmlFor="meetingTime">Meeting Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              placeholder="--:--"
            />
          </div>
        </div>
        <div className="form-group my-1">
          <label htmlFor="meetingLevel">Meeting Level</label>
          <select className="form-control" id="level">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group my-1">
          <label htmlFor="participants">Meeting Participants</label>
          <textarea
            className="form-control"
            id="participants"
            placeholder="Enter meeting participants"
            rows={3}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="bi bi-calendar-plus-fill me-2"></i>
          Create Meeting
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
