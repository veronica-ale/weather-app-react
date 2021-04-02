import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container border rounded border-primary">
        <Weather defaultCity="Lisbon" />
      </div>
      <footer className="footer">
        <i className="fab fa-github"></i>
        <a
          href="https://github.com/veronica-ale/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code{" "}
        </a>
        by Veronica Alessandrini
      </footer>
    </div>
  );
}
