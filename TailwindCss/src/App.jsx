import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LiveClock from "./components/LiveClock";
import CountingStarsGame from "./components/CountingStarsGame";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [letter, setLetter] = useState("A");
  // const [isRunning, setIsRunning] = useState(true);
  // const [newCount, setNewCount] = useState(0);
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   document.title = `You clicked ${newCount} times`;
  // }, [newCount]);

  // const date = new Date();
  // const realtime = date.toLocaleTimeString();

  // useEffect(() => {
  //   if (!isRunning) return;

  //   const interval = setInterval(() => {
  //     setLetter((prev) =>
  //       prev === "Z" ? "A" : String.fromCharCode(prev.charCodeAt(0) + 1)
  //     );
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [isRunning]);

  // const changeTitle = () => {
  //   document.title = `Current Letter: ${letter}`;
  // };

  // const student = ["Debasis", "Subham", "Sridhar"];
  // const newStudent = [
  //   { id: 1, name: "Debasis", age: 22 },
  //   { id: 2, name: "Subham", age: 23 },
  //   { id: 3, name: "Sridhar", age: 22 },
  // ];
  return (
    <>
      {/* <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-6">
  {/* Header 
  <h1 className="text-blue-500 text-5xl font-bold bg-black py-4 text-center rounded-lg shadow-lg">
    Hello Devs.
  </h1>

  {/* Student List 
  <div className="mt-6">
    <h2 className="text-3xl font-semibold text-center">Student List</h2>
    <ul className="mt-3 space-y-2 text-lg text-gray-300">
      {student.map((students, index) => (
        <li key={index} className="p-2 bg-gray-800 rounded-lg shadow-md">
          {students}
        </li>
      ))}
    </ul>
  </div>

  {/* Object Data 
  <div className="mt-8">
    <h1 className="text-4xl font-bold bg-blue-600 text-center py-3 rounded-md shadow-md">
      Object Data
    </h1>
    <ul className="mt-4 space-y-2 text-lg">
      {newStudent.map((newStudents, index) => (
        <li
          key={index}
          className="p-3 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          {newStudents.name}
        </li>
      ))}
    </ul>
  </div>

  {/* Counter 
  <div className="mt-10 text-center">
    <h1 className="text-5xl font-extrabold bg-amber-400 py-4 rounded-md shadow-lg">
      Counter: {count}
    </h1>
    <button
      className="mt-4 px-6 py-3 bg-amber-950 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-amber-800 transition-all"
      onClick={() => setCount(count + 1)}
    >
      Add
    </button>
  </div>

  {/* PROPS 
  <div className="mt-10">
    <h1 className="text-3xl font-semibold text-center">PROPS</h1>
    <Home name="Debasis" students={newStudent} />
  </div>

  {/* Alphabet Increment & Pause/Resume 
  <div className="mt-16 flex flex-col items-center">
    <h1 className="text-6xl font-bold">{letter}</h1>
    <div className="flex gap-4 mt-4">
      <button
        onClick={changeTitle}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        Change Title
      </button>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition-all ${
          isRunning
            ? "bg-red-500 hover:bg-red-700 text-white"
            : "bg-green-500 hover:bg-green-700 text-white"
        }`}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  </div>

  {/* Click Counter 
  <div className="mt-10 text-center">
    <button
      className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 transition-all"
      onClick={() => setNewCount((prev) => prev + 1)}
    >
      Click {newCount} times
    </button>
  </div>

  {/* Real-time Clock 
  <div className="mt-12 text-center">
    <h1 className="text-2xl font-semibold">Time: {realtime}</h1>
    <h1 className="text-3xl font-bold mt-2 bg-gray-800 py-2 rounded-lg shadow-md">
      Realtime: {realtime}
    </h1>
  </div>
</div>


      <LiveClock /> */}

      <CountingStarsGame />
    </>
  );
};

export default App;
