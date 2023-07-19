import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const allRooms = async () => {
      const data = await fetch("http://localhost:3000/rooms");
      const jsonData = await data.json();
      console.log(jsonData);
      setRooms(jsonData);
    };
    allRooms();
  }, []);

  return (
    <>
      <ul >
        {rooms.map((room,index) => (
          <li key={index}>{`${room.roomType}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;


