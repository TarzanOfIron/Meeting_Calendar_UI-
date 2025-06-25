# 🗓️ Meeting Scheduler – Full Stack Application

This is a full-stack meeting scheduling application built with:

- 🖥️ **Frontend**: React + TypeScript + Vite
- ⚙️ **Backend**: Java Spring Boot (REST API)

It allows users to create, view, and manage meetings, with a clean user interface and persistent backend storage.

---

## 🔧 Technologies Used

### Frontend

- React 19
- TypeScript
- Vite
- React Router v7
- Axios
- Bootstrap 5 + Bootstrap Icons
- ESLint + TypeScript ESLint


## 🚀 How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/TarzanOfIron/Meeting_Calendar_UI-.git
cd meeting-scheduler
```

---

## 🎨 Frontend Setup (React + Vite)

### Requirements

- Node.js (v18+)
- npm or yarn

### Steps

```bash
cd frontend
npm install
npm run dev
```

Runs on:  
🌐 `http://localhost:5173`

### Scripts

| Script           | Description                  |
|------------------|------------------------------|
| `npm run dev`    | Start Vite dev server        |
| `npm run build`  | Build for production         |
| `npm run preview`| Preview the built app        |
| `npm run lint`   | Run ESLint                   |

---

## 🧠 Frontend App Flow

- **`App.tsx`** manages state and routing
- Routes:
  - `/Dashboard`: create + list meetings
  - `/CreateMeeting`: form only
  - `/Meetings`: list only
- Components:
  - `CreateMeeting`: form to create a meeting
  - `Meetings`: table showing meetings
  - `Heading`, `Menu`, `Footer`: layout UI
- State is handled using `useState()` and updated via props

### Meeting Type

```ts
export interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  priority: string;
  participants: string;
}
```

---

## 📂 Example File Overview

### `App.tsx` (key features)

- Holds `meetings` state
- Defines `addMeeting`, `removeMeeting`, `loadMeetings`, `getNextMeetingId`
- Manages routing via React Router

### `CreateMeeting.tsx`

- Uses `useRef` for form fields
- Submits meeting to backend via Axios POST
- Calls `addMeeting()` on success

### `Meetings.tsx`

- Uses `useEffect()` to fetch meetings from backend via Axios GET
- Renders list in a Bootstrap table

---

## 🧪 Linting Config (ESLint)

Custom ESLint setup is included in the root config files:

- Uses `@eslint/js`, `eslint-plugin-react-hooks`, `typescript-eslint`
- Lint with `npm run lint`

---

## 📦 Dependencies

### `dependencies` (Frontend)

```json
"axios": "^1.10.0",
"bootstrap": "^5.3.6",
"bootstrap-icons": "^1.13.1",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-router-dom": "^7.6.2",
"react-hook-form": "^7.57.0"
```

---

## 👨‍🏫 For Instructors

This project demonstrates:

- Full-stack development using modern frameworks
- Type-safe and component-based React
- RESTful API integration
- Real-time state management without refresh
- Clean and structured code separation