
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button to connect.");

  async function getMessage() {
    try {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Could not connect to the backend.");
    }
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Docker Full-Stack Application</h1>
      <p>Frontend: React</p>
      <button onClick={getMessage}>
        Get Backend Message
      </button>
      <p>{message}</p>
    </main>
  );
}

export default App;