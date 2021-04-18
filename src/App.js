import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container border rounded border-primary">
        <Weather defaultCity="Lisbon" />
      </div>
      <footer className="footer">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/veronicaalessandrini/"
          target="_blank"
          rel="noreferrer"
        >
          Veronica Alessandrini
        </a>
        , is{" "}
        <a
          href="https://github.com/veronica-ale/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced{" "}
        </a>
        on <i className="fab fa-github"></i> and{" "}
        <a
          href="https://eager-meninsky-6a560d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
