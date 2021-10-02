import { createContext, useState } from "react";
import "./App.css";
import GrandFather from "./components/GrandFather/GrandFather";

// 1st step => create context
// 4th step => ei context ta ke export kore dite hobe.. karon ata  ke amra onno akta jaiga theke use korbo
export const RingContext = createContext("ring");

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring";
  return (
    // 2nd step =>  full jinis gola oi context er name.provider er vitore rakhbo
    // 3rd step => akta value set kore dibo   (hardCoded or dynamically)
    <RingContext.Provider value={ornaments}>
      <div className="App">
        <p style={{ textAlign: "center" }}>
          <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        </p>
        <GrandFather ornaments={ornaments} house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
