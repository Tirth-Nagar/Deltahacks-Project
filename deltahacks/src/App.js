import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const app = initializeApp(
    "deltahacks/src/deltahacks-project-45cfa-firebase-adminsdk-tm41x-65ad7340b2.json"
  );
  const db = getFirestore(app);
  console.log(db);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
