import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import profile from "./profile.png";

function firebase() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  console.log(db);
  // const ref = doc(db, "Clients", "Client_1");
  // const docSnap = getDoc(ref);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
}

function App() {
  // firebase();
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Username</p>
        <img className="App-logo" src={profile} />
        <p className="App-link">Number of Pills: 5</p>
      </header>
    </div>
  );
}

export default App;
