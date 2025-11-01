import { useEffect, useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(intervalId)
//   }, []);
//   return (
//     <div className="text-2xl text-white flex flex-col items-center mt-6 gap-3">
//       <button
//         className="rounded-full border w-30 bg-sky-500 hover:cursor-pointer"
//       >
//         Count: {count}
//       </button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="min-h-screen bg-fuchsia-950">
      <h1 className="text-3xl text-blue-700 text-center font-bold">
        Hello React
      </h1>
      <div className="text-2xl text-white flex flex-col items-center mt-6 gap-3">
        <button
          className="rounded-full border w-30 bg-sky-500 hover:cursor-pointer"
          onClick={handleClick}
        >
          Count: {count}
        </button>
        <span className="rounded-full border w-40 bg-sky-500 text-center">
          Result: {count % 2 == 0 ? "even" : "odd"}
        </span>
      </div>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
