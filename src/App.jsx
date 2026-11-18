import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";

function App() {

  const [isStart,setIsStart] = useState(false);
  return (
    <>
    {isStart ? (
      <Quiz/> ) : (
        <Start onStart={() => setIsStart(true)}/>
      )}
    </>
  );
}

export default App;

