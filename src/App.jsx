import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11 - assign 11</p>
          <h1>My Course Manager</h1>
          <p className="subtitle">React Component, Props & State Practice</p>
        </div>
        <span className="tag">22300649's STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 assignment · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
