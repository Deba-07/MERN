import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import celebrationAnimation from "../assets/celebration.json";
import sadAnimation from "../assets/sad.json";

const CountingStarsGame = () => {
  const [targetNumber, setTargetNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
    setSelectedNumber(null);
    setFeedback(null);
  };

  const checkAnswer = (number) => {
    setSelectedNumber(number);
    if (number === targetNumber) {
      setFeedback("correct");
      setTimeout(() => generateNewNumber(), 3000);
    } else {
      setFeedback("wrong");
    }
  };

  const getRandomOptions = () => {
    const options = new Set([targetNumber]);
    while (options.size < 3) {
      options.add(Math.floor(Math.random() * 10) + 1);
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 animate-bounce">Count the Stars! ⭐</h1>
      <p className="text-lg animate-pulse">How many stars do you see?</p>
      <div className="flex flex-wrap gap-3 my-4 justify-center">
        {[...Array(targetNumber)].map((_, i) => (
          <motion.span
            key={i}
            className="text-5xl"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        {getRandomOptions().map((number) => (
          <motion.button
            key={number}
            onClick={() => checkAnswer(number)}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:scale-110 transition-transform text-xl"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            aria-label={`Select ${number}`}
          >
            {number}
          </motion.button>
        ))}
      </div>

      {feedback === "correct" && (
        <motion.div
          className="flex flex-col items-center mt-4"
          animate={{ scale: [0.8, 1.5, 1], rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Lottie animationData={celebrationAnimation} className="w-48" />
        </motion.div>
      )}
      {feedback === "wrong" && (
        <motion.div
          className="flex flex-col items-center mt-4"
          animate={{ x: [0, -20, 20, -20, 0], rotate: [0, -10, 10, -10, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Lottie animationData={sadAnimation} className="w-48" />
        </motion.div>
      )}
    </div>
  );
};

export default CountingStarsGame;
